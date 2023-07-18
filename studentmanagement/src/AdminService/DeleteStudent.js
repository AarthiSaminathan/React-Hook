import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function DeleteStudent()
{
    const[formDetails,setFormDatalis]=useState({
        id:'',
        
    });
    const handleFormDetailSubmit=(e)=>{
        e.preventDefault();

        axios.delete(`https://localhost:7179/api/Students/delete-student-by-rollno/${formDetails.id}`,
        {
            id:formDetails.id,
           
        })
        .then((response)=>{
            alert("Deleted Successfully");
            console.log(response.data);
        });
        
    };
    const handleInputsChange=(e)=>{
        setFormDatalis({
            ...formDetails,
            [e.target.name]:e.target.value
        });
    };
    const handleFormCancel=()=>{
        setFormDatalis({
            id:"",
        });
    }
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/A");
       }
    return(
        <form onSubmit={handleFormDetailSubmit}>
            <div style={{justifyContent: 'center'}}>
            <div class="row">
            <div class="input-field col s25">
           Id:<input type="number" name="id" value={formDetails.id} onChange={handleInputsChange}/><br/><br/>
           </div>
           </div>
           <div style={{textAlign:"center"}}>
           <button type="submit" className="btn green">Delete</button>
           <span style={{marginRight:"70px"}}></span>
        <button type="button" className="btn red" onClick={handleFormCancel}>Cancel</button>
        <span style={{marginRight:"70px"}}></span>
        <button type="submit" className="btn blue" onClick={handleBack}>Back</button>

        </div>
        </div>
        </form>
    )
}