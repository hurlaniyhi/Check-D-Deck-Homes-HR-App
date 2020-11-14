import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Homepage'
import Login from './components/Login'

function App() {
  return (
    <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
