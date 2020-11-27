import React, {useContext} from 'react'
import { FaAngleRight } from 'react-icons/fa'
import userImage2 from '../assets/userdp.jpg'
import DataManager from "../context/dataManager"



const StaffDetails = () => {

    const {state} = useContext(DataManager)

    return(
        <div className="details-cover">
            <div className="card-title-container dept-topic ">
                <p className="card-title staff-topc">Staff Profile</p>
                <FaAngleRight className="access-icon"/>   
            </div>
            <div className="details-container">
                {state.user.profilePicture ? <img src={state.user.profilePicture} className="details-image" />:
                <img src={userImage2} className="details-image" />}
                <div className="details-content">
                    <p className="details-title">Basic Information</p>
                    <div className="basic-details">
                        <div className="details-text">
                            <p className="details-span">First Name</p>
                           <p className="text-text">{state.user.firstName}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Last Name</p>
                            <p className="text-text">{state.user.lastName}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Department</p>
                             <p className="text-text">{state.user.department}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Email</p>
                            <p className="text-text">{state.user.email}</p>
                        </div>
                        <div className="details-text"><p className="details-span">Address</p>
                           <p className="text-text">{state.user.address}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">gender</p>
                            <p className="text-text">{state.user.gender}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Marital Status</p>
                            <p className="text-text">{state.user.maritalStatus}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Phone Number</p>
                            <p className="text-text">{state.user.phoneNumber}</p>
                        </div>
                        <div className="details-text">
                            <p className="details-span">Username</p>
                            <p className="text-text">{state.user.username}</p>
                        </div>
                        <div className="details-text"><p className="details-span">Job Status</p>
                            <p className="text-text">{state.user.jobStatus}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffDetails