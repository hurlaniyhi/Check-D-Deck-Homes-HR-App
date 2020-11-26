import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {FaAngleRight, FaUser} from 'react-icons/fa'
import DataManager from "../context/dataManager"


const Department = () => {

    const {state, fetchMembers} = useContext(DataManager)

    useEffect(()=>{
        callFetcher()
    }, [])

    const callFetcher = async() =>{
        await localStorage.setItem("dept", "all")
        fetchMembers()
    }

    const history = useHistory()

    async function work(dept){
        await localStorage.setItem("dept", dept)
        history.push("/admin/stafflist")
    }

    let HR = 0
    let marketing = 0
    let sales = 0
    let account = 0
    let siteInspection = 0

    for (let calc of state.members){
        if(calc.department === "Human Resources"){
            HR++
        }
        else if(calc.department === "Marketing"){
            marketing++
        }
        else if(calc.department === "Sales"){
            sales++
        }
        else if(calc.department === "Account"){
            account++
        }
        else if(calc.department === "Site Inspection"){
            siteInspection++
        }
    }

    return(
        <div className="depts-container">
             <div className="card-title-container dept-topic">
                <p className="card-title">Departments</p>
                <FaAngleRight className="access-icon"/>   
            </div>

            <div className="dept dept1" onClick={()=>work("Human Resources")}>
                <p className="dept-text">Human Resources</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">{HR} staff</p>
                </div>
            </div>

            <div className="dept dept2" onClick={()=>work("Marketing")}>
                <p className="dept-text">Marketing</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">{marketing} staff</p>
                </div>
            </div>

            <div className="dept dept3" onClick={()=>work("Sales")}>
                <p className="dept-text">Sales</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">{sales} staff</p>
                </div>
            </div>

            <div className="dept dept4" onClick={()=>work("Account")}>
                <p className="dept-text">Account</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">{account} staff</p>
                </div>
            </div>

            <div className="dept dept5" onClick={()=>work("Site Inspection")}>
                <p className="dept-text">Site Inspection</p>
                <div className="dept-staff">
                    <FaUser className="staff-icon"/>
                    <p className="staff-no">{siteInspection} staff</p>
                </div>
            </div>
        
        </div>
    )
}

export default Department