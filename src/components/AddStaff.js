import React from 'react'
import {FaAngleRight, FaUserPlus} from 'react-icons/fa'


const AddStaff = () => {

    function test(){
        alert("Work is in progress!!!")
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
                    <input type="text" class="add-input" placeholder="Staff name" id="name" required />
                    <label for="name" class="add-labels">Staff name</label>
                </div>

                <div class="add-form-group">
                    <input type="email" class="add-input" placeholder="Staff Email" id="email" required />
                    <label for="email" class="add-labels">Staff Email</label>
                </div>

                <div class="add-form-group">
                    <input type="number" class="add-input" placeholder="Phone Number" id="phone" required />
                    <label for="phone" class="add-labels">Phone Number</label>
                </div>

                <div class="add-form-group">
                    <input type="text" class="add-input" placeholder="Home Address" id="address" required />
                    <label for="address" class="add-labels">Home Address</label>
                </div>

                <div class="add-form-group">
                    <select  class="add-input" required>
                        <option>Choose Department</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Sales">Account</option>
                        <option value="Sales">Site Inspection</option>
                    </select>
                </div>

                <div className="radio">
                    <div class="form-radio-group">
                        <input type="radio" class="form-radio-input" id="admin" name="size"/>
                        <label for="admin" class="form-radio-label">
                            <span class="form-radio-button"></span>
                            Admin
                        </label>
                    </div>

                    <div class="form-radio-group">
                        <input type="radio" class="form-radio-input" id="staff" name="size"/>
                        <label for="staff" class="form-radio-label">
                            <span class="form-radio-button"></span>
                            Staff
                        </label>
                    </div>
                </div>

                <a class="login-button" onClick={()=> test()}>Add Staff</a>
            </form>
        </div>
    )
}

export default AddStaff