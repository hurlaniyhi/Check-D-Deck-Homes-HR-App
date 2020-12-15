import React, {useEffect, useContext, useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { FaSignOutAlt, FaCamera, FaPencilAlt } from 'react-icons/fa'
import dp from '../assets/dp3.jpg'
import barLogo from '../assets/ourlogo.png'
import userImage2 from '../assets/userdp.jpg'
import Progress from "./Progress"
//import Staff from './Staff'
import Email from './Email'
import Broadcast from './BroadcastMail'
import Files from './Files'
import StaffHome from './StaffHome'
import ChangePassword from './ChangePassword'
import UploadFile from './UploadFile'
import DataManager from "../context/dataManager"
import { Modal, Button } from "react-bootstrap";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'



const StaffDashboard = () => {

    const {state, fetchUser, uploadDP} = useContext(DataManager)
    const [preview, setPreview] = useState({image: null})

    const [crop, setCrop] = useState({unit: "%", aspect: 1 / 1, width: 100, height: 75});
    const [info, setInfo] = useState({src: null, image: null, croppedUrl: "", croppedImage: null, filename: ""})


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setInfo({...info, src: null})
    };
    const handleShow = () => setShow(true);


    /******************* IMAGE CROP FUNCTIONS *******************************/
   
    const onImageLoaded = image => {
        setInfo({...info, image: image})
     }
     
    function handleComplete(crop, percentCrop){
        console.log(crop)
        if (info.image && crop.width && crop.height) {
         const croppedImageUrl = getCroppedImg(info.image, crop)
         setInfo({...info, croppedUrl: croppedImageUrl })
     }
    }

    function getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )
    
        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
               // setInfo({...info, croppedImage: reader.result })
                dataURLtoFile(reader.result, info.filename)
            }
        })
    }
    
        function dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            console.log(mime)
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        setInfo({...info, croppedImage: URL.createObjectURL(croppedImage), croppedUrl: croppedImage }) 
    }


    const handleFile = (e) => {
        const fileReader = new FileReader()
        fileReader.onloadend = async() => {
            setInfo({...info, src: fileReader.result, 
                filename: e.target.files[0].name, 
                croppedUrl: e.target.files[0],
                croppedImage: URL.createObjectURL(e.target.files[0])
            })
        }   
        fileReader.readAsDataURL(e.target.files[0])
    
        handleShow()
    }
/*********************************************************************************************************/

    //USE EFFECT

    useEffect(()=>{
        userInfo()
    }, [])

    // **********************

    const userInfo = async()=>{
       
        const type = await localStorage.getItem("info")
        const token = await localStorage.getItem("token")
    
        if(token && (type === "Staff")){
            fetchUser()
        }
        else{
            return history.push("/")
           
        } 
       
        
    }

    const handleImage = async()=>{
        // setInfo({...info, src: URL.createObjectURL(e.target.files[0])})
        // setInfo({...info, filename: e.target.files[0].name})
        
        // document.querySelector("#both").style.display = "none"
        // document.querySelector("#both2").style.display = "none"
        // document.querySelector("#preview").style.display = "block"
        // document.querySelector("#preview2").style.display = "block"

       
        handleClose()
        const data = new FormData()
        console.log(info.croppedUrl)
        console.log(info.filename)
        data.append('picture', info.croppedUrl)
         
        await uploadDP(data)
        setInfo({...info, croppedImage: "", src: null, croppedUrl: null, image: null})
        // document.querySelector("#both").style.display = "block"
        // document.querySelector("#both2").style.display = "block"
        // document.querySelector("#preview").style.display = "none"
        // document.querySelector("#preview2").style.display = "none"
        
    }

    const history = useHistory()

    function logOut(info){  
        if(info){
            if(window.confirm("Are you sure you want to log out ?")){
                localStorage.clear()
                history.push("/")
            }
        }
        else{
            localStorage.clear()
            history.push("/")
        } 
        
    }

    async function handleFetch(key, value){
        await localStorage.setItem(key, value)
    }

    // PROTECTING THIS ROUTE
    const type = localStorage.getItem("info")
    const token = localStorage.getItem("token")

    if(token && (type === "Staff")){
        var res = true
    }
    else{
        var res = false
    }
    
    // *******************************


    document.body.style.background = '#F7FCFC'

    return(
       
        <Router>
            {res == true ? <div>
                <div className="title-bar">
                    <FaSignOutAlt className="logout-icon" onClick={()=>logOut("ask")} />
                    
                    <div class="dropdown">
                        <div className="menu-container" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="bar-menu dropdown-toggle">Menu-items</p></div>
                        <div class="dropdown-menu" id="menu-items" aria-labelledby="dropdownMenuButton">    
                            <Link to="/staff/home"  className="item-button dropdown-item">Home</Link>
                            <Link to="/staff/uploadfile" className="item-button dropdown-item">Upload file</Link>
                            <Link to="/staff/email_query" className="item-button dropdown-item">Contact Other Staff</Link>
                            <Link to="/staff/files" onClick={()=>handleFetch("fileViewer", "staff")} className="item-button dropdown-item">Uploaded files</Link>
                            <Link to="/staff/broadcastmail" className="item-button dropdown-item">Contact Admin</Link>
                            <Link to="/staff/changepassword" className="item-button dropdown-item">Change password</Link>
                            <a className="item-button dropdown-item" onClick={()=>logOut()}>LogOut</a>
                        </div>
                    </div>

                    
                    
                    <div className="bar-user">
                    {/* <img src={userImage} className="bar-image" /> */}
                    {
                    // info.croppedImage ? <img src={info.croppedImage} className="bar-image" />:
                    // info.src ? <img src={info.src} className="bar-image"  />:
                    state.user.profilePicture ? <img src={state.user.profilePicture} className="bar-image" /> :
                    <img src={userImage2} className="bar-image"  />}
                        <p className="bar-username">Staff Dashboard</p>
                    </div>
                    <Link to="/staff/home"><img className="logo-bar" src={barLogo}/></Link>
                </div>

                <div className="staff-header">

                    {
                    // info.croppedImage ? <img src={info.croppedImage} className="user-img" />:
                    // info.src ? <img src={info.src} className="bar-image" />:
                    state.user.profilePicture ? <img src={state.user.profilePicture} className="user-img"  /> : 
                    <img src={userImage2} className="user-img" />}

                    <div className="mydp">
                        <input type="file" onChange={handleFile} className="input-dp" id="dp" />
                        <label className="dp-placeholder" for="dp">
                            <p>Change Picture</p>
                            <FaPencilAlt className="file-icon" />
                        </label>
                    </div>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                            size="lg"
                             aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">Profile Picture Upload</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <p className="popup-note">Kindly drag to position the chosen profile picture</p>
    
                                <div className="crop-container">
                                    <ReactCrop 
                                        imageStyle={{ width: "25rem", height: "35rem"}} 
                                        src={info.src} 
                                        crop={crop} 
                                        onChange={newCrop => setCrop(newCrop)} 
                                        onComplete={(crop, percentCrop) => handleComplete(crop, percentCrop)}
                                        onImageLoaded={(image)=> onImageLoaded(image)}
                                        locked 
                                    />
                                   <img src={info.croppedImage} className="cropped-image"  />
                                   
                                </div>
                            
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleImage}>Upload</Button>
                            </Modal.Footer>
                        </Modal>

                    <div className="user-details">
                        <p className="user-name">{state.user.firstName} {state.user.lastName}</p>
                        <p className="user-infos">{state.user.department} Department</p>
                        <p className="user-infos">{state.user.email}</p>
                        <p className="user-infos">{state.user.address}</p>
                        <p className="user-infos">{state.user.gender}</p>
                        <p className="user-infos">{state.user.maritalStatus}</p>
                        <p className="user-infos">{state.user.phoneNumber}</p>
                    </div>

                    <p className="user-rank">{state.user.jobStatus}</p>
                </div>

            
                
                <div className="content-view">
                    <Switch>
                        <Route path="/staff/" exact component={StaffHome}></Route>
                        <Route path="/staff/home" exact component={StaffHome}></Route>
                        <Route path="/staff/email_query" exact component={Email}></Route>
                        <Route path="/staff/files" exact component={Files}></Route>
                        <Route path="/staff/broadcastmail" exact component={Broadcast}></Route>
                        <Route path="/staff/changepassword" exact component={ChangePassword}></Route>
                        <Route path="/staff/uploadfile" exact component={UploadFile}></Route>
                        <Route path="/staff/work" component={Progress}></Route>
                        <Redirect from="/staff/:id" to="/staff/" />
                    </Switch>
                </div>
            </div>: null}
        </Router>
      
    )
}

export default StaffDashboard