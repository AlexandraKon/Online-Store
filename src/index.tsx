import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { GlobalStyles } from "./styles/globalStyles";
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <AuthContextProvider>
        <GlobalStyles/>
            <App />
        </AuthContextProvider>
  </Provider>

);