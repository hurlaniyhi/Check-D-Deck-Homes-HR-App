import React from 'react'
import {FaAngleRight, FaFileUpload} from 'react-icons/fa'


const UploadFile = () => {

    function test(){
        alert("Work is in progress!!!")
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
                    <input type="text" class="add-input" placeholder="File Name" id="name" required />
                    <label for="name" class="add-labels">File name</label>
                </div>

                <div class="add-form-group">
                    <textarea class="add-input text-area" placeholder="File Description" required></textarea>
                </div>

                <div class="add-form-group">
                    <input type="file" id="document"  class="input-file" required/>
                    <div className="new-file">
                        <label className="file-label" for="document">Choose File</label>
                        <p className="file-show-name">true</p>
                    </div>
                </div>

                <div class="login-button" onClick={()=>test()}>Upload File</div>
            </form>
        </div>
    )
}

export default UploadFile