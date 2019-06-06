import { css } from 'linaria';
import React, { FC } from 'react';

const Wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8vmin;
`;

const Text = css`
  font-size: 6vmin;
  font-weight: lighter;
  font-style: italic;
`;

const Highlight = css`
  font-weight: normal;
  text-decoration: underline;
  text-decoration-color: hsl(15, 100%, 77.5%);
`;

const Motto: FC = () => (
  <div className={Wrap}>
    <span className={Text}>
      <span className={Highlight}>Lazy</span>, but get{' '}
      <span className={Highlight}>Better</span>
    </span>
  </div>
);

export default Motto;
