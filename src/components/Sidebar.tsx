import { NavLink } from 'react-router-dom';
import { CiStar, CiHome } from 'react-icons/ci';

const links = [
  { name: 'Home', to: '/', icon: CiHome },
  { name: 'Artists', to: '/artists', icon: CiStar },
];

const Sidebar = () => (
  <div className="h-screen flex flex-col min-w-[240px] py-10  bg-black  ">
    <div className="mt-4 flex flex-col ">
      {links.map((item, i) => (
        <NavLink
          key={i}
          to={item.to}
          className={
            'flex flex-row justify-start items-center gap-2   py-4 pl-3 text-gray-400  hover:text-teal-800 transition ease-in-out duration-300  aria-[current=page]:text-teal-500 aria-[current=page]:bg-slate-800   '
          }
        >
          <item.icon className="text-2xl" />

          <span className='text-sm font-medium'>{item.name}</span>
        </NavLink>
      ))}
    </div>
  </div>
);

export default Sidebar;
