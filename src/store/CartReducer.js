
// Action Types
const ADD_PRODUCT='cart/addProduct'
const REMOVE_PRODUCT='cart/removeProduct'
const INCREASE_CART_QUANTITY='cart/increaseCartItem'
const DECREASE_CART_QUANTITY='cart/decreaseCartItem'

// Action Creators

export function addCartItem(productData){
    return {
        type:ADD_PRODUCT,payload:productData
    }
}

export function removeCartItem(productId){
    return {type:REMOVE_PRODUCT,payload:{productId}}
}

export function increaseCartItemQty(id,quantity=1){
    return {type:INCREASE_CART_QUANTITY,payload:{id,quantity}}
}

export function decreaseCartItemQty(id){
    return {type:DECREASE_CART_QUANTITY,payload:{id}}
}


// Reducers
export default function CartReducer(state=[],action){
    switch(action.type){
        case ADD_PRODUCT:
            const existingItem=state.find((cartItem)=>cartItem.id===action.payload.id)
            if(existingItem){
                return state.map((cartItem)=>{
                    if(cartItem.id===existingItem.id){
                        return {...cartItem,quantity:cartItem.quantity+1}
                    }
                    return cartItem
                })
            }
            return [...state,{...action.payload,quantity:1}];
        case REMOVE_PRODUCT:
            return state.filter((item)=>item.productId !==action.payload.productId);
        case INCREASE_CART_QUANTITY:
            return state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item,quantity:item.quantity+action.payload.quantity}
                }else{
                    return item
                }
            })
        case DECREASE_CART_QUANTITY:
            return state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item,quantity:item.quantity-1}
                }else{
                    return item
                }
            }).filter((item)=>item.quantity>0)
        default:
            return state
    }
}