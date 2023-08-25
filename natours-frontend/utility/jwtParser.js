import { cookies } from 'next/headers';

export default function () {
  return cookies().get('jwt').value;
}
