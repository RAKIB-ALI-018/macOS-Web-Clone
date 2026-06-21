import React from 'react';
import MacWindow from './MacWindow';
import "./resume.scss"

const Resume = ({windowName,  setWindowState}) => {
  return (
    <MacWindow title="Resume.pdf" windowName={windowName}  setWindowState={setWindowState}>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameBorder="0"></iframe>
        </div>
    </MacWindow>
  );
}

export default Resume;
