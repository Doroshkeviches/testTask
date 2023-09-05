import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Card from './components/CardItem';
import Main from './pages/Main';
import RoutesList from './components/routes/RoutesList';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RoutesList />
  </Provider>
);
