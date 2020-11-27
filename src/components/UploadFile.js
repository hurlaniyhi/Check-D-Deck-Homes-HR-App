import React, {useState, useContext} from 'react'
import {FaAngleRight, FaFileUpload} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'

const UploadFile = () => {

    const {state, saveFile} = useContext(DataManager)

    const [upload, setUpload] = useState({description: "", file: null, selected: "none"})

    function handleDescription(e){
        
        setUpload({...upload, description: e.target.value})
    }

    function handleFile(e){
        setUpload({...upload, file: e.target.files[0], selected: "Chosen"})
    }

    async function uploadFile(){
        const data = new FormData()
        data.append('document', upload.file)
        data.append('description', upload.description)

        document.querySelector(".loads").style.display = "inline-block"

        await saveFile(upload.file, data)
        document.querySelector(".loads").style.display = "none"
        setUpload({...upload, selected: "none", description: ""})
    }

    return(
        <div className="add-staff-container">
            <div className="card-title-container dept-topic">
                <p className="card-title">Upload Document</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <form className="add-form" autocomplete="off">
                <p className="form-title add-form-title"><FaFileUpload className="add-staff-icon" />File Upload</p>

                <div class="add-form-group">
                    <textarea class="add-input text-area" value={upload.description} onChange={handleDescription} placeholder="File Description" required></textarea>
                </div>

                <div class="add-form-group">
                    <input type="file" id="document" onChange={handleFile} class="input-file" required/>
                    <div className="new-file">
                        <label className="file-label" for="document">Choose File</label>
                        <p className="file-show-name">{upload.selected}</p>
                    </div>
                </div>

                <div class="login-button" onClick={()=>uploadFile()}>
                    Upload File
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

export default UploadFile