import React from 'react'


import {FaAngleRight, FaDownload} from 'react-icons/fa'
import {
    AiFillFileImage, 
    AiFillFileText, 
    AiFillFileWord, 
    AiFillFileExcel, 
    AiFillFilePdf, 
    AiFillFile,
    AiFillFilePpt,
    AiFillFileZip
} from 'react-icons/ai'


const Files = () => {
    return(
        <div className="file-envelope">
             <div className="card-title-container">
                <p className="card-title">All Files</p>
                <FaAngleRight className="access-icon"/>   
            </div>
            <div className="file-container">
                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFilePdf className="file-icon" />File One</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFileWord className="file-icon" />File Two</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFilePpt className="file-icon" />File Three</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFileExcel className="file-icon" />File Four</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFileText className="file-icon" />File Five</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFileExcel className="file-icon" />File Six</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFilePdf className="file-icon" />File Seven</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>

                <div className="single-file">
                    <div className="file-description">
                        <p className="file-text">File Description</p>
                    </div>
                    <div className="file-detail">
                        <p className="file-name"><AiFillFileWord className="file-icon" />File Eight</p>
                        <FaDownload className="file-download" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Files