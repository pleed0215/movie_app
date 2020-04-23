import React from 'react';
import axios from 'axios';
import Movies from './Movies';

import './App.css';

function renderMovie(m) {
  return (
    <Movies key={m.id}
      title={m.title}
      year={m.year}
      rating={m.rating}
      runtime={m.rating}
      genres={m.genres}
      summary={m.summary}
      coverImage={m.medium_cover_image} />
  )
}

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50");
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }

  async componentDidMount() {
    await this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="movie__container">
        {isLoading ? "Now loading..." : movies.map(curr => renderMovie(curr))}
      </div>
    )
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
