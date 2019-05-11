import {
    ADD_TO_CART,
    REMOVE_FROM_CART
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
        default: 
        return state
    }
}

export default shoppingCart;