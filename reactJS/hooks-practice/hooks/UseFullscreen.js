import React, { useRef } from 'react';
import './App.css';

const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {  // chrome
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {  // firefox
        element.current.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { // safari
        element.current.webkitRequestFullscreen();
      } else if (element.currentmsRequestFullscreen) {  // microsoft
        element.current.currentmsRequestFullscreen();
      }

      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  }

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  }

  return { element, triggerFull, exitFull } ;
}

// functional component
function UseFullscreen() {
  const onFullscreen = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  }

  const { element, triggerFull, exitFull } = useFullscreen(onFullscreen);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt=""
          src="https://image.tving.com/upload/cms/caip/CAIP1500/P000388342.jpg/dims/resize/1280"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default UseFullscreen;
