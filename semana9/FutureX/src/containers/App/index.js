import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

/*const homePage = ()=> <div>Home</div>
const createApply = ()=> <div>Criar Apply</div>
const autentication = ()=> <div>Autenticação</div>
const manageApply = ()=> <div>Gerenciar Apply</div>
const createTrip = ()=> <div>Criar Viagem</div>
const listTrips = ()=> <div>listar Viagem</div>*/

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
