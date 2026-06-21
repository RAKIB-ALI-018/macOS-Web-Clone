import React from 'react';
import './dock.scss'
import Github from './Windows/Github';
import Note from './Windows/Note';
import Spotify from './Windows/Spotify';
import Resume from './Windows/Resume';

const base = import.meta.env.BASE_URL;

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => { setWindowState(state => ({ ...state, Github: true })) }}
        className="icon github"><img src={`${base}doc-icons/github.svg`} alt="" />
      </div>

      <div
        onClick={() => { window.open("https://calendar.google.com/", "_blank") }}
        className="icon calender"><img src={`${base}doc-icons/calender.svg`} alt="" />
      </div>

      <div
        onClick={() => { window.open("https://www.linkedin.com/in/rakib-ali-a3366032a/", "_blank") }}
        className="icon link"><img src={`${base}doc-icons/link.svg`} alt="" />
      </div>

      <div
        onClick={() => { window.open("mailto:rakibali99580@gmail.com", "_blank") }}
        className="icon mail"><img src={`${base}doc-icons/mail.svg`} alt="" />
      </div>

      <div
        onClick={() => { setWindowState(state => ({ ...state, Note: true })) }}
        className="icon note"><img src={`${base}doc-icons/note.svg`} alt="" />
      </div>

      <div onClick={() => { setWindowState(state => ({ ...state, Resume: true })) }}
        className="icon pdf"><img src={`${base}doc-icons/pdf.svg`} alt="" />
      </div>

      <div onClick={() => { setWindowState(state => ({ ...state, Spotify: true })) }}
        className="icon spotify"><img src={`${base}doc-icons/spotify.svg`} alt="" />
      </div>

      <div
        onClick={() => { setWindowState(state => ({ ...state, Cli: true })) }}
        className="icon cli"><img src={`${base}doc-icons/cli.svg`} alt="" />
      </div>

    </footer>
  );
}

export default Dock;