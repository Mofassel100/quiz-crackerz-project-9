import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
               <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Education Learning</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a href='home'>Home</a></li>
     
    
      <li><a href='statistic'>Statistic</a></li>
      <li><a href='blog'>Blog</a></li>
    </ul>
   
  </div>
 
</div>
        </div>
    );
};

export default Header;