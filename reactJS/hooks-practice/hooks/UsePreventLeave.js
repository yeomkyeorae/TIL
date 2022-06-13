import React from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const protect = () => {
    window.addEventListener("beforeunload", listener)
  }
  const unprotect = () => {
    window.removeEventListener("beforeunload", listener)
  }

  return { protect, unprotect }
}

// functional component
function UsePreventLeave() {
  const { protect, unprotect } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
    </div>
  );
}

export default UsePreventLeave;
