import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function UpdateStudent()
{    
    const[formData,setFormData]=useState({
        id:'',
        Name:'',
        standard:'',
        academicYear:' ',
        gender:''
    });
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        axios.put(`https://localhost:7179/api/Students/update-student-by-rollno/${formData.id}`,
        {
            id:formData.id,
            Name:formData.Name,
            standard:formData.standard,
            academicYear:formData.academicYear,
            gender:formData.gender
        })
        .then((response)=>{
            alert("Updated Successfully")
            console.log(response.data);
        });
        
    };
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handleCancel=()=>{
        setFormData({
            id:"",
            Name:"",
            standard:"",
            academicYear:"",
            gender:""
        });
    };
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/A");
       }
    return(
        <form onSubmit={handleFormSubmit}>
           Id:<input type="number" name="id" value={formData.id} onChange={handleInputChange}/><br/><br/>
           Name:<input type="text" name="Name" value={formData.Name} onChange={handleInputChange}/><br/><br/>
           Standard:<input type="number" name="standard" value={formData.standard} onChange={handleInputChange}/><br/><br/>
           AcademicYear:<input type="number"  name="academicYear" value={formData.academicYear} onChange={handleInputChange}/><br/><br/>
           Gender:
           <input class="with-gap" type="radio" name="gender" value="M" id="M"
               onClick={handleInputChange}  />
             <label for="M">M</label>

            <input class="with-gap" type="radio" name="gender" value="F" id="F"
              onClick={handleInputChange} />
            <label for="F">F</label>
          <br/><br/>
          <div style={{textAlign:"center"}}>          
          <button type="submit" className="btn green">Update✔</button>
          <span style={{marginRight:"70px"}} ></span>
          <button type="button" className="btn red" onClick={handleCancel}>Cancel❌</button>
          <span style={{marginRight:"70px"}}></span>
          <button type="submit" className="btn blue" onClick={handleBack}>Back</button>

          </div>
        </form>
    )
} 