import React from 'react';

function Food(props) {
  return <h1>I like {props.fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="samgyepsal" />
      <Food fav="chocolate" />
    </div>
  );
}

export default App;
