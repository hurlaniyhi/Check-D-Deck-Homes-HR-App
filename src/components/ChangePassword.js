import React from 'react'
import {FaAngleRight, FaLock} from 'react-icons/fa'


const ChangePassword = () => {

    function test(){
        alert("Work is in progress!!!")
    }

    

    return(
        <div className="add-staff-container">
            <div className="card-title-container dept-topic">
                <p className="card-title">Change Password</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaLock className="add-staff-icon" />New Password</p>
                <div class="add-form-group">
                    <input type="password" class="add-input" placeholder="New Password" id="name" required />
                    <label for="name" class="add-labels">New Password</label>
                </div>

                <div class="add-form-group">
                    <input type="password" class="add-input" placeholder="Confirm Password" id="subject" required />
                    <label for="subject" class="add-labels">Confirm Password</label>
                </div>

                <div class="login-button" onClick={()=>test()}>send</div>
            </form>
        </div>
    )
}

export default ChangePassword