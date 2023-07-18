import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import M from "materialize-css/dist/js/materialize.min.js";

export default function GetStudent()
{
  const navigate = useNavigate();
  const handleBack=()=>{
      navigate("/A");
     }
     document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
    });
  
     
    const baseURL="https://localhost:7179/api/Students/get-all-student";

    const [post,setPost]=useState(null);
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
   useEffect(() => {

        axios.get(baseURL).then((response) => {
          setPost(response.data);

        }).catch(err=>console.log(err));

      },[]);
      if (!post) return null; 
      
      return(

        <>
            <div className="row">
              <div className="col l2"></div>
              <div className="col l8">
              <table>
          <thead>
            <tr> 
              <th>Name</th>
              <th>Standard</th>
              <th>AcademicYear</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item)=>(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.standard}</td>
                <td>{item.academicYear}</td>
                <td>{item.gender}</td>
                <td>
                
                <div>
            <Popup className="model-content" trigger=
                {<button className="btn blue"> Update </button>}>
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
          <button type="submit">Update✔</button>
          <button type="button" onClick={handleCancel}>Cancel❌</button>
          

          </div>
        </form>
              </Popup>
        </div>
                  </td>
                  <td>
                  <div>
            <Popup className="model-content" trigger=
                {<button className="btn red"> Delete</button>}
                position="bottom center">
              <form onSubmit={handleFormDetailSubmit}>
            <div style={{justifyContent: 'center'}}>
            <div class="row">
            <div class="input-field col s25">
           Id:<input type="number" name="id" value={formDetails.id} onChange={handleInputsChange}/><br/><br/>
           </div>
           </div>
           <div style={{textAlign:"center"}}>
           <button type="submit">Delete✔</button>
        <button type="button"  onClick={handleFormCancel}>Cancel❌</button>
        </div>
        </div>
        </form>
            </Popup>
        </div> 
        </td>
           </tr>
            )
            )}
          </tbody>
        </table>
              </div>
              <div className="col l2"></div>
            </div>
            <div style={{textAlign:"center"}}>
            <button type="submit" onClick={handleBack}>Back</button>
            </div>
           

        </>
   
    );
  }
