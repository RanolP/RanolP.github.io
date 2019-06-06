import { css } from 'linaria';
import React, { FC } from 'react';
import { ReactComponent as SvgLogo } from '../../assets/logo/vectorized.svg';
import { obsiBluePurple, white } from '../../styles/colors';

const Logo = css`
  width: 20vmin;
  height: auto;
  padding-right: 2vmin;
`;

const Wrap = css`
  width: calc(100vw - 1vmin * 2);
  margin-top: 5vmin;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${white()};
`;

const Text = css`
  font-size: 14vmin;
  letter-spacing: 1.5vmin;
  color: transparent;
  background-image: linear-gradient(
    166deg,
    ${obsiBluePurple({ gradientLevel: 10 })} 36%,
    ${obsiBluePurple({ gradientLevel: 0 })} 64%
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

const Highlight = css`
  font-weight: bold;
`;

const LogoType: FC = () => {
  return (
    <div className={Wrap}>
      <SvgLogo className={Logo} />
      <div className={Text}>
        <span className={Highlight}>R</span>anol
        <span className={Highlight}>P</span>
      </div>
    </div>
  );
};

export default LogoType;
