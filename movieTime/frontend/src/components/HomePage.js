import React, { Component } from "react";
import SavedMovies from "./SavedMovies";
import ResultsPage from "./ResultsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  searchMovie() {
    let title = document.getElementById('target').value;
    window.location.href += 'results?' + title;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>This is the home page</h1>
              <input type="text" id='target' placeholder="Move Title" onChange={this.handleTitleChange}></input>
              <button type="button" onClick={this.searchMovie}>Search For Movie</button>
              <form action="/saved">
                <input type="submit" value="See saved Movies" />
              </form>
            </div>
          </Route>
          <Route path="/saved" component={SavedMovies} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </Router>
    );
  }
}