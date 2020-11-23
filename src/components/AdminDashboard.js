import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {FaHome, FaTimes, FaPlus, FaEnvelope, FaSignOutAlt} from 'react-icons/fa'
import barImage from '../assets/admin-image6.jpg'
import barLogo from '../assets/ourlogo.png'
import Department from './Departments'
import AdminHome from './AdminHome'
import Progress from "./Progress"
import Staff from './Staff'
import AddStaff from './AddStaff'
import Email from './Email'
import Broadcast from './BroadcastMail'
import Files from './Files'
import ChangePassword from './ChangePassword'



const AdminDashboard = () => {

    const history = useHistory()

    function logOut(info){  
        if(info){
            if(window.confirm("Are you sure you want to log out ?")){
                history.push("/")
            }
        }
        else{
            history.push("/")
        } 
        
    }

    document.body.style.background = '#F7FCFC'

    return(
       
        <Router>
            <div className="title-bar">
                <FaSignOutAlt className="logout-icon" onClick={()=>logOut("ask")} />
                {/* <input type="checkbox" className="checkme" id="show-menu" /> */}
                {/* <div className="menu-container" onClick={()=> openItem()}><p className="bar-menu">Menu-items</p></div> */}
                
                
                <div class="dropdown">
                    <div className="menu-container" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="bar-menu dropdown-toggle">Menu-items</p></div>
                    <div class="dropdown-menu" id="menu-items" aria-labelledby="dropdownMenuButton">    
                        <Link to="/admin/home"  className="item-button dropdown-item">Home</Link>
                        <Link to="/admin/dept" className="item-button dropdown-item">All departments</Link>
                        <Link to="/admin/stafflist" className="item-button dropdown-item">All staff</Link>
                        <Link to="/admin/addstaff" className="item-button dropdown-item">Add new staff</Link>
                        <Link to="/admin/email_query" className="item-button dropdown-item">Email/Query Staff</Link>
                        <Link to ="/admin/broadcastmail" className="item-button dropdown-item">Broadcast message</Link>
                        <Link to="/admin/files" className="item-button dropdown-item">All files</Link>
                        <Link to="/admin/work" className="item-button dropdown-item">Instalmental transaction</Link>
                        <Link to="/admin/changepassword" className="item-button dropdown-item">Change Password</Link>
                        <a className="item-button dropdown-item" onClick={()=>logOut()}>LogOut</a>
                    </div>
                </div>

                
                
                <div className="bar-user">
                <img src={barImage} className="bar-image" />
                    <p className="bar-username">Admin Dashboard</p>
                </div>
                <Link to="/admin/home"><img className="logo-bar" src={barLogo}/></Link>
            </div>

            <div className="header">
                <div className="add-master">
                    <Link className="add-container" to="/admin/addstaff">
                        <FaPlus className="add-logo" />
                    </Link>
                    <p className="add-label">Add new staff ?</p>
                </div>
                <p className="header-greeting">Hello, We are Admin</p>
                <div className="broadcast">
                    <FaEnvelope className="broadcast-icon" />
                    <Link to="/admin/broadcastmail" className="broadcast-text">Send Broadcast Mail</Link>
                </div>
            </div>

        
            
            <div className="content-view">
            <Switch>
            <Route path="/admin/" exact component={AdminHome}></Route>
            <Route path="/admin/home" component={AdminHome}></Route>
            <Route path="/admin/dept" component={Department}></Route>
            <Route path="/admin/work" component={Progress}></Route>
            <Route path="/admin/stafflist" component={Staff}></Route>
            <Route path="/admin/addstaff" component={AddStaff}></Route>
            <Route path="/admin/email_query" component={Email}></Route>
            <Route path="/admin/broadcastmail" component={Broadcast}></Route>
            <Route path="/admin/files" component={Files}></Route>
            <Route path="/admin/changepassword" component={ChangePassword}></Route>
            <Redirect from="/admin/:id" to="/admin/" />
            </Switch>
            </div>
        </Router>
      
    )
}

export default AdminDashboard