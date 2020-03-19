import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { Provider } from "react-redux";
import {createStore} from 'redux'
import rootReduce from './Reducers'
import { createGlobalStyle } from "styled-components";

const store = createStore(rootReduce)
const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }
  :root{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`;


render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
    document.getElementById("root")
  );
