import React from 'react'
import {productList} from "../data/productList"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addCartItem } from '../store/CartReducer';

const ProductPage = () => {
  const dispatch=useDispatch()
  return (
    <div className='h-[90%] overflow-y-auto grid grid-cols-4 gap-4 p-4'>
      {productList.map((product)=>(
        <div className='h-[300px] border border-black rounded-md flex flex-col items-center relative px-4 py-2'>
            <img src={product.image} className='h-[150px] w-[150px]' />
            <h1 className='text-center mt-3 font-semibold'>{product.title}</h1>
            <div className='absolute bottom-2 w-full flex justify-center items-center gap-2'>
                <button className='bg-gray-300 border p-2 rounded-sm ' onClick={()=>dispatch(addCartItem(product))}>Add To Cart</button>
                <FaRegHeart size={20} />
            </div>
        </div>
      ))}
    </div>
  )
}

export default ProductPage
