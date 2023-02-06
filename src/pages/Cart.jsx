import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {state: { cart }, dispatch } = useStateContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    dispatch({ type: "CART_EMPTY" });
    navigate("/success");
  };

  const increasePrice = (price) => {
    setTotal(total + price);
  };
  const decreasePrice = (price) => {
    setTotal(total - price);
  };

  useEffect(() => {
    setTotal(cart.reduce((initial, current) => initial + current.price, 0));
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div className="flex flex-wrap mt-20"> 
          <div className="w-9/12 flex flex-col gap-5">
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice} />
            ))}
          </div>
          <div className="text-center ml-16">
            <div className="bg-gray-50 px-20 py-10 rounded shadow-lg">
              <h1 className="text-3xl text-info">
                Total Price
              </h1> 
              <h1 className="text-4xl text-yellow-600 font-semibold mt-2">
                ${total.toFixed(2)}
              </h1>
              <button onClick={checkoutHandler}
              className=" bg-info text-primary rounded shadow-lg uppercase px-5 py-2 mt-5">
                Checkout
              </button>
            </div>
            <button onClick={() => dispatch({ type: "CART_EMPTY" })}
            className="px-4 py-2 bg-danger hover:bg-red-600 text-primary rounded shadow-lg uppercase mt-20">
              Cart empty
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-center">
          <div className="bg-info p-16 rounded shadow-lg mt-60 animate__animated animate__backInDown">
            <h1 className="text-3xl font-semibold tracking-wider my-5 text-primary">
              Your Cart is Empty
            </h1>
            <button onClick={() => navigate("/")}
            className="text-primary bg-danger hover:bg-red-500 px-4 py-2 mt-2 shadow-lg uppercase rounded">
              go shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
