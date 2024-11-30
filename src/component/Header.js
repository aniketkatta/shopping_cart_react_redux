import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItem=useSelector((state)=>{
        return state.cartItems
    })
  return (
    <header className="bg-white h-[10%] border-b flex justify-between items-center px-4">
      <Link to='/'><h1 className="text-black text-[22px] font-semibold cursor-pointer">Shopping Cart</h1></Link>
      <div className="relative h-[100%] flex flex-col justify-center items-center">
        <Link to='/cart'><span>
          <FaShoppingCart size={20} color="" className="cursor-pointer" />
        </span></Link>
        <span className="absolute top-1 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-[12px]">
          {cartItem.reduce((acc,curr)=>acc+curr.quantity,0)}
        </span>
      </div>
    </header>
  );
};

export default Header;
