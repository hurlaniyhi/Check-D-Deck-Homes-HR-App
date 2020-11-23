import React from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'


const Email = () => {

    function test(){
        alert("Work is in progress!!!")
    }

    const getType = localStorage.getItem("info")
    var userType
    var title 
    var sendButton

    if(getType === "Admin"){
        userType = "Email/Query"
        title = "Email/Query Staff"
        sendButton = "Send Email/Query"
    }
    else if(getType === "Staff"){
        userType = "Contact Other Staff"
        title = "Message Staff"
        sendButton = "Send Message"
    }

    return(
        <div className="add-staff-container">
            <div className="card-title-container dept-topic">
                <p className="card-title">{userType}</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaEnvelope className="add-staff-icon" />{title}</p>
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

                <div class="login-button" onClick={()=>test()}>{sendButton}</div>
            </form>
        </div>
    )
}

export default Email