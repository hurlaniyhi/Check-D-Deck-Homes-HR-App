import React from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'


const Broadcast = () => {

    function test(){
        alert("Work is in progress!!!")
    }

    return(
        <div className="add-staff-container">
            <div className="card-title-container dept-topic">
                <p className="card-title">Broadcast Message</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaEnvelope className="add-staff-icon" />Broadcast Mail</p>

                <div class="add-form-group">
                    <input type="text" class="add-input" placeholder="Subject" id="subject" required />
                    <label for="subject" class="add-labels">Subject</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" placeholder="Email Content" required></textarea>
                </div>

                <div class="login-button" onClick={()=> test()}>Send Message</div>
            </form>

        </div>
    )
}

export default Broadcast