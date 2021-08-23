import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';

//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productReducer
    }), {}, composeEnhancer(applyMiddleware(thunk))
);

export default store;