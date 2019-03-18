import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DefaultTheme from "./styles/DefaulTheme";
import logger from 'redux-logger';
import PublicRoute from 'routes/routes'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={DefaultTheme}>
      <PublicRoute/>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector(".container"));
