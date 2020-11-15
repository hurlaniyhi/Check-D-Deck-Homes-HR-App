import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Department from './Departments'
import Chat from './Chat'

const AdminDashboard = () => {

    const history = useHistory()

    function logOut(){
        history.push("/")
    }
    document.body.style.background = '#fff'

    return(
       
        <Router>
            <div>
            <NavLink exact to ="/admin/dept"><button>Show Departments</button></NavLink>
            <NavLink exact to ="/admin/chat"><button>Chat screen</button></NavLink>
                <button onClick={()=>logOut()}>Log out</button>
            </div>
            <div>
            <Switch>
            <Route path="/admin/dept" component={Department}></Route>
            <Route path="/admin/chat" component={Chat}></Route>
            </Switch>
            </div>
        </Router>
      
    )
}

export default AdminDashboard