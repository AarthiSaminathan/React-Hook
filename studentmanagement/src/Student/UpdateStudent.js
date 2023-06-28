import React,{useState} from "react";
import axios from "axios";
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
    return(
        <form onSubmit={handleFormSubmit}>
           Id:<input type="number" name="id" value={formData.id} onChange={handleInputChange}/><br/><br/>
           Name:<input type="text" name="Name" value={formData.Name} onChange={handleInputChange}/><br/><br/>
           Standard:<input type="number" name="standard" value={formData.standard} onChange={handleInputChange}/><br/><br/>
           AcademicYear:<input type="number"  name="academicYear" value={formData.academicYear} onChange={handleInputChange}/><br/><br/>
           Gender:<input type="text" name="gender" value={ formData.gender} onChange={handleInputChange}/><br/><br/>
           <button type="submit">Update</button>

        </form>
    )
}