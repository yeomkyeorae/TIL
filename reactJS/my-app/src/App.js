import React from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  'parasite',
  'lord of the rings',
  'interstella',
  'inception'
]

function App() {
  return (
    <div className="App">
      <Movie title={movies[0]}/>
      <Movie title={movies[1]}/>
      <Movie title={movies[2]}/>
      <Movie title={movies[3]}/>
    </div>
  );
}

export default App;
