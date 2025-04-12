FROM node

WORKDIR /app

# Instalar dependencias para desarrollo
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto para desarrollo
EXPOSE 5173

# Comando para desarrollo (con Vite)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]