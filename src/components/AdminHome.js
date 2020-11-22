import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'


const AdminHome = () => {

    const history = useHistory()

    function dept(nav){
        history.push(`/admin/${nav}`)
    }

    function staffList(){
        history.push("/admin/stafflist")
    }

    function Email(){
        history.push("/admin/email_query")
    }

    return(
        <div className="Admin-home-container">
            <div className="card-title-container">
                <p className="card-title">Quick Access</p>
                <FaAngleDoubleRight className="access-icon"/>
                <FaAngleDoubleRight className="access-icon"/>
            </div>
           <div className="home-cards">
               <div className="card-wide" onClick={()=>dept("dept")}>
                   <p className="card-content">Departments</p>
               </div>
               <div className="card-wide" onClick={()=>staffList()}>
                   <p className="card-content">Our Staff</p>
               </div>
               <div className="card-wide" onClick={()=>dept("files")}>
                   <p className="card-content">All Documents</p>
               </div>
               <div className="card-wide" onClick={()=>Email()}>
                   <p className="card-content">Query/Email Staff</p>
               </div>
               <div className="card-wide" onClick={()=>dept("work")}>
                   <p className="card-content">Activities</p>
               </div>
               <div className="card-wide">
                   <p className="card-content">Meeting Reports</p>
               </div>
               <div className="card-wide">
                   <p className="card-content">Time Off Requests</p>
               </div>
               <div className="card-wide">
                   <p className="card-content">Cash Analysis</p>
               </div>
              
           </div>
        </div>
    )
}

export default AdminHome