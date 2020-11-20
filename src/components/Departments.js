import React from 'react'
import {useHistory} from 'react-router-dom'
import {FaAngleRight, FaUser} from 'react-icons/fa'


const Department = () => {

    const history = useHistory()

    function work(){
        history.push("/admin/work")
    }

    return(
        <div className="depts-container">
             <div className="card-title-container dept-topic">
                <p className="card-title">Departments</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <div className="dept dept1" onClick={()=>work()}>
                <p className="dept-text">Human Resources</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">30 staff</p>
                </div>
            </div>

            <div className="dept dept2" onClick={()=>work()}>
                <p className="dept-text">Marketing</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">66 staff</p>
                </div>
            </div>

            <div className="dept dept3" onClick={()=>work()}>
                <p className="dept-text">Sales</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">20 staff</p>
                </div>
            </div>

            <div className="dept dept4" onClick={()=>work()}>
                <p className="dept-text">Account</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">42 staff</p>
                </div>
            </div>

            <div className="dept dept5" onClick={()=>work()}>
                <p className="dept-text">Site Inspection</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">24 staff</p>
                </div>
            </div>
        
        </div>
    )
}

export default Department