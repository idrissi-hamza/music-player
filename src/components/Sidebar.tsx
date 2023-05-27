import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CiStar, CiHome } from 'react-icons/ci';
import { AiOutlineMenuFold } from 'react-icons/ai';

import { motion } from 'framer-motion';

const links = [
  { name: 'Home', to: '/', icon: CiHome },
  { name: 'Artists', to: '/artists', icon: CiStar },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menu = {
    open: { scale: [1, 0.5, 1], rotate: [180, 90, 0] },
    closed: { scale: [1, 0.5, 1], rotate: [180, 90, 0] },
  };
  const sidebarItem = {
    open: { opacity: 1, x: 0, width: 120, scale: 1 },
    closed: { opacity: 0, x: -40, width: 0, scale: 0.2 },
  };

  return (
    <div
      className={`h-screen flex flex-col z-50 shadow-sm hover:shadow-md shadow-teal-200 hover:shadow-teal-300 pb-6  bg-black transition ease-in-out duration-300 `}
    >
      <motion.div
        animate={isOpen ? 'open' : 'close'}
        variants={menu}
        transition={{ duration: .7, delay: -1 }}
        className="text-gray-400 text-2xl p-3 ml-auto  transition ease-in-out duration-300 cursor-pointer  hover:bg-slate-800h"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AiOutlineMenuFold />
      </motion.div>
      {/* <pre className="text-slate-200">{JSON.stringify(isOpen, null, 2)}</pre> */}
      <div className=" flex flex-col ">
        {links.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={
              'flex flex-row justify-start items-center gap-2   py-4 pl-3 text-gray-400  hover:text-teal-50 transition ease-in-out duration-300  aria-[current=page]:text-teal-500 aria-[current=page]:bg-slate-800  shadow-teal-300 '
            }
          >
            <item.icon className="text-2xl" />

            <motion.span
              animate={isOpen ? 'open' : 'closed'}
              variants={sidebarItem}
              transition={{ duration: .7 }}
              className={`text-sm font-medium `}
            >
              {item.name}
            </motion.span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
