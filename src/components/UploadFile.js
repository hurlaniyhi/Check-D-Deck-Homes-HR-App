import React, {useState, useContext} from 'react'
import {FaAngleRight, FaFileUpload} from 'react-icons/fa'
import DataManager from "../context/dataManager"
import { Puff } from 'svg-loaders-react'
import Loader from 'react-loader-spinner'

const UploadFile = () => {

    const {state, saveFile} = useContext(DataManager)

    const [upload, setUpload] = useState({description: "", file: null, selected: "Choose file"})

    function handleDescription(e){
        
        setUpload({...upload, description: e.target.value})
    }

    function handleFile(e){
        setUpload({...upload, file: e.target.files[0], selected: e.target.files[0].name})
    }

    async function uploadFile(){
        const data = new FormData()
        data.append('document', upload.file)
        data.append('description', upload.description)

        document.querySelector("#normals").style.display = "none"
        document.querySelector("#loads").style.display = "block"

        await saveFile(upload.file, data)
        document.querySelector("#loads").style.display = "none"
        document.querySelector("#normals").style.display = "block"
        setUpload({...upload, selected: "", description: "Choose file"})
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
                    <div className="test-file">
                        <label className="test-content" for="document">Browse</label>
                        {upload.selected === "Choose file" ? <p className="test-text" id="none-file">{upload.selected}</p>: 
                        <p className="test-text">{upload.selected}</p>}
                    </div>
                </div>


                <div class="login-button" onClick={()=>uploadFile()} id="normals">
                    Upload File
                </div>
                <div class="login-button" id="loads" style={{display: "none"}}>
                    Uploading
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

export default UploadFile