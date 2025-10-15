import { combineReducers } from "@reduxjs/toolkit";
import app from "./main/appSlice";
import product from "./main/productSlice";

const reducer = combineReducers({
  product,
  app,
  // here we will be adding reducers
});
export default reducer;
