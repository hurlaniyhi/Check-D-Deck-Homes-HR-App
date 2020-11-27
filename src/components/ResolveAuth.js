import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'



const ResolveAuth = () => {

    const history = useHistory()

    async function protectRoute(){
        const type = await localStorage.getItem("info")
        const token = await localStorage.getItem("token")

        if(token && (type === "Admin")){
            history.push("/admin")
        }
        else if(token && (type === "Staff")){
            history.push("/staff")
        }
        else{
            history.push("/")
        }
    }

    useEffect(()=>{
        protectRoute()
    }, [])

    return <div></div>
}

export default ResolveAuth