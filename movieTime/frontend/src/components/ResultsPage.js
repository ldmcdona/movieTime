import React, { Component } from "react";

export default class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imdbid: ''
        };

        this.fetchMovie = this.fetchMovie.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
        this.fetchMovie();
    }

    fetchMovie() {
        let search = window.location.href;
        let pattern = search.split("?");
        const requestOptions = {
            method: 'GET',
        };
        fetch('https://www.omdbapi.com/?apikey=cd7c4c96&t=' + pattern[1], requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                this.setState({
                    title: data.Title,
                    imdbid: data.imdbID
                });
                document.getElementById('target').innerHTML = JSON.stringify(data);
            });
    }

    handleSaveButton() {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userid: 1,
            imdbid: this.state.imdbid,
            title: this.state.title
          }),
        };
        fetch('/api/add-movie', requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
            });
      }

    render() {
        return (
            <div>
                <p>Result of Search</p>
                <div id='target' value=" "></div>
                <button type='button' onClick={this.handleSaveButton}>Save Movie</button>
            </div>
        );
    }
}