import { ArrowDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';

import rickroll from '../public/rickroll.png';

interface NavData {
  size?: number;
  icon?: JSX.Element;
  chevron?: JSX.Element;
  title: string;
  isDropdown: boolean;
  isOpen: boolean;
}

interface DropdownProps {
  nav: NavData;
  handleOnClickDropdown: (title: string) => void;
}

const Dropdown = ({ nav, handleOnClickDropdown }: DropdownProps) => {
  const { icon, title, size, chevron, isDropdown, isOpen } = nav;
  return (
    <div
      onClick={() => handleOnClickDropdown(title)}
      className='flex items-center gap-1 cursor-pointer relative'
    >
      {icon && <span className='w-4 h-4 text-blue'>{icon}</span>}
      <span className='text-sm'>{title}</span>
      {isDropdown && <span className='w-3 h-2'>{chevron}</span>}
      {isDropdown && (
        <div
          className={`absolute p-2 h-max w-max bg-white rounded-md shadow-sm right-0 top-10 origin-top scale-y-0 transition-all duration-200 
${isOpen && 'scale-y-100'} `}
        >
          <div className='scale-100 relative'>
            <div className='flex items-center relative'>
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
  );
};

export default Dropdown;
