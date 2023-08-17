import React,{useState} from "react";
import axios from "axios";
import BackgroundImage from "../Add.jpg";
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
       const divStyle={
        backgroundImage:`url(${BackgroundImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        height:"100vh"
      }

    return(
        <div className="AddMarks" style={divStyle}>
  <div class="col s12 m8 l4 offset-m2 offset-l4" style={{paddingTop:90,paddingRight:300,paddingLeft:300,paddingBottom:110}} >
    <div class="card" >
      
      <div class="card-action blue lighten-4 black-text">
    
        <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col l2"></div>
              <div className="col l8"></div>
              <div class="row">
            <div class="input-field col offset-s4 s4">
           StudentId:<input type="number" name="studentId" value={formData.studentId} onChange={handleInputChange}/><br/><br/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           TermId:<input type="number" name="termId" value={formData.termId} onChange={handleInputChange}/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           Tamil:<input type="number"  name="tamil" value={formData.tamil} onChange={handleInputChange} min="0" max="100"/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           English:<input type="number" name="english" value={ formData.english} onChange={handleInputChange} min="0" max="100"/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           Maths:<input type="number" name="maths" value={ formData.maths} onChange={handleInputChange} min="0" max="100"/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           Physics:<input type="number" name="physics" value={ formData.physics} onChange={handleInputChange} min="0" max="100"/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           Chemistry:<input type="number" name="chemistry" value={ formData.chemistry} onChange={handleInputChange} min="0" max="100"/>
           </div>
           </div>
           <div class="row">
            <div class="input-field col offset-s4 s4">
           ComputerScience:<input type="number" name="computerScience" value={ formData.computerScience} onChange={handleInputChange} min="0" max="100"/>
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
        </div>
        </div>
        </div>
        </div>
    )
}