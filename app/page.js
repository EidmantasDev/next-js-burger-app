import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src='/logo.png'
        alt='A server surrounded by magic sparkles.'
        width='100'
        height='100'
      />
      <h1>NextJs Burger App!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
