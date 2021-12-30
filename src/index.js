import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import i18n 
import './i18n/i18n';
//Component
import ContentLoader from './components/Status/ContentLoader';
//Redux
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<ContentLoader/>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
