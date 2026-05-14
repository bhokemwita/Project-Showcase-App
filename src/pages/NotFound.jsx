// import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
        <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to='/ProductPage'>Products</Link>
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                <Link to='/ContactUs'>Contact Us</Link>
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                <Link to='/Admin'>Admin Portal</Link>
            </button>
        </div>
    </div>
    
  )
}

export default NotFound