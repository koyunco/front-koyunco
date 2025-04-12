
function LetsTalk() {
  return (
    <div className="max-w-xl mx-auto mt-20 mb-25 flex flex-col items-center justify-center text-center md:mx-auto p-4">
      <h2 className="text-sm font-semibold text-indigo-600">Lets Talk!</h2>

      <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Ready to transform your business?
      </p>
      <p className="mt-6 text-lg text-gray-600">
      Join hundreds of satisfied customers who trust our services every day. 
      </p>

      <div className="flex items-center space-x-4 mt-8">
      <a href="mailto:info@koyunco.com" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        Contact Us
      </a>
      <a href="#" className="text-sm/6 font-semibold">
        Schedule a Demo <span aria-hidden="true">→</span>
      </a>
      </div>

    </div>
    
  )
}

export default LetsTalk;
