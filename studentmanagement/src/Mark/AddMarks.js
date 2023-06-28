import React,{useState} from "react";
import axios from "axios";
export default function AddMarks()
{
    const[formData,setFormData]=useState({
        studentId:'',
        termId:'',
        tamil:'',
        english:'',
        maths:'',           
        physics:'',
        chemistry:'',
        computerScience:''
    });
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        axios.post("https://localhost:7179/api/Marks/add-mark",
        {
            studentId:formData.studentId,
            termId:formData.termId,
            tamil:formData.tamil,
            english:formData.english,
            maths:formData.maths,
            physics:formData.physics,
            chemistry:formData.chemistry,
            computerScience:formData.computerScience

        })
        .then((response)=>{
            alert("Mark Details Added Successfully")
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
           StudentId:<input type="number" name="studentId" value={formData.studentId} onChange={handleInputChange}/><br/><br/>
           TermId:<input type="number" name="termId" value={formData.termId} onChange={handleInputChange}/><br/><br/>
           Tamil:<input type="number"  name="tamil" value={formData.tamil} onChange={handleInputChange}/><br/><br/>
           English:<input type="number" name="english" value={ formData.english} onChange={handleInputChange}/><br/><br/>
           Maths:<input type="number" name="maths" value={ formData.maths} onChange={handleInputChange}/><br/><br/>
           Physics:<input type="number" name="physics" value={ formData.physics} onChange={handleInputChange}/><br/><br/>
           Chemistry:<input type="number" name="chemistry" value={ formData.chemistry} onChange={handleInputChange}/><br/><br/>
           ComputerScience:<input type="number" name="computerScience" value={ formData.computerScience} onChange={handleInputChange}/><br/><br/>

           <button type="submit">Add</button>

        </form>
    )
}