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
                        <p className="details-text"><span className="details-span">First Name</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.firstName}
                        </p>
                        <p className="details-text"><span className="details-span">Last Name</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.lastName}
                        </p>
                        <p className="details-text"><span className="details-span">Department</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.department}
                        </p>
                        <p className="details-text"><span className="details-span">Email</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.email}
                        </p>
                        <p className="details-text"><span className="details-span">Address</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.address}
                        </p>
                        <p className="details-text"><span className="details-span">gender</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.gender}
                        </p>
                        <p className="details-text"><span className="details-span">Marital Status</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.maritalStatus}
                        </p>
                        <p className="details-text"><span className="details-span">Phone Number</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.phoneNumber}
                        </p>
                        <p className="details-text"><span className="details-span">Username</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.username}
                        </p>
                        <p className="details-text"><span className="details-span">Job Status</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.user.jobStatus}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffDetails