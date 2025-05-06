import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href='/auth'>
        <Button className='w-full cursor-pointer mt-4' size='lg'>
          Get Started
        </Button>
      </Link>
    </div>
  );
}
