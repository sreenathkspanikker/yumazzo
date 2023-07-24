import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store'; // Assuming your rootReducer is correctly set up in this file

import './assets/styles/main.scss';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
