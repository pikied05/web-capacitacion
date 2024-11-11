/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col justify-center items-end px-12 py-4 w-full bg-slate-500 max-w-[1392px] min-h-[86px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/d4b46190d54d65d969e54b75c18a6335685a9f6f204a83d1983e587bffb6f7c7?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&" alt="Header icon 1" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[54px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/252dc4c4c2f04a6c8f8d7b124c5fb6f6/85c1cdd50356f71c6cc6a6dc67ed7186feb82c6f5e06e8afa76efc2efc5c8e22?apiKey=252dc4c4c2f04a6c8f8d7b124c5fb6f6&" alt="Header icon 2" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[54px]" />
      </div>
    </header>
  );
};

export default Header;