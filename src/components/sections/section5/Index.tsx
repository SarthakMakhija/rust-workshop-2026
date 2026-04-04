import React, { forwardRef } from 'react';
import Page from '../../Page';

const Strings = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <Page number={props.number} ref={ref} className="page-right">
      <h2 className="section-title">4. String, str, &str</h2>
      <div className="content-block">
        One of the most common hurdles for newcomers is understanding the "Three String Types".
      </div>
      <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
        <li><span className="keyword">String</span>: A growable, heap-allocated buffer. Owns its data.</li>
        <li><span className="keyword">str</span>: An immutable sequence of UTF-8 bytes of unknown length.</li>
        <li><span className="keyword">&str</span>: A "string slice". A reference to string data stored elsewhere.</li>
      </ul>
      <div className="code-snippet">
        <pre>
{`let s: String = "Hello".to_string();
let slice: &str = &s; // Borrowing`}
        </pre>
      </div>
    </Page>
  );
});

export default Strings;
