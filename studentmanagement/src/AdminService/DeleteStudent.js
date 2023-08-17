import React,{useState} from "react";
import axios from "axios";
import BackgroundImage from "../Add.jpg";
import {useNavigate} from "react-router-dom"
import AdminDashboard from "../Menu/AdminDashboard";

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
    const divStyle={
        backgroundImage:`url(${BackgroundImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        height:"100vh",
        width:"200vh"
      }
    return(
        <>
        <AdminDashboard/>
        <div className="DeleteStudent" style={divStyle}>
        <div class="col s12 m8 l4 offset-m2 offset-l4" style={{paddingTop:150,paddingRight:300,paddingLeft:300,paddingBottom:90}} >
          <div class="card" >
            <div class="card-action blue lighten-4 black-text">
        <form onSubmit={handleFormDetailSubmit}>
            <div style={{justifyContent: 'center'}}>
            <div class="row">
            <div class="input-field col offset-s4 s4">
           Id:<input type="number" name="id" value={formDetails.id} onChange={handleInputsChange}/><br/><br/>
           </div>
           </div>
           <div style={{textAlign:"center"}}>
           <button type="submit" className="btn green">Delete</button>
           <span style={{marginRight:"70px"}}></span>
        <button type="button" className="btn red" onClick={handleFormCancel}>Cancel</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}