import React, { Component } from "react";

export default class SavedMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hi',
            imdbid: 12
        };
        this.getMovieDetails = this.getMovieDetails.bind(this);
        this.getMovieDetails();
    }

    getMovieDetails() {
        return fetch("/api/get-movies" + "?userid=1")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              title: data.title,
              imdbid: data.imdbid,
            });
            console.log(data);
          });
      }

    render() {
        return (
            <div>
                <p>Title: {this.state.title}</p>
                <p>imdb id: {this.state.imdbid}</p>
            </div>
        )
    }
}