import React, { useState,useEffect } from "react";
import {  Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./AdnDashboard.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";


const AdminDashboard = () => {

  const[menuData,setMenuData]=useState([]);
  const[subMenuData,setSubMenuData]=useState([]);
  const[activeSubMenu,setActiveSubMenu]=useState(null);

  useEffect(() => {
    M.AutoInit();
    axios.get("https://localhost:7179/api/AdminDashboard/get-all-menu")
    .then(response=>{
        setMenuData(response.data);
    }).catch(error=>console.log(error));

    axios.get("https://localhost:7179/api/Submenu/get-all-submenu")
    .then(response=>{
      setSubMenuData(response.data);
    }).catch(error=>console.log(error));
  },[]); 
  
  const navigate = useNavigate();
  const handleLogout=()=>{
  navigate("/Admin");
 }

 const handleSubMainMenuClick=(submenuName)=>{
  setActiveSubMenu(submenuName===activeSubMenu?null:submenuName);
 }
 
  
return (
     
<div >
<div className="AdminDashboard" >
<div class="navbar-fixed hoverable">
    <nav>
      <div class="nav-wrapper  blue darken-3">
        <a href="#" class="brand-logo center" styles="margin-left: 1em;">Admin Portal</a>
        <ul class="right">
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><b>Hello User</b><i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
      </div>
    </nav>
  </div>
    
      
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="/"  onClick={handleLogout}>Logout</a></li>
    </ul>
    <ul id="nav-mobile" class="sidenav sidenav-fixed "  ><i class="material-icons medium" id="school">school</i>
      <li class="bold">
      <a href="#" data-target="slide-out" class="sidenav-trigger" id="dashboard">Dashboard <i class="material-icons">menu</i></a>
      </li>
      

      <ul id="slide-out" class="sidenav">
      
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          
          <li>
           <a class="collapsible-header" id="admin">Admin</a>
            <ul class="collapsible collapsible-accordion">
              {menuData.map((menu)=>(
                <li key={menu.menu}>
                  <button onClick={()=>{
                    if(menu.menu==="Add Student"){
                      handleSubMainMenuClick(menu.menu);
                      }
                      else{
                        navigate(menu.url);
                      }
                    }
                  }>
                    &nbsp;&nbsp;&nbsp;&nbsp;<img src={window.atob(menu.iconUrl)} width="25" height="25" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{menu.menu}</span>
                  </button>
                {menu.menu==="Add Student" && activeSubMenu===menu.menu && (
                  <ul>
                    {subMenuData.map((submenu)=>
                    <li key={submenu.name}><Link to={submenu.url}>{submenu.name}</Link>

                    </li>
                    )}
                  </ul>
                )}
                </li>
              ))}
            </ul>

          </li>
        </ul>
      </li>
    </ul>    
<ul/>
      </ul>
      </div>
  </div>
);
};
export default AdminDashboard;                                                  