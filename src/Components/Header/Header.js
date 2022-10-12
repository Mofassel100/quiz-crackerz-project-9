import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div >
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl text-blue-700"> Education Learning</Link>
        </div>
        <div className=" text-green-600 ">
          <Link className='mx-3 text-xl' to="home">Home</Link>
          <Link to={'linechart'}>LinChart</Link>
          <Link className='mx-3 text-xl' to={'blog'}>Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;