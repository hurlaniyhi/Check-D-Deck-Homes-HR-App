import React, {useState, useContext} from 'react'
import {FaAngleRight, FaFileUpload} from 'react-icons/fa'
import DataManager from "../context/dataManager"

const UploadFile = () => {

    const {state, saveFile} = useContext(DataManager)

    const [upload, setUpload] = useState({description: "", file: null})

    function handleDescription(e){
        
        setUpload({...upload, description: e.target.value})
    }

    function handleFile(e){
        alert("file selected")
        setUpload({...upload, file: e.target.files[0]})
    }

    function uploadFile(){
        const data = new FormData()
        data.append('document', upload.file)
        data.append('description', upload.description)

        saveFile(upload.file, data)
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
                    <textarea class="add-input text-area" onChange={handleDescription} placeholder="File Description" required></textarea>
                </div>

                <div class="add-form-group">
                    <input type="file" id="document" onChange={handleFile} class="input-file" required/>
                    <div className="new-file">
                        <label className="file-label" for="document">Choose File</label>
                        <p className="file-show-name">false</p>
                    </div>
                </div>

                <div class="login-button" onClick={()=>uploadFile()}>Upload File</div>
            </form>
        </div>
    )
}

export default UploadFile