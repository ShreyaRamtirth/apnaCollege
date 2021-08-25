import React from 'react';
import '../stylesheets/navbar.css';
import logo from '../images/logo1.jpg';
import { FaUserAlt } from "react-icons/fa";
import {GoCalendar, GoSettings} from "react-icons/go";
import {AiOutlinePoweroff,AiOutlineMail} from 'react-icons/ai';
import {BsFillBellFill, BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar=()=>{
  return(
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <Link to="#" className="navbar-brand"><img src={logo} alt="Logo" width="250" height="50"/></Link>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
		<div className="navbar-nav">
			<Link to="/Home" className="nav-item nav-link active">Home</Link>
			<Link to="/Home/Enquiry" className="nav-item nav-link">Enquiry</Link>
			
      <Link to="#" className="nav-item nav-link">Reports</Link>
			<Link to="#" className="nav-item nav-link">Create</Link>
      <div class="nav-item dropdown">
				<Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Setting</Link>
				<div class="dropdown-menu">
					<Link to="#" className="dropdown-item">Add User</Link>
					<Link to="#" className="dropdown-item">Remove User</Link>
          <div className="dropdown-divider"></div>
        	<Link to="#" className="dropdown-item">Activity</Link>
				
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
			<Link to="#" className="nav-item nav-link notifications"><BsFillBellFill /><span class="badge">1</span></Link>
			<Link to="#" className="nav-item nav-link messages"><AiOutlineMail /><span class="badge">10</span></Link>
			<div class="nav-item dropdown">
				<Link to="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL95BbJqNhfe6K9_7cQPbC41EURBRnw0oZug&usqp=CAU" class="avatar" alt="Avatar" /> Shreya R <b class="caret"></b></Link>
				<div class="dropdown-menu">
					<Link to="#" className="dropdown-item"><FaUserAlt /> Profile</Link>
					<Link to="#" className="dropdown-item"><GoCalendar /> Calendar</Link>
					<Link to="#" className="dropdown-item"><GoSettings /> Settings</Link>
					<div className="dropdown-divider"></div>
					<Link to="#" className="dropdown-item"><AiOutlinePoweroff /> Logout</Link>
				</div>
			</div>
		</div>
	</div>
</nav>
  );
}

export default NavBar;