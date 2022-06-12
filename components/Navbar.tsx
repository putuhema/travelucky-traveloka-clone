import Image from 'next/image'
import {
  MenuIcon,
  DeviceMobileIcon,
  ChevronDownIcon,
  HandIcon,
  BookmarkIcon,
  ClipboardListIcon,
  CashIcon,
  UserCircleIcon,
  ArrowDownIcon,
} from '@heroicons/react/outline'
import logo from '../public/logo.svg'
import rickroll from '../public/rickroll.png'
import { useState } from 'react'

interface NavData {
  size?: number
  icon: JSX.Element
  chevron?: JSX.Element
  title: string
  isDropdown: boolean
  isOpen: boolean
}

interface DropdownProps {
  nav: NavData
  handleOnClickDropdown: (title: string) => void
}

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
]

const Dropdown = ({ nav, handleOnClickDropdown }: DropdownProps) => {
  const { icon, title, size, chevron, isDropdown, isOpen } = nav
  return (
    <div
      onClick={() => handleOnClickDropdown(title)}
      className='flex items-center gap-1 cursor-pointer relative'
    >
      <span className='w-4 h-4 text-blue'>{icon}</span>
      <span className='text-sm'>{title}</span>
      {isDropdown && <span className='w-3 h-2'>{chevron}</span>}
      {isDropdown && (
        <div
          className={`absolute p-2 h-max w-max bg-white rounded-md shadow-sm right-0 top-10 origin-top scale-y-0 transition-all duration-200 
${isOpen && 'scale-y-100'} `}
        >
          <div className='scale-100 relative'>
            <div className='flex items-center '>
              <ArrowDownIcon className='w-4 h-3' />
              <p className='text-sm w-24'>Scan QR Code to download</p>
            </div>
            <Image
              className='mx-auto mt-2'
              src={rickroll}
              width={100}
              height={100}
              alt='rickroll'
            />
          </div>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [navData, setNavData] = useState(navDetails)

  const handleOnClickDropdown = (title: string) => {
    setNavData((prev) =>
      prev.map((p) => ({
        ...p,
        isOpen: title === p.title ? !p.isOpen : p.isOpen,
      }))
    )
  }

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
      <div className='h-[40px] bg-gray'></div>
    </nav>
  )
}

export default Navbar
