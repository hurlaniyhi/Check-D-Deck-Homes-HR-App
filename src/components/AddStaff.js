import React, {useState, useContext} from 'react'
import {FaAngleRight, FaUserPlus} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'


const AddStaff = () => {

    const {state, addUser} = useContext(DataManager)
    const INITIAL_STATE = {
        firstName: "", lastName: "", 
        email: "", address: "", 
        userType: "", phoneNumber: "",
        jobStatus: "", department: "",
        gender: "", maritalStatus: ""
    }

    const [newUser, setNewUser] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        
        setNewUser({...newUser, [e.target.name]: e.target.value})
        
    }

    const handlebox = (e) => {
        setNewUser({...newUser, userType: e.target.value})
    }

    const handleSubmit = async() => {
        document.querySelector(".loads").style.display = "inline-block"
        await addUser(newUser)
        document.querySelector(".loads").style.display = "none"
        setNewUser(INITIAL_STATE)
    }


    return(
        <div className="add-staff-container">
             <div className="card-title-container dept-topic">
                <p className="card-title">Add Staff</p>
                <FaAngleRight className="access-icon"/>   
            </div>
            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaUserPlus className="add-staff-icon" /> Add New Staff</p>
                <div class="add-form-group">
                    <input type="text" class="add-input" value={newUser.firstName} name="firstName" onChange={handleChange} placeholder="First name" id="name" required />
                    <label for="name" class="add-labels">First name</label>
                </div>

                <div class="add-form-group">
                    <input type="text" class="add-input" value={newUser.lastName} name="lastName" onChange={handleChange} placeholder="Last name" id="name" required />
                    <label for="name" class="add-labels">Last name</label>
                </div>

                <div class="add-form-group">
                    <input type="email" class="add-input" value={newUser.email} name="email" onChange={handleChange} placeholder="Staff Email" id="email" required />
                    <label for="email" class="add-labels">Staff Email</label>
                </div>

                <div class="add-form-group">
                    <input type="number" class="add-input" value={newUser.phoneNumber} name="phoneNumber" onChange={handleChange} placeholder="Phone Number" id="phone" required />
                    <label for="phone" class="add-labels">Phone Number</label>
                </div>

                <div class="add-form-group">
                    <input type="text" class="add-input" value={newUser.address} name="address" onChange={handleChange} placeholder="Home Address" id="address" required />
                    <label for="address" class="add-labels">Home Address</label>
                </div>

                <div class="add-form-group">
                    <select  class="add-input" value={newUser.gender} name="gender" onChange={handleChange} required>
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div class="add-form-group">
                    <select  class="add-input" value={newUser.maritalStatus} name="maritalStatus" onChange={handleChange} required>
                        <option>Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widow">Widow</option>
                    </select>
                </div>

                <div class="add-form-group">
                    <select  class="add-input" value={newUser.department} name="department" onChange={handleChange} required>
                        <option>Choose Department</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Account">Account</option>
                        <option value="Site Inspection">Site Inspection</option>
                    </select>
                </div>

                <div class="add-form-group">
                    <select  class="add-input" value={newUser.jobStatus} name="jobStatus" onChange={handleChange} required>
                        <option>Job Status</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>

                <div className="radio">
                    <div class="form-radio-group">
                        <input type="radio" class="form-radio-input" value="Admin" onChange={handlebox} id="admin" name="size"/>
                        <label for="admin" class="form-radio-label">
                            <span class="form-radio-button"></span>
                            Admin
                        </label>
                    </div>

                    <div class="form-radio-group">
                        <input type="radio" class="form-radio-input" value="Staff" onChange={handlebox} id="staff" name="size"/>
                        <label for="staff" class="form-radio-label">
                            <span class="form-radio-button"></span>
                            Staff
                        </label>
                    </div>
                </div>

                <div class="login-button" onClick={handleSubmit}>
                    Add Staff
                    <Puff
                        className="loads"
                        stroke="white" strokeOpacity=".8" 
                        style={{width: "2.6rem", height: "2.6rem", marginLeft: "1.2rem", display: "none"}} 
                    />
                </div>
               
            </form>
        </div>
    )
}

export default AddStaff