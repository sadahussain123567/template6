import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white border-t border-gray-200 py-8">
  <div className="container mx-auto px-4 sm:px-6 md:px-12">
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <div>
        <h2 className="text-xl font-bold text-gray-900">Funiro.</h2>
        <p className="mt-4 text-sm text-gray-500">
          400 University Drive Suite 200 Coral Gables, <br />
          FL 33134 USA
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400">Links</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Home</a></li>
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Shop</a></li>
          <li><a href="#" className="text-sm text-gray-900 hover:underline">About</a></li>
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Contact</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-sm font-semibold text-gray-400">Help</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Payment Options</a></li>
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Returns</a></li>
          <li><a href="#" className="text-sm text-gray-900 hover:underline">Privacy Policies</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-sm font-semibold text-gray-400">Newsletter</h3>
        <form className="mt-4 flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-grow p-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md text-sm font-semibold hover:bg-gray-700"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-200 pt-6 text-center">
      <p className="text-sm text-gray-500">2023 Funiro. All rights reserved</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

