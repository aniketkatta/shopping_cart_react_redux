// Action Types
const WISHLIST_ADD_ITEM='wishlist/addWishlistItem'
const WISHLIST_REMOVE_ITEM='wishlist/removeWishlistItem'



// Action Creators

export function addWishListItem(productId){
    return {type:WISHLIST_ADD_ITEM,payload:{productId}}
}

export function removeWishListItem(productId){
    return {type:WISHLIST_REMOVE_ITEM,payload:{productId}}
}


// Reducers
export default function WishListReducer(state=[],action){
    switch(action.type){
        case WISHLIST_ADD_ITEM:
            return [...state,action.payload];
        case WISHLIST_REMOVE_ITEM:
            return state.filter((item)=>item.productId!==action.payload.productId);
        default:
            return state
    }
}