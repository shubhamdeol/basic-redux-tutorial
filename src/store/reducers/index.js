import name from "./name";
import orders from "./orders";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  Name: name,
  Orders: orders,
  //   Orders: persistReducer(ordersReducerConfig, orders),
  //   Auth: auth,
  //   form: formReducer,
  //   AppConfig: appConfig,
  //   Tags: tags,
  //   Customers: customers,
});

let store = createStore(rootReducer);

export default store;
