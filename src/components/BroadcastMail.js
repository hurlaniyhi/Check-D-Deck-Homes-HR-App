import React, {useContext, useState} from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'
import DataManager from "../context/dataManager"


const Broadcast = () => {

    const {state, emailBoard} = useContext(DataManager)
    const [detail, setDetail] = useState({subject: "", content: ""})

    function handleEmail(e){
        setDetail({...detail, [e.target.name]: e.target.value})
    }
   
    const getType = localStorage.getItem("info")
    var userType
    var title 

    if(getType === "Admin"){
        userType = "Broadcast Message"
        title = "Broadcast Mail"
    }
    else if(getType === "Staff"){
        userType = "Contact Admin"
        title = "Message Admin"
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
                    <input type="text" class="add-input" name="subject" onChange={handleEmail} placeholder="Subject" id="subject" required />
                    <label for="subject" class="add-labels">Subject</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" name="content" onChange={handleEmail} placeholder="Email Content" required></textarea>
                </div>

                <div class="login-button" onClick={()=> emailBoard(getType, detail.subject, detail.content)}>Send Message</div>
            </form>

        </div>
    )
}

export default Broadcast