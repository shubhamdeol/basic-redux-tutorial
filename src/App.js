import React from "react";
import "./App.css";
import GetName from "./GetName";
import ShowNameWithJobTitle from "./ShowNameWithJobTitle";
import { Provider } from "react-redux";
import store from "./store/reducers/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GetName />
        <ShowNameWithJobTitle />
      </div>
    </Provider>
  );
}

export default App;
