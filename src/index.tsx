import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyles/>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>

);