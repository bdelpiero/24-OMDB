// el inicio de la app
import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path='/' component={Main} />
        </UserContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};

export default ReactDOM.render(<Root />, document.getElementById("app"));
