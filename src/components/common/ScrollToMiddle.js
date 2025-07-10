'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToMiddle() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToMiddle = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const middle = (totalHeight - viewHeight) / 2;

      window.scrollTo({
        top: middle,
        behavior: 'smooth',
      });
    };

    const timeout = setTimeout(scrollToMiddle, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
