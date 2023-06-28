import React,{useState} from "react";
import axios from "axios";
export default function GetStudent()

{
      
    const baseURL="https://localhost:7179/api/Students/get-all-student";

    const [post,setPost]=useState(null);

    React.useEffect(() => {

        axios.get(baseURL).then((response) => {
          setPost(response.data);

        }).catch(err=>console.log(err));

      });
      if (!post) return null;
      return(

        <div>

      {post.map((data) =>
       {
          return (
            
            <p>{data.name}</p>
            
            );
        })}
    </div>
    );
  }
