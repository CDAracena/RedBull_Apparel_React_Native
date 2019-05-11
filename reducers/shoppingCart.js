import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_ITEM_COUNT,
    DECREASE_ITEM_COUNT
} from '../actions/shoppingCart.js';




const initialState = {
    Cart: []
}

const shoppingCart = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case 'ADD_TO_CART': 
        console.log(action.item)
        return Object.assign({}, state, {
            Cart: [...state.Cart, action.item]
        })
        case 'REMOVE_FROM_CART': 
        return Object.assign({}, state, {
            Cart: state.Cart.filter(item => item.id !== action.id)
        })
        case 'INCREASE_ITEM_COUNT': 
        const objIdx = state.Cart.findIndex(obj => obj.id === action.id)
        const updatedObj = {...state.Cart[objIdx], itemCount: state.Cart[objIdx].itemCount + 1}
        return Object.assign({}, state, {
            Cart: [...state.Cart.slice(0, objIdx), updatedObj, ...state.Cart.slice(objIdx + 1)]
        })
        case 'DECREASE_ITEM_COUNT':
        const objectIdx = state.Cart.findIndex(obj => obj.id === action.id)
        const updatedObject = {...state.Cart[objectIdx], itemCount: state.Cart[objectIdx].itemCount - 1}
        return Object.assign({}, state, {
            Cart: [...state.Cart.slice(0, objectIdx), updatedObject, ...state.Cart.slice(objectIdx + 1)]
        })
        default: 
        return state
    }
}

export default shoppingCart;