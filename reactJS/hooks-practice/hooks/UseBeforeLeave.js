import React, { useEffect } from 'react';
import './App.css';

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) { // when mouse leave on top
        onBefore();
      }
    }

    document.addEventListener("mouseleave", handle)

    return () => document.removeEventListener("mouseleave", handle)
  }, [onBefore])
}

// functional component
function UseBeforeLeave() {
  const begForLife = () => console.log("please don't leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>hello!</h1>
    </div>
  );
}

export default UseBeforeLeave;
