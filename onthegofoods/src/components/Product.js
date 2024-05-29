import { React, useState, useEffect, useCallback } from "react";
import { HandleFetch } from "./Api";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/CartActions";
import { useNavigate } from 'react-router-dom';
import CartPage from "../pages/CartPage";

function Product({ toshow }) {
  const [pro, setPro] = useState([]);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  if (user.id === null || !(user)) {
    navigate('/login');
  }
  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          setPro(data);
          setFiltered(data)
        });
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const handleSearchResults = useCallback(() => {
    if (value === "") {
      return pro;
    } else {
        return pro.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }, [value, pro]);

  useEffect(() => {
    // Search for food
    let filtered = handleSearchResults();
    setFiltered(filtered);
  }, [value, handleSearchResults]);


  return (
    <div className="pizza">
      <div className="">
        <input
        className="input"
        placeholder="search for food"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          
        />
      </div>
      <div className="food-grid">
        {filtered &&
          filtered.map((item) => {
            return (
              // added an onclick event to each pizza item
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="pizza1" key={item.amount}
              >
                <h3>{item.name}</h3>
                <p className="p">{item.decription}</p>
                <p className="p">{item.amount}$</p>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(addToCart(item));
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                  }}
                >
                  Add to basket
                </button>
              </div>
            );
          })}
      </div>
      {/* cart window */}
      {/* if show is true */}
      {toshow ? (
        <CartPage />
      ) : null}
    </div>
  );
}

export default Product;
