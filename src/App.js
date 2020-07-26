import React, { Component } from 'react'
import { BrowserRouter as Router
       } from 'react-router-dom'
import NavBar from './components/layout/NavBar'

class App extends Component {
  state = {  }
  render() { 
    return (  
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    );
  } 
}
 
export default App