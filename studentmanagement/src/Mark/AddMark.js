import React, { useState } from "react";
import axios from "axios";
export default function AddMark()
{
    const[StudentId,setStudentId]=useState();
    const[TermId,setTermId]=useState();
    const[Tamil,setTamil]=useState();
    const[English,setEnglish]=useState();
    const[Maths,setMaths]=useState();
    const[Physics,setPhysics]=useState();
    const[Chemistry,setChemistry]=useState();
    const[ComputerScience,setComputerScience]=useState();
    const  postData=()=>{
        axios.post("https://localhost:7179/api/Marks/add-mark",
        
        {
            StudentId,
            TermId,
            Tamil,
            English,
            Maths,
            Physics,
            Chemistry,
            ComputerScience
        })
        .then(response=>{
          alert("Added Successfully");
            console.log(response.data);
            setStudentId('');
            setTermId('');
            setTamil('');
            setEnglish('');
            setMaths('');
            setPhysics('');
            setChemistry('');
            setComputerScience('');

        });
   
    }
    const handleStudentIdChange=e=>{
        setStudentId(e.target.Value);
    };
    const handleTermIdChange=e=>{
    const termValue=parseInt(e.target.value);
      if(termValue>=1 && termValue<=6)  {
        setTermId(termValue);
      }
    };
    const handleTamilChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setTamil(markValue);
      }
    };
    const handleEnglishChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setEnglish(markValue);
      }
    };
    const handleMathsChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setMaths(markValue);
      }
    };
    const handlePhysicsChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setPhysics(markValue);
      }
    };
    const handleChemistryChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setChemistry(markValue);
      }
    };
    const handleComputerScienceChange=e=>{
        const markValue=parseInt(e.target.value);
      if(markValue>=0 && markValue<=100)  {
        setComputerScience(markValue);
      }
    };
    return (
        <div>
        StudentId:<input
        type="number"
        value={StudentId}
        onChange={handleStudentIdChange}
        /><br/><br/>
        
        TermId:<input
        type="number"
        value={TermId}
        onChange={handleTermIdChange}
        />
        <br/><br/>
        Tamil:<input
        type="number"
        value={Tamil}
        onChange={handleTamilChange}
        />
        <br/><br/>
        English:<input
        type="number"
        value={English}
        onChange={handleEnglishChange}
        />
        <br/><br/>
        Maths:<input
        type="number"
        value={Maths}
        onChange={handleMathsChange}
        />
        <br/><br/>
        Physics:<input
        type="number"
        value={Physics}
        onChange={handlePhysicsChange}
        />
        <br/><br/>
        Chemistry:<input
        type="number"
        value={Chemistry}
        onChange={handleChemistryChange}
        />
        <br/><br/>
        CompurtScience:<input
        type="number"
        value={ComputerScience}
        onChange={handleComputerScienceChange}
        />
        <br/><br/>
        <button onClick={postData}>Add</button>
        </div>
        );

}