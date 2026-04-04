import React, { forwardRef } from 'react';

interface PageProps {
  children: React.ReactNode;
  number: number;
  className?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`page ${props.className || ''}`} ref={ref} data-density="soft">
      <div className="page-content">
        {props.children}
        <div className="page-number">{props.number}</div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
