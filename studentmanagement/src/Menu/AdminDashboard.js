import React, { useEffect } from "react";
import {  Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";


const AdminDashboard = () => {

  useEffect(() => {
    
    M.AutoInit();
  },[])
  const navigate = useNavigate();
  const handleLogout=()=>{
  navigate("/Admin");
 }
  
return (
     
<div >
  
<div class="navbar-fixed hoverable">
    <nav>
      <div class="nav-wrapper   blue darken-3">
        <a href="#" class="brand-logo center" styles="margin-left: 1em;">Admin Portal</a>
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
            <a class="collapsible-header">Admin<i class="material-icons my-color">whatshot</i></a>
            <div class="collapsible-body">
            <ul>
              <li><Link to="/AddStudent">AddStudent</Link></li><br/>
              <li><Link to="/GetStudent">GetStudent</Link></li><br/>
              <li><Link to="/UpdateStudent">UpdateStudent</Link></li><br/>
              <li><Link to="/DeleteStudent">DeleteStudent</Link></li><br/>
              <li><Link to="/AddMarks">AddMark</Link></li>
              </ul>
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

export default AdminDashboard;