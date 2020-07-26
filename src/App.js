import React, { Component } from 'react'
import { BrowserRouter as Router,
  Switch,
  Route
       } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  state = {  }
  render() { 
    return (  
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/' component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    )
  } 
}
 
export default App