import React from 'react';
import '../stylesheets/navbar.css';
import logo from '../images/logo1.jpg';
import { FaUserAlt } from "react-icons/fa";
import {GoCalendar, GoSettings} from "react-icons/go";
import {AiOutlinePoweroff,AiOutlineMail} from 'react-icons/ai';
import {BsFillBellFill, BsSearch} from 'react-icons/bs';

const NavBar=()=>{
  return(
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <a href="#" className="navbar-brand"><img src={logo} alt="Logo" width="250" height="50"/></a>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
		<div className="navbar-nav">
			<a href="#" className="nav-item nav-link active">Home</a>
			<a href="#" className="nav-item nav-link">Enquiry</a>
			
      <a href="#" className="nav-item nav-link">Reports</a>
			<a href="#" className="nav-item nav-link">Create</a>
      <div class="nav-item dropdown">
				<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Setting</a>
				<div class="dropdown-menu">
					<a href="#" className="dropdown-item">Add User</a>
					<a href="#" className="dropdown-item">Remove User</a>
          <div className="dropdown-divider"></div>
        	<a href="#" className="dropdown-item">Activity</a>
				
				</div>
			</div>

		</div>
		<form className="navbar-form form-inline">
			<div className="input-group search-box">								
				<input type="text" id="search" className="form-control" placeholder="Search by Name" />
				<span className="input-group-addon"><BsSearch /></span>
			</div>
		</form>
		<div className="navbar-nav ml-auto">
			<a href="#" className="nav-item nav-link notifications"><BsFillBellFill /><span class="badge">1</span></a>
			<a href="#" className="nav-item nav-link messages"><AiOutlineMail /><span class="badge">10</span></a>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL95BbJqNhfe6K9_7cQPbC41EURBRnw0oZug&usqp=CAU" class="avatar" alt="Avatar" /> Shreya R <b class="caret"></b></a>
				<div class="dropdown-menu">
					<a href="#" className="dropdown-item"><FaUserAlt /> Profile</a>
					<a href="#" className="dropdown-item"><GoCalendar /> Calendar</a>
					<a href="#" className="dropdown-item"><GoSettings /> Settings</a>
					<div className="dropdown-divider"></div>
					<a href="#" className="dropdown-item"><AiOutlinePoweroff /> Logout</a>
				</div>
			</div>
		</div>
	</div>
</nav>
  );
}

export default NavBar;