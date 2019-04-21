import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import shoppingCart from './reducers/shoppingCart.js'


const rootReducer = combineReducers({
 shoppingCart
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
