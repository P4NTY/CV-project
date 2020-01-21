import React from 'react';
import './App.scss';
import Page from './components/Page/Page';
import Menu from './components/Menu/Menu';
import Picture from "./components/Picture/Picture";

import avatar from "./assets/pictures/new low.PNG";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Page>
        <Picture picture={avatar} type="circle"/>
      </Page>
    </div>
  );
}

export default App;
