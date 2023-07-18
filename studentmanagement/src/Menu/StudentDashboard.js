import React, { useEffect } from "react";
import {  Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";


const StudentDashboard = () => {

  useEffect(() => {
    
    M.AutoInit();
  },[])
  const navigate = useNavigate();
  const handleLogout=()=>{
  navigate("/Student");
 }
  
return (
     
<div >
  
<div class="navbar-fixed hoverable">
    <nav>
      <div class="nav-wrapper   orange darken-1">
        <a href="#" class="brand-logo center" styles="margin-left: 1em;">Student Portal</a>
        <ul class="right">
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Hello User<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
      </div>
    </nav>
  </div>
    
      
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="/"  onClick={handleLogout}>Logout</a></li>
    </ul>
    
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
      <li class="bold">
      <a href="#" data-target="slide-out" class="sidenav-trigger">Dashboard <i class="material-icons">menu</i></a>
      </li>
      

      <ul id="slide-out" class="sidenav">
      
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          
          <li>
            <a class="collapsible-header">Student<i class="material-icons my-color">perm_identity</i></a>
            <div class="collapsible-body">

            </div>
          </li>

        </ul>
      </li>
    </ul>    

<ul/>
      </ul>
    
    

  </div>
  


);
};

export default StudentDashboard;