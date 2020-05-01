import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import * as en from './string/en';
import PlayList from './components/PlayList/PlayList';

function App() {
  return (
    <div >
      <Header brandName={en.JIFCAST}>
    test
      </Header>
      <PlayList/>
    </div>
  );
}

export default App;
