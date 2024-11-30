import { combineReducers, createStore } from "redux";
import CartReducer, { addCartItem, decreaseCartItemQty, increaseCartItemQty, removeCartItem } from "./CartReducer";
import { addWishListItem, removeWishListItem, } from "./WishListReducer";
import ProductReducer from "./ProductReducer";
import WishListReducer from "./WishListReducer";

const reducer=combineReducers({
    products:ProductReducer,
    cartItems:CartReducer,
    wishList:WishListReducer
})

export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(()=>{
    console.log(store.getState());
})

