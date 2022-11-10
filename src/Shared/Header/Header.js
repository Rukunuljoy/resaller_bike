import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(err => console.log(err))
  }

const menuItem = <>
    <li className='font-semibold'><Link to="/">Home</Link></li>
    {
      user?.email?
      <>
        <li className='font-semibold'><Link to="/reviews">My Reviews</Link></li>
        <li className='font-semibold'><Link to="/addServices">Services</Link></li>
        <li className='font-semibold'><Link to="/addService">Add Services</Link></li>
        <li className='font-semibold'>
          <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
          </li>
      </>
      : 
      <li className='font-semibold'><Link to="/login">Login</Link></li>}
    </>

return (
<div className="navbar h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Food Services</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-warning">Order Now</button>
  </div>
  <div>
  <div className="form-control ml-5">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
  </div>
</div>
    );
};

export default Header;