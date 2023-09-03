import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import {createRoot} from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


const rootElement=document.getElementById('root');
const root=createRoot(rootElement);



root.render(
  <Auth0Provider
  domain="dev-ii0l1odd5lj20cdp.eu.auth0.com"
  clientId="jOfU9rz8gKWCEGTRKk5FE2xZCkGAFX2H"
  authorizationParams={{

    redirect_uri: 'https://furniture-v1gs.onrender.com/log'

    
  }}
>
<Provider store={store}>
  <App />
  </Provider>
</Auth0Provider>,

  );



reportWebVitals();
