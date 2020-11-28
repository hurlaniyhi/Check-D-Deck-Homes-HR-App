import React, {useContext, useState} from 'react'
import {FaAngleRight, FaEnvelope} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'
import Loader from 'react-loader-spinner'


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

    const handleSubmit = async() => {
        document.querySelector("#normals").style.display = "none"
        document.querySelector("#loads").style.display = "block"
        
        await emailBoard(getType, detail.subject, detail.content)
        
        document.querySelector("#loads").style.display = "none"
        document.querySelector("#normals").style.display = "block"
        setDetail({...detail, subject: "", content: ""})
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
                    <input type="text" class="add-input" value={detail.subject} name="subject" onChange={handleEmail} placeholder="Subject" id="subject" required />
                    <label for="subject" class="add-labels">Subject</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" value={detail.content} name="content" onChange={handleEmail} placeholder="Email Content" required></textarea>
                </div>

                <div class="login-button" onClick={handleSubmit} id="normals">
                    Send Message
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

export default Broadcast