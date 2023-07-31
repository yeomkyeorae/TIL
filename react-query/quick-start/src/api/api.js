import axios from 'axios';

export const getTodo = async () => {
  return (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
}