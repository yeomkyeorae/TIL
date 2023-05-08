import React from 'react';

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => { 
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options)
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options)
    }
  }
  return fireNotif;
}

// functional component
function UseNotification() {
  const triggerNotif = useNotification("Can I steal you mind?", { body: "don't you?" });

  return (
    <div className="App">
      <button onClick={triggerNotif}>propose</button>
    </div>
  );
}

export default UseNotification;
