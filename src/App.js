import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { HashRouter } from 'react-router-dom'; 
import "./App.css";
import routes from  "./routes"; 

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
