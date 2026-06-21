import React from 'react';
import './nav.scss'
import DateTime from './DateTime';

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="apple-logo left-item">
                    <img src="/nav-icons/apple.svg" alt="" />
                </div>
                <div className="left-item chrome">
                    <p>Chrome</p>
                </div>
                <div className="left-item">
                    <p>File</p>
                </div>
                <div className="left-item">
                    <p>Edit</p>
                </div>
                <div className="left-item">
                    <p>Selection</p>
                </div>
                <div className="left-item">
                    <p>view</p>
                </div>
                <div className="left-item">
                    <p>Go</p>
                </div>
                <div className="left-item">
                    <p>Run</p>
                </div>
                <div className="left-item">
                    <p>Terminal</p>
                </div>
                <div className="left-item">
                    <p>Window</p>
                </div>
                <div className="left-item">
                    <p>Help</p>
                </div>
            </div>
            <div className="right">
                <div className="wifi-icon right-item">
                    <img src="/nav-icons/wifi.svg" alt="" />
                </div>
                
                <div className="right-item">
                    <DateTime/>
                </div>
                
            </div>
        </nav>
    );
}

export default Nav;
