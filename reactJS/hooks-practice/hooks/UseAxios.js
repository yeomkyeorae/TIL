import React, { useState, useEffect } from 'react';
import defaultAxios from 'axios';


const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  // if (!opts.url) {
  //   return;
  // }

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now())
  }

  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      })
    }).catch(error => {
      setState({
        ...state,
        loading: false,
        error
      })
    })
  }, [trigger]);

  return { ...state, refetch };
}

// functional component
function UseAxios() {
  const { loading, data, error, refetch } = useAxios({url: 'https://yts.mx/api/v2/list_movies.json'});

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "loading" : "not loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxios;
