import React from 'react';
import MacWindow from './MacWindow';
import "./resume.scss"

const Resume = ({windowName, setWindowState}) => {
  return (
    <MacWindow width='40vw' height='50vh' title="Resume.pdf" windowName={windowName} setWindowState={setWindowState}>
        <div className="resume-window">
            <iframe src={`${import.meta.env.BASE_URL}resume.pdf`} frameBorder="0"></iframe>
        </div>
    </MacWindow>
  );
}

export default Resume;