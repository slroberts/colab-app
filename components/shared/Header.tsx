import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className='flex justify-between items-center h-16'>
      <h1 className='text-xl font-bold'>CoLab</h1>
      <nav className='flex space-x-4'>
        <Button asChild variant={'ghost'}>
          <Link href='#'>About</Link>
        </Button>
        <Button asChild variant={'ghost'}>
          <Link href='#'>Contact</Link>
        </Button>
      </nav>
    </header>
  );
}
