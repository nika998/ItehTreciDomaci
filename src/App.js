import React, { Component } from "react";
import './App.css';
import BookList from "./components/BookList";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        name: "Anna Karennina",
        description: "Story of a woman that just loves trains",
        pages: 1000
      },
      {
        id: 2,
        name: "Gone with the wind",
        description: "Apparently racist",
        pages: 500
      },
      {
        id: 3,
        name: "Norwegian wood",
        description: "Beatles playing in the background",
        pages: 400
      },
      {
        id: 4,
        name: "Dorotej",
        description: "Dark century in Serbia",
        pages: 300
      }],
    book: {
      id: 5,
      name: "Hitchikers guide througj Galaxy",
      description: "Funny",
      pages: 1000
    },
    name: "User",
    entered: false
  };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);


  handleChange(event) {
    this.setState({
      name: event.target.value,
      entered: false
    });

  }

  handleSubmit(event) {

    this.setState({
      /*name: this.state.name, /* ovo je da bi zadrzao vrednost koju upisem a ne ko u handle change*/
      entered: true
    });

    event.preventDefault();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
           <nav className="Nav-Bar">
              <ul>
                <li style={{ display: "inline-block", margin: "10px"}}><a href="/">Home</a></li>
                <li style={{ display: "inline-block", margin: "10px"}}><a href="/c">Books</a></li>
              </ul>
            </nav>
          <header className="App-header">
            <Route path="/" exact render={() => <div>
              {this.state.entered == false ?
                <form onSubmit={this.handleSubmit}>
                  <div className="Name-Form">
                    Please enter your name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Enter" />
                  </div>
                </form> :
                <p>Welcome to our library {this.state.name}</p>

              }</div>
            }
            />
            <Route path="/c" exact render={() => <BookList
              books={this.state.books}
            />} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
