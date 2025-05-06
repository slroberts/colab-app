'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
      <p className='text-sm'>© {currentYear} CoLab App.</p>
    </footer>
  );
}
