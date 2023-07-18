import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

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
    const handleCancel=()=>{
        setFormData({
        studentId:'',
        termId:'',
        tamil:'',
        english:'',
        maths:'',           
        physics:'',
        chemistry:'',
        computerScience:''
        });
    }
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/A");
       }

    return(
        <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col l2"></div>
              <div className="col l8"></div>
              <div class="row">
            <div class="input-field col s10">
           StudentId:<input type="number" name="studentId" value={formData.studentId} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           TermId:<input type="number" name="termId" value={formData.termId} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           Tamil:<input type="number"  name="tamil" value={formData.tamil} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           English:<input type="number" name="english" value={ formData.english} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           Maths:<input type="number" name="maths" value={ formData.maths} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           Physics:<input type="number" name="physics" value={ formData.physics} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           Chemistry:<input type="number" name="chemistry" value={ formData.chemistry} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col s10">
           ComputerScience:<input type="number" name="computerScience" value={ formData.computerScience} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>

           <div style={{textAlign:"center"}}>
        <button type="submit" className="btn green">Add✔</button>
        <span style={{marginRight:"70px"}}></span>
        <button type="button" className="btn red" onClick={handleCancel}>Cancel❌</button>
        <span style={{marginRight:"70px"}}></span>
        <button type="submit" className="btn blue" onClick={handleBack}>Back</button>
        </div>
        <div className="col l2"></div>
        </div>
        </form>
    )
}