import React, { forwardRef } from 'react';
import Page from '../../Page';

export const Section5Cover = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <div className="page cover-page" data-density="hard" ref={ref}>
      <div className="page-content">
        <h1 className="cover-title">STAGE 5</h1>
        <div className="cover-subtitle">Coming Soon</div>
      </div>
      <div className="page-number">{props.number}</div>
    </div>
  );
});
