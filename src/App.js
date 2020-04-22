import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Food({ name, image, rating }) {
  return (
    <div>
      <p>I like {name}</p>
      <img src={image} alt={name} />
      <p>rating {rating}/5.0</p>
    </div>
  );
}


const foodsList = [
  {
    id: 1,
    name: "kimbob",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "samgyobsal",
    image: "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 5.0,
  },
  {
    id: 3,
    name: "kimchi",
    image: "https://jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
    rating: 4.3,
  },
  {
    id: 4,
    name: "sogogi",
    image: "https://i.ytimg.com/vi/8NCv1qE5pBI/maxresdefault.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "ddeokboki",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/55oP/image/OoEsIT_awMkp6hJToU721FHuFtU.jpg",
    rating: 4.1,
  },
  {
    id: 6,
    name: "chicken",
    image: "https://t1.daumcdn.net/liveboard/interbiz/724b01edcbeb44dfa3fe10a3dbbda51f.JPG",
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function renderFood(f) {
  return <Food key={f.id} name={f.name} image={f.image} rating={f.rating} />
}

class App extends React.Component {
  state = {
    count: 0,
  }

  add = () => this.setState(currState => ({ count: currState.count + 1 }));
  minus = () => this.setState(currState => ({ count: currState.count - 1 }));

  render() {
    return (
      <div className="App-header">
        <p>count: {this.state.count}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <h1>Hello!!!</h1>
        {
          foodsList.map(renderFood)
        }
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App-header">
      <h1>Hello!!!</h1>
      {
        foodsList.map(renderFood)
      }
    </div>
  );
}*/

export default App;
