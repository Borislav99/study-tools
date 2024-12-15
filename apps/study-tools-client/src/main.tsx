import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
