import React from 'react';
import {useState} from 'react'
import "./app.scss"
import Dock from './Components/Dock';
import Nav from './Components/Nav';
import MacWindow from './Components/Windows/MacWindow';
import Github from './Components/Windows/Github';
import Note from './Components/Windows/Note';
import Resume from './Components/Windows/Resume';
import Spotify from './Components/Windows/Spotify';
import Cli from './Components/Windows/Cli';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const App = () => {
  const [windowState, setWindowState] = useState({
    Github:false,
    Note:false,
    Resume:false,
    Spotify:false,
    Cli:false
  });

  
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState}/>
      {windowState.Github && <Github windowName='Github'  setWindowState={setWindowState}/>}
      {windowState.Note && <Note windowName='Note'  setWindowState={setWindowState}/>}
      {windowState.Resume && <Resume windowName='Resume'  setWindowState={setWindowState}/>}
      {windowState.Spotify && <Spotify windowName='Spotify'  setWindowState={setWindowState}/>}
      {windowState.Cli && <Cli windowName='Cli'  setWindowState={setWindowState}/>}
    </main>
  );
}

export default App;
