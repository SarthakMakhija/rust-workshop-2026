import React, { forwardRef } from 'react';
import Page from '../../Page';

const Operations = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
  return (
    <Page number={props.number} ref={ref} className="page-right">
      <h2 className="section-title">2. Get & Put Operations</h2>
      <div className="content-block">
        To interact with our cache, we need two fundamental operations: <span className="keyword">put</span> and <span className="keyword">get</span>.
      </div>
      <div className="code-snippet">
        <pre style={{ fontSize: '0.8rem' }}>
{`impl Cache {
    fn new() -> Self {
        Cache { data: HashMap::new() }
    }

    fn put(&mut self, key: String, value: String) {
        self.data.insert(key, value);
    }

    fn get(&self, key: &str) -> Option<&String> {
        self.data.get(key)
    }
}`}
        </pre>
      </div>
      <div className="content-block">
        Notice that <span className="keyword">get</span> takes a reference <span className="keyword">&str</span> to avoid taking ownership of the search key.
      </div>
    </Page>
  );
});

export default Operations;
