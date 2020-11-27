import React, {useEffect, useContext, useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { FaSignOutAlt, FaCamera, FaPencilAlt } from 'react-icons/fa'
import barImage from '../assets/admin-image6.jpg'
import barLogo from '../assets/ourlogo.png'
import userImage2 from '../assets/userdp.jpg'
import Progress from "./Progress"
//import Staff from './Staff'
import Email from './Email'
import Broadcast from './BroadcastMail'
import Files from './Files'
import StaffHome from './StaffHome'
import ChangePassword from './ChangePassword'
import UploadFile from './UploadFile'
import DataManager from "../context/dataManager"



const StaffDashboard = () => {

    const {state, fetchUser, uploadDP} = useContext(DataManager)

    const [preview, setPreview] = useState({image: null})

    useEffect(()=>{
        userInfo()
    }, [])

    const userInfo = async()=>{
       
        const type = await localStorage.getItem("info")
        const token = await localStorage.getItem("token")
    
        if(token && (type === "Staff")){
            fetchUser()
        }
        else{
            return history.push("/")
           
        } 
       
        
    }

    const handleImage = async(e)=>{
        setPreview({...preview, image: URL.createObjectURL(e.target.files[0])})
        
        document.querySelector("#both").style.display = "none"
        document.querySelector("#both2").style.display = "none"
        document.querySelector("#preview").style.display = "block"
        document.querySelector("#preview2").style.display = "block"

        const data = new FormData()
        data.append('picture', e.target.files[0])

        await uploadDP(data)

        document.querySelector("#both").style.display = "block"
        document.querySelector("#both2").style.display = "block"
        document.querySelector("#preview").style.display = "none"
        document.querySelector("#preview2").style.display = "none"
        
    }

    const history = useHistory()

    function logOut(info){  
        if(info){
            if(window.confirm("Are you sure you want to log out ?")){
                localStorage.clear()
                history.push("/")
            }
        }
        else{
            localStorage.clear()
            history.push("/")
        } 
        
    }

    async function handleFetch(key, value){
        await localStorage.setItem(key, value)
    }

    // PROTECTING THIS ROUTE
    const type = localStorage.getItem("info")
    const token = localStorage.getItem("token")

    if(token && (type === "Staff")){
        var res = true
    }
    else{
        var res = false
    }
    
    // *******************************


    document.body.style.background = '#F7FCFC'

    return(
       
        <Router>
            {res == true ? <div>
                <div className="title-bar">
                    <FaSignOutAlt className="logout-icon" onClick={()=>logOut("ask")} />
                    
                    <div class="dropdown">
                        <div className="menu-container" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="bar-menu dropdown-toggle">Menu-items</p></div>
                        <div class="dropdown-menu" id="menu-items" aria-labelledby="dropdownMenuButton">    
                            <Link to="/staff/home"  className="item-button dropdown-item">Home</Link>
                            <Link to="/staff/uploadfile" className="item-button dropdown-item">Upload file</Link>
                            <Link to="/staff/email_query" className="item-button dropdown-item">Contact Other Staff</Link>
                            <Link to="/staff/files" onClick={()=>handleFetch("fileViewer", "staff")} className="item-button dropdown-item">Uploaded files</Link>
                            <Link to="/staff/broadcastmail" className="item-button dropdown-item">Contact Admin</Link>
                            <Link to="/staff/changepassword" className="item-button dropdown-item">Change password</Link>
                            <a className="item-button dropdown-item" onClick={()=>logOut()}>LogOut</a>
                        </div>
                    </div>

                    
                    
                    <div className="bar-user">
                    {/* <img src={userImage} className="bar-image" /> */}
                    {state.user.profilePicture ? <img src={state.user.profilePicture} className="bar-image" id="both" /> : 
                    <img src={userImage2} className="bar-image" id="both" />}
                    <img src={preview.image} className="bar-image" id="preview" style={{display: "none"}} />
                        <p className="bar-username">Staff Dashboard</p>
                    </div>
                    <Link to="/staff/home"><img className="logo-bar" src={barLogo}/></Link>
                </div>

                <div className="staff-header">

                    {state.user.profilePicture ? <img src={state.user.profilePicture} className="user-img" id="both2" /> : 
                    <img src={userImage2} className="user-img" id="both2" />}
                    <img src={preview.image} className="user-img" id="preview2" style={{display: "none"}} />

                    <div className="mydp">
                        <input type="file" onChange={handleImage} className="input-dp" id="dp" />
                        <label className="dp-placeholder" for="dp">
                            <p>Change Picture</p>
                            <FaPencilAlt className="file-icon" />
                            </label>
                    </div>
                    <div className="user-details">
                        <p className="user-name">{state.user.firstName} {state.user.lastName}</p>
                        <p className="user-infos">{state.user.department} Department</p>
                        <p className="user-infos">{state.user.email}</p>
                        <p className="user-infos">{state.user.address}</p>
                        <p className="user-infos">{state.user.gender}</p>
                        <p className="user-infos">{state.user.maritalStatus}</p>
                        <p className="user-infos">{state.user.phoneNumber}</p>
                    </div>

                    <p className="user-rank">{state.user.jobStatus}</p>
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
            </div>: null}
        </Router>
      
    )
}

export default StaffDashboard