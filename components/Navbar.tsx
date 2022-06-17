import Image from 'next/image';
import {
  MenuIcon,
  DeviceMobileIcon,
  ChevronDownIcon,
  HandIcon,
  BookmarkIcon,
  ClipboardListIcon,
  CashIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import logo from '../public/logo.svg';
import { useState } from 'react';
import Dropdown from './Dropdown';

const navDetails = [
  {
    title: 'Download App',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    icon: <DeviceMobileIcon />,
    isOpen: false,
  },
  {
    title: 'Partner with us',
    isDropdown: false,
    chevron: <ChevronDownIcon />,
    icon: <HandIcon />,
    isOpen: false,
  },
  {
    title: 'Saved',
    isDropdown: false,
    chevron: <ChevronDownIcon />,
    icon: <BookmarkIcon />,
    isOpen: false,
  },
  {
    title: 'My Booking',
    isDropdown: false,
    chevron: <ChevronDownIcon />,
    icon: <ClipboardListIcon />,
    isOpen: false,
  },
  {
    title: 'IDR',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    icon: <CashIcon />,
    isOpen: false,
  },
  {
    title: 'Pay',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    icon: <CashIcon />,
    isOpen: false,
  },
  {
    title: 'Log in',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    icon: <UserCircleIcon />,
    isOpen: false,
  },
];

const dropdownDetails = [
  {
    title: 'Transports',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    isOpen: false,
  },
  {
    title: 'Accommodations',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    isOpen: false,
  },
  {
    title: 'Things To do',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    isOpen: false,
  },
  {
    title: 'Bills & Top-ups',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    isOpen: false,
  },
  {
    title: 'Travel Add-ons',
    isDropdown: true,
    chevron: <ChevronDownIcon />,
    isOpen: false,
  },
];

const Navbar = () => {
  const [navData, setNavData] = useState(navDetails);

  const handleOnClickDropdown = (title: string) => {
    setNavData((prev) =>
      prev.map((p) => ({
        ...p,
        isOpen: title === p.title ? !p.isOpen : false,
      }))
    );
  };

  return (
    <nav className='h-[95px] bg-white fixed inset-0'>
      <div className='h-1 bg-blue'></div>
      <div className='flex items-center justify-between h-[55px] px-36 '>
        <div className='flex gap-4'>
          <MenuIcon className='w-5 text-blue stroke-4 cursor-pointer' />
          <Image src={logo} width={120} height={40} alt={logo} />
        </div>
        <div className='flex gap-4'>
          {navData.map((nav) => (
            <Dropdown
              key={nav.title}
              nav={nav}
              handleOnClickDropdown={handleOnClickDropdown}
            />
          ))}
          <button className='bg-blue text-white rounded-lg px-4 py-[6px] font-medium '>
            Register
          </button>
        </div>
      </div>
      <div className='h-[40px] bg-gray flex px-36 font-medium gap-4'>
        {dropdownDetails.map((dropdown) => (
          <Dropdown
            key={dropdown.title}
            nav={dropdown}
            handleOnClickDropdown={handleOnClickDropdown}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
