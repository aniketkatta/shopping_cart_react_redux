import React from 'react'
import { productList } from '../data/productList'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCartItemQty, increaseCartItemQty } from '../store/CartReducer'

const CartItem = () => {

  const cartItem=useSelector((state)=>{
    return state.cartItems
  })

  const dispatch=useDispatch()
  return (
    <div className='w-full'>
        <table className='w-full'>
          <thead>
            <tr className='border-b h-10'>
              <th className='font-semibold w-[5%]'>Id</th>
              <th className='font-semibold w-[25%]'>Product</th>
              <th className='font-semibold w-[25%]'>Title</th>
              <th className='font-semibold w-[10%]'>Price</th>
              <th className='font-semibold w-[10%]'>Quantity</th>
              <th className='font-semibold w-[10%]'>Total</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {
              cartItem?.map((product)=>(
                <tr>
                  <td className='w-[5%]  text-center'>{product.id}</td>
                  <td className='w-[25%] text-center flex justify-center items-center'><img src={product.image} className='h-20 w-20' /></td>
                  <td className='w-[25%] text-center'>{product.title}</td>
                  <td className='w-[10%] text-center'>$ {product.price}</td>
                  <td className='w-[10%] text-center space-x-3'><button onClick={()=>dispatch(decreaseCartItemQty(product.id))} className='p-2 bg-gray-300'>-</button> {product.quantity} <button onClick={()=>dispatch(increaseCartItemQty(product.id))} className='p-2 bg-gray-300'>+</button></td>
                  <td className='w-[10%] text-center'>$ {product.quantity*product.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default CartItem
