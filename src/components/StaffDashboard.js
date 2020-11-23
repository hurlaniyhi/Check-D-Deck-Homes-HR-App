import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { FaSignOutAlt, FaCamera } from 'react-icons/fa'
import barImage from '../assets/admin-image6.jpg'
import barLogo from '../assets/ourlogo.png'
import userImage from '../assets/dp3.jpg'
import Progress from "./Progress"
//import Staff from './Staff'
import Email from './Email'
import Broadcast from './BroadcastMail'
import Files from './Files'
import StaffHome from './StaffHome'
import ChangePassword from './ChangePassword'
import UploadFile from './UploadFile'



const StaffDashboard = () => {

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
                
                <div class="dropdown">
                    <div className="menu-container" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="bar-menu dropdown-toggle">Menu-items</p></div>
                    <div class="dropdown-menu" id="menu-items" aria-labelledby="dropdownMenuButton">    
                        <Link to="/staff/home"  className="item-button dropdown-item">Home</Link>
                        <Link to="/staff/uploadfile" className="item-button dropdown-item">Upload file</Link>
                        <Link to="/staff/email_query" className="item-button dropdown-item">Contact Other Staff</Link>
                        <Link to="/staff/files" className="item-button dropdown-item">Uploaded files</Link>
                        <Link to="/staff/broadcastmail" className="item-button dropdown-item">Contact Admin</Link>
                        <Link to="/staff/changepassword" className="item-button dropdown-item">Change password</Link>
                        <a className="item-button dropdown-item" onClick={()=>logOut()}>LogOut</a>
                    </div>
                </div>

                
                
                <div className="bar-user">
                <img src={userImage} className="bar-image" />
                    <p className="bar-username">Staff Dashboard</p>
                </div>
                <Link to="/staff/home"><img className="logo-bar" src={barLogo}/></Link>
            </div>

            <div className="staff-header">
                <img src={userImage} className="user-img" />
                {/* <FaCamera className="take-pics" /> */}
                <div className="user-details">
                    <p className="user-name">Kolawole Ridwan</p>
                    <p className="user-infos">Human Resources Department</p>
                    <p className="user-infos">olaniyi.jibola152@gmail.com</p>
                    <p className="user-infos">No 2A, Kano street, Oyingbo, Lagos</p>
                    <p className="user-infos">Male</p>
                    <p className="user-infos">Single</p>
                    <p className="user-infos">07087994127</p>
                </div>

                <p className="user-rank">Full Staff</p>
            </div>

        
            
            <div className="content-view">
            <Switch>
            <Route path="/staff/" exact component={StaffHome}></Route>
            <Route path="/staff/home" exact component={StaffHome}></Route>
            <Route path="/staff/email_query" exact component={Email}></Route>
            <Route path="/staff/files" exact component={Files}></Route>
            <Route path="/staff/broadcastmail" exact component={Broadcast}></Route>
            <Route path="/staff/changepassword" exact component={ChangePassword}></Route>
            <Route path="/staff/uploadfile" exact component={UploadFile}></Route>
            <Route path="/staff/work" component={Progress}></Route>
            <Redirect from="/staff/:id" to="/staff/" />
            </Switch>
            </div>
        </Router>
      
    )
}

export default StaffDashboard