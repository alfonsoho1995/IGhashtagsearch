import React, {useState} from 'react';
import './App.css';
import ReactGA from 'react-ga4';

import MainHeader from './components/Layout/MainHeader';
import SearchFiled from './components/Layout/SearchComponents/SearchField';

function App() {
  const [data, setData] = useState('');

  const getBackendData = async () => {
    await fetch('/express_backend')
      .then(result => result.json())
      .then(body => setData(body))
  };

  console.log(data);

  ReactGA.send({ hitType: "page_view", page: window.location.pathname });

  return (
    <React.Fragment>
      <MainHeader />
      <SearchFiled />

      
      {/* <button onClick={getBackendData}>Get Back End Data</button>
      {data && (
        data.length === 0
          ? <p>No results</p>
          : <div>{JSON.stringify(data)}</div>
      )} */}

    </React.Fragment>
  );
}

export default App;
