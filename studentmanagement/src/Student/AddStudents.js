import React,{useState} from "react";
import axios from "axios";
export default function AddStudents()
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

        axios.post("https://localhost:7179/api/Students/add-student-with-term",
        {
            id:formData.id,
            Name:formData.Name,
            standard:formData.standard,
            academicYear:formData.academicYear,
            gender:formData.gender
        })
        .then((response)=>{
            alert("Student Details Created Successfully")
            console.log(response.data);
        });
        
    };
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    return(
        <form onSubmit={handleFormSubmit}>
           Name:<input type="text" name="Name" value={formData.Name} onChange={handleInputChange}/><br/><br/>
           Standard:<input type="number" name="standard" value={formData.standard} onChange={handleInputChange}/><br/><br/>
           AcademicYear:<input type="number"  name="academicYear" value={formData.academicYear} onChange={handleInputChange}/><br/><br/>
           Gender:<input type="text" name="gender" value={ formData.gender} onChange={handleInputChange}/><br/><br/>
           <button type="submit">Add</button>

        </form>
    )
}