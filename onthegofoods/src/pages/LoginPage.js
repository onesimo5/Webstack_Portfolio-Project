import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/authActions';
//import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
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
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="bg-white p-4 rounded">
        <h1 className="text-2xl font-semibold mb-4">Welcome to OnTheGo Foods</h1>
        <form>
          <div className="flex justify-between">
            Welcome
          </div>

          <div class="mb-4">
            <label for="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email"
              class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email" required 
              value={email} onChange={handleEmailChange}/>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">Password</label>
            <input type="password" id="password"
                name="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password" required
                value={password} onChange={handlePasswordChange}/>
          </div>
          <div class="mb-4">
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                   Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
