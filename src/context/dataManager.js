import React, {useReducer} from 'react'
import myAPI from '../API/managerAPI'

const DataManager = React.createContext()

const stateReducer = (state, action) => {

    switch (action.type){

        case "store_user_data": 
            return {...state, user: action.payload}

        case "store_members":
            return {...state, members: action.payload}

        case "store_files":
            return {...state, files: action.payload}

        case "request_done":
            return{...state, requestDone: action.payload}
    }

}



export const StateProvider = (props) => {


    const [state, dispatch] = useReducer(stateReducer,{user: {}, src: "", members: [], files: [], requestDone: false})


    const signIn = async(history, username, password) => {
        await dispatch({type: "request_done", payload: true})
        const getInfo = await localStorage.getItem("info")
        
        if(!username || !password){
            await dispatch({type: "request_done", payload: false})
          return alert("Kindly provide your username and password")
        }

        try{
            const response = await myAPI.post('/login', {username, password, userType: getInfo})
            //await dispatch({type: "request_done", payload: true})
            if(response.data.message === "success"){
                await localStorage.setItem("token", response.data.token)
                await localStorage.setItem("username", response.data.profile.username)

               history.push("/resolve")
               
            }
            else if(response.data.message === "type-issue"){
                alert(response.data.info)
                if(window.confirm("Did you want to re-select account type")){
                    history.push("/")
                    
                }   
            }
            else{
                
                alert(response.data.message)
            }
            await dispatch({type: "request_done", payload: false})
        }
        catch(err){
            await dispatch({type: "request_done", payload: false})
            alert("No network connection")
        }       
    }

    const addUser = async(details) => {
        if(!details.firstName || !details.lastName || !details.email || !details.address || !details.userType || 
            !details.phoneNumber || !details.jobStatus || !details.department 
            || !details.gender || !details.maritalStatus){
                return alert("Kindly provide all information")
            }

        try{
            const response = await myAPI.post('/addUser', details)
            if(response.data.message === "success"){
                alert(response.data.message)
                
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const switchPassword = async(current, confirm) => {
        
        if(!current || !confirm){
            return alert("Kindly provide the required information")
        }

        if(current != confirm){
            return alert("password did not match")
        }

        try{
            const response = await myAPI.post('/changePassword', {password: current})
            if(response.data.message == "success"){
                alert("Password successfully changed")
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const emailBoard = async(getType, subject, content) => {
        if(!subject || !getType || !content){
            return alert("Kindly provided the required information")
        }

        try{
            const response = await myAPI.post('/directMail', {userType: getType, subject, content})
            if(response.data.message === "success"){
                alert("Message successfully sent")
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const emailMember = async(getType, receiverName, subject, content) => {
        if(!getType || !receiverName || !subject || !content){
            return alert("Kindly provide the required information")
        }

        try{
            const response = await myAPI.post('/personalMail', {userType: getType, receiverName, subject, content})
            if(response.data.message === "success"){
                alert("Message successfully sent")
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const fetchUser = async(user) => {
        try{
            const response = await myAPI.post('/user', {user})
            if(response.data.message === "success"){
                await dispatch({type: "store_user_data", payload: response.data.profile})
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const uploadDP = async(data) =>{
        try{
            const response = await myAPI.post('/dp', data)
            if(response.data.message === "success"){
                await dispatch({type: "store_user_data", payload: response.data.profile})
                alert("Picture successfully changed")
            }
            else{
                alert(response.data.message)
                console.log(response.data.info)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const fetchMembers = async() => {
        var type = await localStorage.getItem("dept")

        try{
            const response = await myAPI.post('/fetchStaff', {type})
            if(response.data.message === "success"){
                await dispatch({type: "store_members", payload: response.data.info})
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const deleteStaff = async(id) => {
        try{
            const response = await myAPI.post('/deleteStaff', {id})
            if(response.data.message === "success"){
                alert(response.data.info)
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const saveFile = async(file,data) => {
        if(!file){
            return alert("Kindly select file to upload")
        }
        try{
            const response = await myAPI.post('/file', data)
            if(response.data.message === "success"){
                alert("File successfully uploaded")
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const fetchFiles = async() => {
        var type = await localStorage.getItem("fileViewer")
        try{
            const response = await myAPI.post('/fetchFiles', {type})
            if(response.data.message === "success"){
                await dispatch({type: "store_files", payload: response.data.info})
            }
            else{
                alert(response.data.message)
            }
        }
        catch(err){
            alert("No network connection")
        }
    }

    const downloadFile = async(query) => {
        
            await myAPI.get(`/file/${query}`)
                .then(()=>{
                    window.open(`https://staff-manager-server.herokuapp.com/file/${query}`, '_blank')
                })
                .catch((err)=>{
                    alert("No network connection")
                })
                    
    }

    const deleteFile = async(gfsId, fileId) => {
        try{
            const response = await myAPI.post('/deleteFile', {gfsId, fileId})
            if(response.data.message != "success"){
                alert(response.data.message)
            }
           
        }
        catch(err){
            alert("No network connection")
        }
    }


    const boundActions = {
        signIn,
        addUser,
        switchPassword,
        emailBoard,
        emailMember,
        fetchUser,
        uploadDP,
        fetchMembers,
        deleteStaff,
        saveFile,
        fetchFiles,
        downloadFile,
        deleteFile
    }


    return (
        <DataManager.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </DataManager.Provider>
        )

}

export default DataManager