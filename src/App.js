import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Homepage'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import StaffDashboard from './components/StaffDashboard'
import ResolveAuth from './components/ResolveAuth'

function App() {
  return (
    <Router>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={AdminDashboard}></Route>
          <Route path="/staff" component={StaffDashboard}></Route>
          <Route path="/resolve" component={ResolveAuth}></Route>
          <Redirect from="/:id" to="/" />
          </Switch>
      </Router>
  )
}

export default App;
