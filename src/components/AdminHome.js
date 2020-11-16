import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'


const AdminHome = () => {
    return(
        <div class="Admin-home-container">
            <div class="card-title-container">
                <p class="card-title">Quick Access</p>
                <FaAngleDoubleRight class="access-icon"/>
                <FaAngleDoubleRight class="access-icon"/>
                </div>
           <div class="home-cards">
               <div class="card">
                   <p class="card-content">Departments</p>
               </div>
               <div class="card">
                   <p class="card-content">Our Staff</p>
               </div>
               <div class="card">
                   <p class="card-content">All Documents</p>
               </div>
               <div class="card">
                   <p class="card-content">Activities</p>
               </div>
               <div class="card">
                   <p class="card-content">Meeting Reports</p>
               </div>
               <div class="card">
                   <p class="card-content">Time Off Requests</p>
               </div>
               <div class="card">
                   <p class="card-content">Query/Email Staff</p>
               </div>
           </div>
        </div>
    )
}

export default AdminHome