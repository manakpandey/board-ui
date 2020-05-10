import React from 'react';

export default function Block({ children }: { children: any }) {
  return (
    <div className='build_ui__block'>
      {children}
    </div>
  );
}

export function SmallBlock({ children }: { children: any }) {
  return (
    <div className='build_ui__block build_ui__block_small'>
      {children}
    </div>
  );
}

export function FullLayout({ children }: { children: any }) {
  return (
    <div className='build_ui__fullscreen'>
      {children}
    </div>
  );
}

export function BgLayout({ children }: { children: any }) {
  return (
    <div className='build_ui__bg'>
      {children}
    </div>
  );
}
