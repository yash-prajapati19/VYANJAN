import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {itemsReducer,itemDetailsReducer} from './reducers/itemReducers'
import {
  restaurantsReducer,
  restaurantDetailsReducer,
} from "./reducers/restaurantReducers";

const reducer = combineReducers({
 items:itemsReducer,
itemDetails:itemDetailsReducer,
restaurantsReducer,
restaurantDetailsReducer
});

let initialState = {
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
