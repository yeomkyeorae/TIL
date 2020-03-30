import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Kimbab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_5woTu2Kk3_SjZWLva_W_QsxKTL1zNo5TXgpWbtf8h_y2rjH",
    rating: 4
  },
  {
    id: 3,
    name: "Samgyeobsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 4.8
  }
]

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img alt={name} src={picture} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      { foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
