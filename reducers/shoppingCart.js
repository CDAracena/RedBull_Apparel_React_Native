import {
    ADD_TO_CART
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
        default: 
        return state
    }
}

export default shoppingCart;