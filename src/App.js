import React, { useState } from 'react';
import './App.css';
import loaderImage from './assets/garbage.gif';
import Main from './components/Main/Main';
import { defaultBlockers } from "./constant";
import TextAnim from './components/TextAnim/TextAnim';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {

  const [isModalVisible, setModalVisibility] = useState(true);

  localStorage.setItem("norhea", JSON.stringify(defaultBlockers));

  setTimeout(() => {
    setModalVisibility(false);
  }, 5000);

  const alertOptions = {
    position: positions.BOTTOM_CENTER,
    timeout: 2500,
    offset: '10px',
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <div className="app">
        <div className={`modal ${isModalVisible ? '' : 'fadeOut' }`} >
          {!isModalVisible ? null:(
            <TextAnim />
          )}
          <img alt="" src={loaderImage} />
        </div>
        <div className={`${isModalVisible ? 'fadeOut' : 'fadeIn' }`}>
          <Main />
        </div>
      </div>
    </AlertProvider>
  );
}

export default App;

//Your API key is: 64afb162d60e46af9fc23521cf59fad9
//#FCE370 #cb70fc
//#FCE370 #fc70a1 #70d4fc