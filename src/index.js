import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import App from "./components/app";
import reducers from "./reducers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DefaultTheme from "./styles/DefaulTheme";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={DefaultTheme}>
      <App/>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector(".container"));
