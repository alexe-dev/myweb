'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, PlusSmallIcon } from '@heroicons/react/24/solid';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {mounted ? (
        theme === 'dark' ? (
          <MoonIcon className="h-4 w-4 hover:animate-pulse text-dark-orange " />
        ) : (
          <SunIcon className="h-4 w-4 hover:animate-pulse " />
        )
      ) : (
        <PlusSmallIcon className="h-4 w-4 animate-ping " />
      )}
    </button>
  );
};

export default DarkModeButton;
