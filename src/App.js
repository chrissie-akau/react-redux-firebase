import React, { Component } from 'react'
import { BrowserRouter as Router,
  Switch,
  Route
       } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

class App extends Component {
  state = {  }
  render() { 
    return (  
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </Router>
    )
  } 
}
 
export default App