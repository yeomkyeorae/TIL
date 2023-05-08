import React, { useState } from 'react';


const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    
    let willUpdate = true;
    
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  }

  return { value, onChange };
}


// functional component
function UseInput() {
  const maxLength = (value) => value.length < 10;
  const haveAt = (value) => !value.includes("@");

  const name = useInput("Mr.", haveAt);

  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}

export default UseInput;
