import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MoviesBox.scss'

export default class MovieBox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    this.props.addMovies()
  }

  generateCards = () => {
    return this.props.movies.map((movie, index) => (
      <MovieCard
        key={index}
        id={index+1}
        {...movie} />
      )
    )
  }

  render() {
    return (
      <section className="movie-box">
        { this.generateCards() }
      </section>
    )
  }
}
