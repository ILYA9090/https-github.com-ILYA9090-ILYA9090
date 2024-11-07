import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
// Оборачиваем приложение в Provider и передаем хранилище в него
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);