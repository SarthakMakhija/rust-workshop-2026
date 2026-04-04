import React, { forwardRef } from 'react';
import Page from '../../Page';

const StructsReferences = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <Page number={props.number} ref={ref} className="page-left">
      <h2 className="section-title">3. Structs & References</h2>
      <div className="content-block">
        Rust's <span className="keyword">structs</span> are the building blocks of data organization. Unlike C++, they don't have hidden overhead unless explicitly requested.
      </div>
      <div className="content-block">
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>The Ownership Flow</h3>
        <p>
          When we pass data into a Hashmap, we are <span className="keyword">transferring ownership</span>. The Cache struct now "owns" the memory allocated for the strings.
        </p>
      </div>
      <div className="content-block" style={{ fontStyle: 'italic', borderLeft: '2px solid #ccc', paddingLeft: '1rem' }}>
        "Ownership is the most unique feature of Rust... It enables memory safety without a garbage collector."
      </div>
    </Page>
  );
});

export default StructsReferences;
