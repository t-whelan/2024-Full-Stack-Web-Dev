import React from 'react';

const NavBar = () => {
  return (
    <div className='bg-blue-400 py-5'>
    <nav>
      <ul className='flex justify-between'>
        <li className='text-white font-semibold text-2xl'>
            <a href ='#about'>About</a>
        </li>
        <li className='text-white font-semibold text-2xl'>
          <a href="#work">Work</a>
        </li>
        <li className='text-white font-semibold text-2xl'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
