import {
    ADD_TO_CART
} from '../actions/shoppingCart.js';



const initialState = {
    Cart: []
}

const shoppingCart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART': 
        return Object.assign({}, state, {
            Cart: [...state.Cart, action.item]
        })
        default: 
        return state
    }
}

export default shoppingCart;