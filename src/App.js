import React from 'react';
import './App.css';

import MainHeader from './components/Layout/MainHeader';
import SearchFiled from './components/Layout/SearchComponents/SearchField';

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <SearchFiled />
    </React.Fragment>
  );
}

export default App;
