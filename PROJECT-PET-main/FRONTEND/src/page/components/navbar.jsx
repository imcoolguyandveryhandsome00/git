import './navbar.css'
import { Link } from 'react-router-dom'
import { BsCaretDownFill } from "react-icons/bs";
import {  IoPerson, IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { FaBell } from 'react-icons/fa';


function Navbar() {
  return (
    <div className="nav">
      <div className="logo"><Link to='/home'><h1>น้องโมเด็มสุดหล่อ</h1></Link></div>
      <div className="search-box">
      <form className='search'>
        <Link to=''><i><IoSearchOutline /></i></Link>
        <input type='text' placeholder='Search'></input>
      </form>
    </div>
      <ul className="menu-bar">
        <li className="dropdown">
          <span><Link to='#'>SERVICE<BsCaretDownFill /></Link></span>
          <div className="dropdown-content">
            <Link to='/home'><p>Home</p></Link>
            <Link to='/pet'><p>Pet</p></Link>
            <Link to='/status'><p>Status</p></Link>
          </div>

        </li>
        <li className='dropdown'>
          <span><Link to='status'><FaBell style={{ fontSize: '1.5em' }} /></Link></span>
          <div className="dropdown-content">
          <Link to='/notifications'><p>Notification</p></Link>
          </div>
        </li>

        <li className='dropdown'>
  <span><Link to='#'><IoPerson style={{fontSize: '1.5em'}}/></Link></span>
  <div className="dropdown-content profile-dropdown">
      <img
        src="http://localhost:5173/src/assets/Profile.jpg" 
        alt="Profile"
        className="profile-image"
      />
      <div>
        <Link to='/'><p>Edit Profile</p></Link>
        <Link to='/'><p>Log out</p></Link>
      </div>
    </div>
</li>
      </ul>
    </div>
  )
}

export default Navbar
