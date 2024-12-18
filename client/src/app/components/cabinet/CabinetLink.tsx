'use client';

import { usePathname } from 'next/navigation';
import CategorySvg from '@components/svgs/CategorySvg';
import FollowSvg from '@components/svgs/FollowSvg';
import Link from 'next/link';

type LinkProps = {
  link: 'category' | 'follow';
};

const CabinetLink = ({ link }: LinkProps) => {
  const pathname = usePathname();

  return link === 'category' ? (
    <Link
      href="/categories"
      className={`funch-desktop:flex hover:bg-border-neutral-weak funch-desktop:pl-[12px] funch-desktop:h-12 mx-auto mt-4 block h-14 w-4/5 items-center rounded-md ${
        pathname === '/categories' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
      }`}
    >
      <div
        className={`funch-desktop:mx-0 mx-auto flex w-12 justify-center ${
          pathname === '/categories' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
        }`}
      >
        <CategorySvg />
      </div>
      <span
        className={`funch-desktop:mt-0 funch-desktop:h-12 funch-desktop:flex funch-desktop:items-center funch-desktop:funch-bold16 funch-desktop:px-2 funch-medium14 mt-1 block text-center ${
          pathname === '/categories' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
        }`}
      >
        카테고리
      </span>
    </Link>
  ) : (
    <Link
      href="/following"
      className={`funch-desktop:flex hover:bg-border-neutral-weak funch-desktop:pl-[12px] funch-desktop:h-12 funch-desktop:mt-2 mx-auto mt-4 block h-14 w-4/5 items-center rounded-md ${
        pathname === '/following' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
      }`}
    >
      <div
        className={`funch-desktop:mx-0 mx-auto flex w-12 items-center justify-center pt-[2px] ${
          pathname === '/following' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
        }`}
      >
        <FollowSvg />
      </div>
      <span
        className={`funch-desktop:mt-0 funch-desktop:h-9 funch-desktop:flex funch-desktop:items-center funch-desktop:funch-bold16 funch-desktop:px-2 funch-medium14 mt-1 block text-center ${
          pathname === '/following' ? 'text-content-brand-strong' : 'text-content-neutral-primary'
        }`}
      >
        팔로잉
      </span>
    </Link>
  );
};

export default CabinetLink;
