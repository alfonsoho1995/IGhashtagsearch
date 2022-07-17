import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-NBDN9N7'
}

TagManager.initialize(tagManagerArgs);

(async () => {
  await ReactGA.initialize("G-6BLXB8D64P");
  
  // await ReactGA.send({ hitType: "page_view", page: window.location.pathname });

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
