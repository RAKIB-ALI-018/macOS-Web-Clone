import React, { useEffect, useState } from 'react';
import MacWindow from './MacWindow';
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({windowName, setWindowState}) => {
    const [markdown, setMarkdown] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}note.txt`)
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow title="Notes" windowName={windowName} setWindowState={setWindowState}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    );
}

export default Note;