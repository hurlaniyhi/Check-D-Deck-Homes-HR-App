import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'


const StaffHome = () => {

    const history = useHistory()

    function info(nav){
        history.push(`/staff/${nav}`)
    }

    async function uploaded(key, value, route){
        await localStorage.setItem(key, value)
        history.push(`/staff/${route}`)
    }

    return(
        <div className="Admin-home-container">

            <div className="card-title-container">
                <p className="card-title">Quick Access</p>
                <FaAngleDoubleRight className="access-icon"/>
                <FaAngleDoubleRight className="access-icon"/>
            </div>
           <div className="home-cards">
                <div className="card-wide" onClick={()=>info("uploadfile")}>
                   <p className="card-content">Upload New File</p>
               </div>
               <div className="card-wide" onClick={()=>uploaded("fileViewer", "staff", "files")}>
                   <p className="card-content">Uploaded Documents</p>
               </div>
               <div className="card-wide" onClick={()=>info("email_query")}>
                   <p className="card-content">Contact Other Staff</p>
               </div>
               <div className="card-wide" onClick={()=>info("broadcastmail")}>
                   <p className="card-content">Contact Admin</p>
               </div>
               <div className="card-wide" onClick={()=>info("changepassword")}>
                   <p className="card-content">Change Password</p>
               </div>
               <div className="card-wide">
                   <p className="card-content">Time Off Request</p>
               </div>
              
           </div>
        </div>
    )
}

export default StaffHome