'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';

interface TransitionLinkProps {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handelClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700"
      onClick={handelClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
