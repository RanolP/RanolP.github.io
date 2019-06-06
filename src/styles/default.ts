import { css } from 'linaria';
import { black, white } from './colors';

// tslint:disable-next-line: no-unused-expression
css`
  :global() {
    html {
      background-color: ${white()};
      color: ${black()};
      user-select: none;
    }
  }
`;
