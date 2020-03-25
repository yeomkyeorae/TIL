import React from 'react';

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>  
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
  },
  {
    name: "Kimbab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_5woTu2Kk3_SjZWLva_W_QsxKTL1zNo5TXgpWbtf8h_y2rjH"
  },
  {
    name: "Samgyeobsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  }
]

function App() {
  return (
    <div className="App">
      { foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
