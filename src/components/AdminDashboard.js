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

    function callme(){
        document.querySelector(".menu-items").style.opacity = 0 
    }

    function openItem(){
        let swap = document.querySelector(".menu-items")
         if(swap.style.opacity == 0){
             swap.style.opacity = 1
         }
         else{
             swap.style.opacity = 0
         }
    }

    document.body.style.background = '#F7FCFC'

    return(
       
        <Router>
            <div className="title-bar">
                <FaSignOutAlt className="logout-icon" onClick={()=>logOut("ask")} />
                {/* <input type="checkbox" className="checkme" id="show-menu" /> */}
                <div className="menu-container" onClick={()=> openItem()}><p className="bar-menu">Menu-items</p></div>
                
                <div className="bar-user">
                <img src={barImage} className="bar-image" />
                    <p className="bar-username">Admin Dashboard</p>
                </div>
                <Link to="/admin/home"><img className="logo-bar" src={barLogo}/></Link>
            </div>

            <div className="header">
            <div className="menu-items">
                    <FaTimes className="cancel" onClick={()=> openItem()} />
                    <Link to="/admin/home" onClick={()=> callme()} className="item-button">Home</Link>
                    <Link to="/admin/dept" onClick={()=> callme()} className="item-button">All departments</Link>
                    <Link to="/admin/stafflist" onClick={()=> callme()} className="item-button">All staffs</Link>
                    <Link to="/admin/addstaff" onClick={()=> callme()} className="item-button">Add new staff</Link>
                    <Link to="/admin/email_query" onClick={()=> callme()} className="item-button">Email/Query Staff</Link>
                    <Link to ="/admin/broadcastmail" onClick={()=> callme()} className="item-button">Broadcast message</Link>
                    <Link to="/admin/work" onClick={()=> callme()} className="item-button">Instalmental transaction</Link>
                    <Link to="/admin/work" onClick={()=> callme()} className="item-button">All files</Link>
                    <a className="item-button" onClick={()=>logOut()}>LogOut</a>
                </div>
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
            <Redirect from="/admin/:id" to="/admin/" />
            </Switch>
            </div>
        </Router>
      
    )
}

export default AdminDashboard