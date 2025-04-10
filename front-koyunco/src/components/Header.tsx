import { useEffect, useRef } from 'react';

interface Dot {
  radiusX: number;
  radiusY: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
}

const AnimatedDotsHeader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const dotsRef = useRef<Dot[]>([]);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Configuración inicial
    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;
    
    canvas.width = width;
    canvas.height = height;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const dotCount = 120;
    const connectionDistance = 150; // Distancia a la que los puntos se conectan

    // Función para crear puntos
    const createDot = (cx: number, cy: number): Dot => {
      return {
        radiusX: 2 * Math.random() * cx + 1,
        radiusY: 1.2 * Math.random() * cy + 1,
        angle: Math.random() * 360 + 1,
        speed: (Math.random() * 100 < 50 ? 1 : -1) * 0.05,
        size: Math.random() * 2 + 1,
        color: `rgba(59, 130, 246, ${Math.random() * 0.6 + 0.2})`
      };
    };

    // Función para dibujar puntos
    const drawDot = (dot: Dot, ctx: CanvasRenderingContext2D, cx: number, cy: number) => {
      const x = cx + dot.radiusX * Math.cos(dot.angle / 180 * Math.PI);
      const y = cy + dot.radiusY * Math.sin(dot.angle / 180 * Math.PI);
      
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(x, y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    };

    // Función para mover puntos
    const moveDot = (dot: Dot) => {
      return {
        ...dot,
        angle: dot.angle + dot.speed
      };
    };

    // Función para manejar el redimensionamiento
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      
      canvas.width = width;
      canvas.height = height;
      
      // Recrear puntos con nuevas dimensiones
      dotsRef.current = Array.from({ length: dotCount }, () => createDot(centerX, centerY));
    };

    // Crear puntos iniciales
    dotsRef.current = Array.from({ length: dotCount }, () => createDot(centerX, centerY));

    const render = () => {
      if (!context) return;
      
      // Fondo con transparencia para efecto de rastro suave
      context.fillStyle = 'rgba(255, 255, 255, 0.15)';
      context.fillRect(0, 0, width, height);

      // Dibujar conexiones entre puntos cercanos
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dotA = dotsRef.current[i];
          const dotB = dotsRef.current[j];

          // Calcular las posiciones de los puntos
          const xA = centerX + dotA.radiusX * Math.cos(dotA.angle / 180 * Math.PI);
          const yA = centerY + dotA.radiusY * Math.sin(dotA.angle / 180 * Math.PI);

          const xB = centerX + dotB.radiusX * Math.cos(dotB.angle / 180 * Math.PI);
          const yB = centerY + dotB.radiusY * Math.sin(dotB.angle / 180 * Math.PI);

          // Calcular la distancia entre los puntos
          const dx = xA - xB;
          const dy = yA - yB;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Dibujar la línea si la distancia es menor que el umbral
          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            context.beginPath();
            context.moveTo(xA, yA);
            context.lineTo(xB, yB);
            context.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.7})`;
            context.lineWidth = opacity * 1.5;
            context.stroke();
          }
        }
      }

      // Actualizar y dibujar puntos
      dotsRef.current = dotsRef.current.map(dot => {
        const movedDot = moveDot(dot);
        drawDot(movedDot, context, centerX, centerY);
        return movedDot;
      });
      
      animationFrameRef.current = requestAnimationFrame(render);
    };

    // Configurar ResizeObserver
    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(canvas);

    // Iniciar animación
    render();

    // Limpieza
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="relative z-9 text-center max-w-2xl px-4 py-4 bg-white/20 backdrop-blur-sm rounded-lg">
        <div className="mb-4">
          <div className="relative inline-block rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white/80 backdrop-blur-sm transition-all duration-200">
            Announcing funding.{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              Read more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Koyun IT Consulting. Next-Gen Secure Data Solutions.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Combining expert IT consulting with technology, we transform your workflows. Specializing in secure file
          transfer solutions, we protect your data while boosting efficiency.
        </p>
      </div>
    </div>
  );
};

export default AnimatedDotsHeader;
