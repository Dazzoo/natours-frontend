import { cookies } from 'next/headers';

export default function () {
  console.log(cookies().get('jwt'))
  return cookies().get('jwt')?.value;
}
