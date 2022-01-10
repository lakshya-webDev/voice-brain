import { createStore } from "redux";
import { combineReducers } from "redux";
import { homeReducer } from "./reducers/homeReducer"
const reducer = combineReducers({
    home: homeReducer,

});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;