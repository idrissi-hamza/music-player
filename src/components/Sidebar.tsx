import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CiStar, CiHome } from 'react-icons/ci';
import { MdMenuOpen } from 'react-icons/md';


const links = [
  { name: 'Home', to: '/', icon: CiHome },
  { name: 'Artists', to: '/artists', icon: CiStar },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen flex flex-col z-50 shadow-sm hover:shadow-md shadow-teal-200 hover:shadow-teal-300 pb-6  bg-black transition ease-in-out duration-300 `}
    >
      <div
        className="text-gray-400 text-2xl p-3 ml-auto hover:text-teal-500 transition ease-in-out duration-300 cursor-pointer rotate-180 hover:bg-slate-800"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MdMenuOpen
        
          className={isOpen && 'rotate-180'}
        />
      </div>
      {/* <pre className="text-slate-200">{JSON.stringify(isOpen, null, 2)}</pre> */}
      <div className=" flex flex-col ">
        {links.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={
              'flex flex-row justify-start items-center gap-2   py-4 pl-3 text-gray-400  hover:text-teal-700 transition ease-in-out duration-300  aria-[current=page]:text-teal-500 aria-[current=page]:bg-slate-800   '
            }
          >
            <item.icon className="text-2xl" />

            <span className={`text-sm font-medium min-w-[180px] ${!isOpen && 'hidden'}`}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
