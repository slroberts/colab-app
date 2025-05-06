import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center h-16'>
      <h1 className='text-xl font-bold'>CoLab App</h1>
      <nav className='flex space-x-4'>
        <Link href=''>About</Link>
        <Link href=''>Contact</Link>
      </nav>
    </header>
  );
}
