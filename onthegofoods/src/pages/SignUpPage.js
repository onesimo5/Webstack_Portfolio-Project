import React from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up as a</h2>
        <div className="flex justify-between">
          <Link to="/clientsignup">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Client
            </button>
          </Link>
          <Link to="/chefsignup">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Chefs
            </button>
          </Link>
          <Link to="/deliverysignup">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Delivery
            </button>
          </Link>  
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
