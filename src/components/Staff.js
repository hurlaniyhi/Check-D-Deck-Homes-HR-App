import React from 'react'
import {useHistory} from 'react-router-dom'
import { FaTrash, FaAngleRight } from 'react-icons/fa'
import staffImage from "../assets/dp3.jpg"



const Staff = () => {

    function fireStaff(){
        if(window.confirm("Are you sure you want to fire this staff ?")){
            alert("We are still working on the logic to delete staff profile")
        }
    }

    const history = useHistory()

    function work(){
        history.push("/admin/work")
    }

    return(
        <div className="staff-container">
                <div className="card-title-container dept-topic ">
                    <p className="card-title staff-topc">Staff List</p>
                    <FaAngleRight className="access-icon"/>   
                </div>
                <div className="staff">
                    <div className="staff-card" onClick={()=>work()}>
                        <img src={staffImage} className="staff-image" />
                        <p className="staff-name">Ridwan Kolawole</p>
                        <p className="staff-dept">HR dept.</p>
                    </div>
                    <div className="fire-box">
                        <FaTrash className="fire-staff" onClick={()=> fireStaff()} />
                        <p className="fire-text">Fire Staff ?</p>
                    </div>
                </div>

                <div className="staff">
                    <div className="staff-card" onClick={()=>work()}>
                        <img src={staffImage} className="staff-image" />
                        <p className="staff-name">Haleemah Olanrewaju</p>
                        <p className="staff-dept">Sales dept.</p>
                    </div>
                    <div className="fire-box">
                        <FaTrash className="fire-staff" onClick={()=> fireStaff()}  />
                        <p className="fire-text">Fire Staff ?</p>
                    </div>
                </div>

                <div className="staff">
                    <div className="staff-card" onClick={()=>work()}>
                        <img src={staffImage} className="staff-image" />
                        <p className="staff-name">Newton Vue</p>
                        <p className="staff-dept">Marketing dept.</p>
                    </div>
                    <div className="fire-box">
                        <FaTrash className="fire-staff" onClick={()=> fireStaff()}  />
                        <p className="fire-text">Fire Staff ?</p>
                    </div>
                </div>

                <div className="staff">
                    <div className="staff-card" onClick={()=>work()}>
                        <img src={staffImage} className="staff-image" />
                        <p className="staff-name">Olaniyi JIbola</p>
                        <p className="staff-dept">Site Inspection dept.</p>
                    </div>
                    <div className="fire-box">
                        <FaTrash className="fire-staff" onClick={()=> fireStaff()}  />
                        <p className="fire-text">Fire Staff ?</p>
                    </div>
                </div>

                <div className="staff">
                    <div className="staff-card" onClick={()=>work()}>
                        <img src={staffImage} className="staff-image" />
                        <p className="staff-name">Elelu Abdus-salam</p>
                        <p className="staff-dept">HR dept.</p>
                    </div>
                    <div className="fire-box">
                        <FaTrash className="fire-staff" onClick={()=> fireStaff()}  />
                        <p className="fire-text">Fire Staff ?</p>
                    </div>
                </div>
        </div>
    )
}

export default Staff