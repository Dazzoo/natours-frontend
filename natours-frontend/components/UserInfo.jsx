'use client';
import React from 'react';
import Image from 'next/image';
import authApi from '@/api/auth/authApi';
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

function UserInfo({ user_name, user_photo_path }) {
  const router = useRouter();

  const logout = async () => {
    const res = await authApi.logOut();
    if (res === 'success') {
      window.location.reload();
    }
  };

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
          <div className='text-white-alabaster font-normal uppercase mr-[3rem] '>{user_name}</div>
          <span>
            <Image
              className='clip-path-circle select-none drag-none '
              width={50}
              height={50}
              alt={'Profile pic'}
              src={user_photo_path || '/img/no-user-image.gif'}
            />
          </span>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Dynamic Actions'
        items={items}
        className={
          'p-[0.5rem] rounded-[10px] bg-white-alabaster border-2 border-grey-dusty boder-solid'
        }
      >
        {item => (
          <DropdownItem
            key={item.key}
            className={
              'bg-white-alabaster text-[2rem] w-[100%] p-[1rem] [&:not(:first-child)]:mt-[0.5rem] border-white-alabaster'
            }
            onClick={
              item.key === 'logout' ? () => logout() : () => router.push('/account-settings')
            }
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserInfo;
