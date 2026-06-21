import React from 'react';
import { Rnd } from 'react-rnd';
import "./window.scss"

const MacWindow = ({children , width="40vw", height="40vh", windowName, windowState, setWindowState, title="rakibali - zsh"}) => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: width,
                height: height,
            }}
            minWidth={250}
            minHeight={150}
            bounds="parent"
            dragHandleClassName="window"
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div 
                        onClick={()=>(setWindowState(state=>({...state, [windowName]:false })))}
                        className='dot red'></div>
                        <div className='dot yellow'></div>
                        <div className='dot green'></div>
                    </div>
                    <div className="title">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    );
}

export default MacWindow;