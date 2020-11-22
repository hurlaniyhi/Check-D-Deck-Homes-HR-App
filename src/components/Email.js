import React from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'


const Email = () => {

    function test(){
        alert("Work is in progress!!!")
    }

    return(
        <div className="add-staff-container">
            <div className="card-title-container dept-topic">
                <p className="card-title">Email/Query</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaEnvelope className="add-staff-icon" />Email/Query Staff</p>
                <div class="add-form-group">
                    <input type="text" class="add-input" placeholder="Receiver name" id="name" required />
                    <label for="name" class="add-labels">Receiver name</label>
                </div>

                <div class="add-form-group">
                    <input type="text" class="add-input" placeholder="Subject" id="subject" required />
                    <label for="subject" class="add-labels">Subject</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" placeholder="Email Content" required></textarea>
                </div>

                <div class="login-button" onClick={()=>test()}>Send Mail/Query</div>
            </form>
        </div>
    )
}

export default Email