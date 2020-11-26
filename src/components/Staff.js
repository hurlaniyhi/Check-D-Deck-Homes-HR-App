import React, {useEffect, useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { FaTrash, FaAngleRight } from 'react-icons/fa'
//import staffImage from "../assets/dp3.jpg"
import userImage2 from '../assets/userdp.jpg'
import DataManager from "../context/dataManager"



const Staff = () => {

    const {state, fetchMembers, deleteStaff, fetchUser} = useContext(DataManager)

    useEffect(()=>{
        fetchMembers()
    }, [])


    const history = useHistory()

    async function fireStaff(id){
        if(window.confirm("Are you sure you want to fire this staff ?")){
            //alert("We are still working on the logic to delete staff profile")

            await deleteStaff(id)
            fetchMembers()
        }
    }

   async function work(user){
        history.push("/admin/staffdetails")
        fetchUser(user)
    }

    const members = state.members.map(member =>{
        return(
            <div className="staff">
                <div className="staff-card" onClick={()=>work(member.username)}>
                    {member.profilePicture ? <img src={member.profilePicture} className="staff-image" />:
                     <img src={userImage2} className="staff-image" />}
                    <p className="staff-name">{member.firstName} {member.lastName}</p>
                    {member.department == "Human Resources" ? <p className="staff-dept">HR dept.</p>:
                    <p className="staff-dept">{member.department} dept.</p>}
                </div>
                <div className="fire-box">
                    <FaTrash className="fire-staff" onClick={()=> fireStaff(member._id)} />
                    <p className="fire-text">Clear data ?</p>
                </div>
            </div>
        )
    })

    return(
        <div className="staff-container">
            <div className="card-title-container dept-topic ">
                <p className="card-title staff-topc">Staff List</p>
                <FaAngleRight className="access-icon"/>   
            </div>
            {members}
        </div>
    )
}

export default Staff