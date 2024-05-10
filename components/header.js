import Image from 'next/image';

export default function Header() {
  return (
    <>
      <Image
        src='/logo.png'
        alt='A server surrounded by magic sparkles.'
        width='100'
        height='100'
      />
      <h1>NextJs Burger App!</h1>
    </>
  );
}
