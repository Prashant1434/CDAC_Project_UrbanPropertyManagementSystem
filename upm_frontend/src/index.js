import React from 'react';
import ReactDOM from 'react-dom/client';
import Launcher from './components/Launcher';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Launcher />
    </Provider>
  </React.StrictMode>
);
