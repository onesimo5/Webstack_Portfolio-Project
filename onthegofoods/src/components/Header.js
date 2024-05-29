import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import CartButton from "./CartButton";
import { logOut } from "../redux/authActions";
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="OnTheGoFoods"
            className="max-w-[250px] max-h-[100px]"
          />
        </Link>
      </div>
      <ul>
      <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
          <CartButton />
      </li>
        <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
          <Link to="/order">Order</Link>
        </li>
        {user && user.id ? (
          // Render Logout button when user is logged in
          <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
            <button
              type="button"
              onClick={handleLogOut} >
              Logout
            </button>
          </li>
        ) : (
          // Render Login and Join Us buttons when user is not logged in
          <>
            <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
              <Link to="/signup">Join Us</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
