import React from 'react';
// import classes from './FormCenter.module.css';

function SignUpDeliveryPage() {
  return (
    <div class="h-screen w-screen flex flex-col items-center  bg-gray-100 mx-auto">
        <div class="bg-white p-8 rounded shadow-md w-96 mx-auto">
            {/* <h2 class="text-2xl font-semibold mb-4">Login</h2> */}
            <button type="button" class="w-full text-2xl font-semibold mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Delivery Login</button>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your Email" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                </div>
                <div class="mb-4">
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default SignUpDeliveryPage;
