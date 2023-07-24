import React, { useEffect } from 'react';
import './App.css';

import MainHeader from './components/Layout/MainHeader';
import SearchFiled from './components/Layout/SearchComponents/SearchField';

function App() {
  // express.js
  useEffect(() => {
    const fetchResource = async () => {
      const response = await fetch("/");
      const responseValue = await response.text();
      // console.log(responseValue);
    }

    fetchResource();
  }, [])
  // express.js

  return (
    <React.Fragment>
      <MainHeader />
      <SearchFiled />
    </React.Fragment>
  );
}

export default App;
