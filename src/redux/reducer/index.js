import cartReducerHandle from "./CartReducerhandle";
import { combineReducers } from 'redux';


const reducers = combineReducers({
   cart: cartReducerHandle,
})

export default reducers;