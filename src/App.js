import React from 'react';
import './App.scss';
import SideNav from './components/SideNav/SideNav';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
     <div className="App">
      <SideNav/>
      <MainContent/>
    </div>
  );
}

export default App;
