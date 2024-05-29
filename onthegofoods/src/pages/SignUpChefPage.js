import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';

function SignUpChefPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(email, password));
    navigate('/');
  };

  // event handlers to update email and password
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div class="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 mr-16">
        <h2>Sign Up as a Chef</h2>
        <div class="bg-white p-8 rounded shadow-md w-96 mx-auto">
            <h2 class="text-2xl font-semibold mb-4">Create an account</h2>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your Email" required
                        value={email} onChange={handleEmailChange}/>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password" required
                        value={password} onChange={handlePasswordChange}/>
                </div>
                <div class="mb-4">
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Sign Up
                  </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default SignUpChefPage;
