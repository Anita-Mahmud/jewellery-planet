import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const Nav = () => {
   
    return (
        <div>
            <div className="navbar  bg-sky-100 lg:px-36">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/categories' className="justify-between">
            Category
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-sky-100">
            <li><Link to='/diamond'>Diamond</Link></li>
            <li><Link to='/platinum'>Platinum</Link></li>
            <li><Link to='/gold'>Gold</Link></li>
            <li><Link to='/silver'>Silver</Link></li>
            
          </ul>
        </li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
       
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <Link to='/' >
        <img src={logo} className='w-16 lg:w-20 mr-10' alt="logo"></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
      
        < Link to='/categories'>
          Category
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2  bg-sky-100 z-50">
        <li><Link to='/diamond'>Diamond</Link></li>
            <li><Link to='/platinum'>Platinum</Link></li>
            <li><Link to='/gold'>Gold</Link></li>
            <li><Link to='/silver'>Silver</Link></li>
        </ul>
      </li>
      <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
       
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn bg-sky-700 rounded-full text-white border-none">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Nav;