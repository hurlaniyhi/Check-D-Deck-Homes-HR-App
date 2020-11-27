import React, {useState, useContext} from 'react'
import {FaAngleRight, FaLock} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'


const ChangePassword = () => {

    const {switchPassword} = useContext(DataManager)
    const [password, setPassword] = useState({newPassword: "", confirmPassword: ""})

    const handlePassword = (e) => {
        setPassword({...password, [e.target.name]: e.target.value})
    }

    async function handleSubmit(){
        document.querySelector(".loads").style.display = "inline-block"

        await switchPassword(password.newPassword, password.confirmPassword)

        document.querySelector(".loads").style.display = "none"
        setPassword({...password, newPassword: "", confirmPassword: ""})
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
                    <input type="password" class="add-input" value={password.newPassword} name="newPassword" onChange={handlePassword} placeholder="New Password" id="name" required />
                    <label for="name" class="add-labels">New Password</label>
                </div>

                <div class="add-form-group">
                    <input type="password" class="add-input" value={password.confirmPassword} name="confirmPassword" onChange={handlePassword} placeholder="Confirm Password" id="subject" required />
                    <label for="subject" class="add-labels">Confirm Password</label>
                </div>

                <div class="login-button" onClick={handleSubmit}>
                    send
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

export default ChangePassword