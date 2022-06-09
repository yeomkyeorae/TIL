import React, { useState } from 'react';
import './App.css';


// functional component
function App() {
  const [item, setItem] = useState(1);
  
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      {item}
      <button onClick={() => incrementItem()}>+</button>
      <button onClick={() => decrementItem()}>-</button>
    </div>
  );
}

// class component
class AppUgly extends React.Component {
  state = {
    item: 1
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        {item}
        <button onClick={() => this.incrementItem()}>+</button>
        <button onClick={() => this.decrementItem()}>-</button>
      </div>
    )
  }
}

export default App;
