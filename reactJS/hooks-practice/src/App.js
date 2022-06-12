import React, { useEffect, useState } from 'react';
import './App.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }

  useEffect(updateTitle, [title]);

  return setTitle;
}

// functional component
function App() {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
