import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import {store} from "./store/store";
import "./index.css";
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <AuthContextProvider>
            <App />
        </AuthContextProvider>
  </Provider>

);