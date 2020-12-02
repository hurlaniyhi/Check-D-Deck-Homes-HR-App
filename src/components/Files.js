import React, {useEffect, useContext} from 'react'
import {FaAngleRight, FaDownload, FaTrash} from 'react-icons/fa'
import {
    AiFillFileImage, 
    AiFillFileText, 
    AiFillFileWord, 
    AiFillFileExcel, 
    AiFillFilePdf, 
    AiFillFile,
    AiFillFilePpt,
    AiFillFileZip,
    AiFillAudio,
    AiFillVideoCamera
} from 'react-icons/ai'
import DataManager from "../context/dataManager"
import { SpinningCircles, Puff } from 'svg-loaders-react'
import Loader from 'react-loader-spinner'


const Files = () => {

    const {state, fetchFiles, downloadFile, deleteFile} = useContext(DataManager)

    useEffect(()=>{
        fetchFiles()
    }, [])


   function getFile(data, id){  
       downloadFile(data, id)
    }


    async function removeFile(gfsId, fileId){
        if(window.confirm("Are you sure you want to delete this file ?")){
            await deleteFile(gfsId, fileId)
            fetchFiles()
        }   
    }


    const status = localStorage.getItem("fileViewer")

    
    const files = state.files.map(file =>{
        if(file.fileName.length >= 15){
            var name = file.fileName.substring(0, 10) + "..." + file.fileName.substring(file.fileName.length-3, file.fileName.length)
        }
        else{
            var name = file.fileName
        }

        if(file.description.length >= 35){
            var description = file.description.substring(0, 23) + "..."
        }
        else{
            var description = file.description
        }

        var getIndex = file.fileBinary.indexOf(".")
        var getExt = file.fileBinary.substring(getIndex+1, file.fileBinary.length)
       

        return(
            <div className="single-file" key={file.gfsId}>
                <div className="file-description">
                    {file.description ? <p className="file-text">{description}</p> :
                    <p className="file-text">No Description</p> }
                </div>
                {state.operation != file._id ? <div className="file-detail">
                    <div className="file-name">
                        {getExt == "pdf" ? <AiFillFilePdf className="file-icon" style={{color: "red"}}/>:
                        getExt == "docx" ? <AiFillFileWord className="file-icon" style={{color: "#1F61BB"}} />:
                        getExt == "txt" ? <AiFillFileText className="file-icon" style={{color: "black"}} />:
                        getExt == "doc" ? <AiFillFileWord className="file-icon" style={{color: "blue"}} />:
                        getExt == "ppt" ? <AiFillFilePpt className="file-icon" style={{color: "red"}} />:
                        getExt == "xls" ? <AiFillFileExcel className="file-icon" style={{color: "green"}}/>:
                        getExt == "jpg" || getExt == "png" || getExt == "jpeg" ? <AiFillFileImage className="file-icon" style={{color: "green"}}/>:
                        getExt == "zip" ? <AiFillFileZip className="file-icon" style={{color: "#A06727"}}/>:
                        getExt == "mp3" ? <AiFillAudio className="file-icon" style={{color: "black"}} />: 
                        getExt == "mp4" ? <AiFillVideoCamera className="file-icon" style={{color: "black"}} />: 
                        <AiFillFilePdf className="file-icon" style={{color: "black"}} />}
                        <p className="file-file-name">{name}</p>
                    </div>
                    <div className="file-name">
                        <FaDownload className="file-download" onClick={()=>getFile(file.fileBinary, file._id)} />
                        {status !== "staff" ?
                        <FaTrash className="file-download" onClick={()=>removeFile(file.gfsId, file._id)} /> : null}
                    </div>
                
                </div>:
                  <Loader className="loads"
                    type="ThreeDots"
                    color="#192B51"
                    height={40}
                    width={40}
                    // timeout={3000} //3 secs
                    style={{textAlign:"center", marginBottom: "1rem"}}
                />}
                
            </div>
        )
    })

    return(
        <div className="file-envelope">
             <div className="card-title-container">
                <p className="card-title">All Files</p>
                <FaAngleRight className="access-icon"/>   
            </div>
            { state.files.length >= 1 ? <div className="file-container">
                {files} 
                </div>: 
                <Loader className="loads"
                type="Puff"
                color="#192B51"
                height={70}
                width={70}
                // timeout={3000} //3 secs
                style={{textAlign:"center", marginTop: "6.5rem"}}
            />
            }
        </div>
    )
}

export default Files