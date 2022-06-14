import React, { useEffect, useState } from 'react';
import './App.css';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    }

    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
  
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, [onChange])

  return status;
}

// functional component
function UseNetwork() {
  const handleNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are offline");
  }

  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{onLine ? "Online": "Offline"}</h1>
    </div>
  );
}

export default UseNetwork;
