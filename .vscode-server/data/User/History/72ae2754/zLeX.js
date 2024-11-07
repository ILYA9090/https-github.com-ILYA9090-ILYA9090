import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import UserContext from './components/Context/context.js';
import App from './components/App.js';
import store from './slices/indexx.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
// Оборачиваем приложение в Provider и передаем хранилище в него
root.render(
  
  <Provider store={store}>
    <UserContext.Provider>
    <App />
    </UserContext.Provider>
  </Provider>
  
);
