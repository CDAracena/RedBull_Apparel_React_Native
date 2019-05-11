export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_ITEM_COUNT = "INCREASE_ITEM_COUNT"
export const DECREASE_ITEM_COUNT = "DECREASE_ITEM_COUNT"


export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

export const increaseItemCount = (id) => ({
    type: INCREASE_ITEM_COUNT,
    id
})

export const decreaseItemCount = (id) => ({
    type: DECREASE_ITEM_COUNT,
    id
})