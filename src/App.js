import React, {Component} from 'react';
import BookContainer from "./Book/BookContainer";
import './App.css'

class App extends Component{


    render() {
      return (
          <div className="AppContainer">
              <h1 className="header">The Book Collector</h1>
              <BookContainer classNam='book-container'/>
          </div>
      );
  }
}

export default App;
