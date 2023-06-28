import React,{useState} from "react";
import axios from "axios";
export default function DeleteStudent()
{
    const[formData,setFormData]=useState({
        id:'',
        
    });
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        axios.delete(`https://localhost:7179/api/Students/delete-student-by-rollno/${formData.id}`,
        {
            id:formData.id,
           
        })
        .then((response)=>{
            alert("Deleted Successfully");
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
           <button type="submit">Delete</button>
        </form>
    )
}