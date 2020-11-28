import React, {useState, useContext} from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'
import Loader from 'react-loader-spinner'

const Email = () => {

    const {state, emailMember} = useContext(DataManager)
    const [message, setMessage] = useState({receiver: "", subject: "", content: ""})

    function handleEmail(e){
        setMessage({...message, [e.target.name]: e.target.value})
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

    const handleSubmit = async() => {
        document.querySelector("#normals").style.display = "none"
        document.querySelector("#loads").style.display = "block"
        await emailMember(getType, message.receiver, message.subject, message.content)
        document.querySelector("#loads").style.display = "none"
        document.querySelector("#normals").style.display = "block"
        setMessage({...message, receiver: "", subject: "", content: ""})
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
                    <input type="text" class="add-input" value={message.receiver} name="receiver" onChange={handleEmail} placeholder="Receiver username" id="name" required />
                    <label for="name" class="add-labels">Receiver username</label>
                </div>

                <div class="add-form-group">
                    <input type="text" class="add-input" value={message.subject} name="subject" onChange={handleEmail} placeholder="Subject" id="subject" required />
                    <label for="subject" class="add-labels">Subject</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" value={message.content} name="content" onChange={handleEmail} placeholder="Email Content" required></textarea>
                </div>

                <div class="login-button" onClick={handleSubmit} id="normals">
                    {sendButton}
                </div>
                <div class="login-button" id="loads" style={{display: "none"}}>
                    Sending
                    <Loader 
                    type="Puff"
                    color="#eee"
                    height={23}
                    width={23}
                    // timeout={3000} //3 secs
                    style={{textAlign:"center", display: "inline-block", marginLeft: "1rem"}}
                    />
                </div>
            </form>
        </div>
    )
}

export default Email