import React, { useEffect, useRef } from 'react';
import './App.css';


const useClick = (ref, onClick) => {
  const element = ref.current;

  useEffect(() => {
    if (element) {
      element.addEventListener("click", onClick);
    }

    // componenetWillUnmount
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    }
  }, [element, onClick]); // dependency
}


// functional component
function App() {
  const sayHello = () => console.log("say Hello");
  const title = useRef();
  useClick(title, sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
