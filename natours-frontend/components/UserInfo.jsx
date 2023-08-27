'use client';
import React from 'react';
import Image from 'next/image';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

function UserInfo(props) {
  const items = [
    {
      key: 'account_settings',
      label: 'Account settings',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <div className='flex h-full items-center cursor-pointer px-[1rem]	hover:bg-grey-tundora-lighter'>
          <div className='text-white-alabaster font-normal uppercase mr-[3rem] '>
            {props.user_name}
          </div>
          <span>
            <Image
              className='clip-path-circle select-none drag-none '
              width={50}
              height={50}
              alt={'Profile pic'}
              src={'/img/no-user-image.gif'}
            />
          </span>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label='Dynamic Actions' items={items}>
        {item => (
          <DropdownItem
            key={item.key}
            className={'bg-white-alabaster text-[2rem] w-[100%] p-[1rem] mt-[0.2rem]'}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserInfo;
