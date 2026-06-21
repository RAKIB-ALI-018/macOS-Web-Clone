import React from 'react';
import MacWindow from './MacWindow';
import "./spotify.scss"

const Spotify = ({windowName,  setWindowState}) => {
  return (
    <MacWindow title="Spotify" width='20vw' height='60vh' windowName={windowName}  setWindowState={setWindowState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg?utm_source=generator&theme=0&si=4f78159c10ec42fa"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
}

export default Spotify;