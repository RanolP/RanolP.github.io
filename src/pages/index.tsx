import { styled } from 'linaria/react';
import React, { FC } from 'react';
import LogoType from '../components/personal/LogoType';
import Motto from '../components/personal/Motto';

const Description = styled.div`
  width: 100%;
  text-align: center;
  font-size: 4vmin;
`;

const App: FC = () => {
  return (
    <>
      <LogoType />
      <Motto />
      <Description>
        게으르지만 매일 나아가고자 하는 Ranol☆P입니다.
        <br />
        공식 발음은 <code>/ra-nol-pee/</code>이며, 닉네임 마지막에 붙은 P는
        <br />
        Publisher, Producer, Programmer, Presenter 등을 나타냅니다.
      </Description>
    </>
  );
};

export default App;
