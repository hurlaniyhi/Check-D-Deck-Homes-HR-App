import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Homepage'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <Router>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={AdminDashboard}></Route>
          <Redirect from="/:id" to="/" />
          </Switch>
      </Router>
  )
}

export default App;
