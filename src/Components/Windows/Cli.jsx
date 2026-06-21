import React, { useState, useRef, useEffect } from 'react';
import MacWindow from './MacWindow';
import './cli.scss';

// Define your commands here — add as many as you like
const commands = {
    help: () => 'Available commands: help, whoami, skills, projects, education, contact, clear',
    whoami: () => 'Rakib Ali — Full-stack developer (MERN) & DSA enthusiast',
    skills: () => 'C++, JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, CSS, Git, GitHub',
    projects: () => 'FocusPilot — productivity dashboard | macOS Web Clone — this very site',
    education: () => 'B.Tech Computer Science, Netaji Subhas University of Technology (2028)',
    contact: () => 'Email: rakibali99580@gmail.com | LinkedIn & GitHub available in the dock',
};

const COMMAND_LIST = Object.keys(commands).join(', ') + ', clear';

const Cli = ({windowName,  setWindowState}) => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'Welcome to react Terminal!' },
        { type: 'output', text: `Type a command to learn more about me. Available: ${COMMAND_LIST}` },
    ]);
    const [input, setInput] = useState('');
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom whenever history updates
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const runCommand = (rawInput) => {
        const trimmed = rawInput.trim();
        const [cmd, ...args] = trimmed.split(' ');

        const newEntries = [{ type: 'input', text: rawInput }];

        if (trimmed === '') {
            // empty enter, just add a blank prompt line
        } else if (cmd === 'clear') {
            setHistory([]);
            return;
        } else if (commands[cmd]) {
            newEntries.push({ type: 'output', text: commands[cmd](args) });
        } else {
            newEntries.push({ type: 'output', text: `command not found: ${cmd}. Type "help" to see available commands.` });
        }

        setHistory((prev) => [...prev, ...newEntries]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            runCommand(input);
            setInput('');
        }
    };

    return (
        <MacWindow windowName={windowName}  setWindowState={setWindowState}>
            <div
                className="cli-window"
                ref={containerRef}
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((entry, i) => (
                    <div key={i} className={`line ${entry.type}`}>
                        {entry.type === 'input' ? (
                            <>
                                <span className="prompt">rakibali:~$</span> {entry.text}
                            </>
                        ) : (
                            entry.text
                        )}
                    </div>
                ))}

                <div className="line input-line">
                    <span className="prompt">rakibali:~$</span>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        spellCheck="false"
                    />
                </div>
            </div>
        </MacWindow>
    );
}

export default Cli;
