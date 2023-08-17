import React from "react";
import BackgroundImage from "../Home.png";
 const Home =()=>{
  const divStyle={
    backgroundImage:`url(${BackgroundImage})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    height:"100vh"
  }
    return(
        <div>
          <div className="Home" style={divStyle}>
            <nav>
    <div class="nav-wrapper  purple lighten-1" id="nav">
      <a href="#!" class="brand-logo">Student Management System</a>
      <ul class="right hide-on-med-and-down" >
        <li><a href="/Admin"><b>Admin</b></a></li>
      </ul>
    </div>
  </nav>
  </div>
  </div>
  )
 }
 export default Home;