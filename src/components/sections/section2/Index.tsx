import React, { forwardRef } from 'react';
import Page from '../../Page';

const BasicCache = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <Page number={props.number} ref={ref} className="page-left">
      <h2 className="section-title">1. Basic Cache</h2>
      <div className="content-block">
        Our journey begins with a simple <span className="keyword">Key-Value</span> store. In Rust, we need to be explicit about ownership.
      </div>
      <div className="content-block">
        For our first iteration, we will use <span className="keyword">String</span> for both keys and values.
      </div>
      <div className="code-snippet">
        <pre>
{`use std::collections::HashMap;

struct Cache {
    data: HashMap<String, String>,
}`}
        </pre>
      </div>
      <div className="content-block">
        This approach is straightforward but involves heap allocations for every operation.
      </div>
    </Page>
  );
});

export default BasicCache;
