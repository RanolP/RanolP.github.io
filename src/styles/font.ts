import { css } from 'linaria';

export const Family = {
  monospace: `'Iosevka', monospace`,
  sansSerif: `'Raleway', 'Noto Sans KR', sans-serif`,
  serif: `serif`
};

function makeSrc(name: string) {
  return `
    url(/assets/fonts/iosevka/woff2/${name}.woff2) format('woff2'),
    url(/assets/fonts/iosevka/woff/${name}.woff) format('woff'),
    url(/assets/fonts/iosevka/ttf/${name}.ttf) format('ttf')
  `;
}

// tslint:disable-next-line: no-unused-expression
css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,200i,400,400i,700,700i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,700&display=swap&subset=korean');

  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('light')};
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('light-italic')};
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('regular')};
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('regular-italic')};
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('bold')};
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Iosevka';
    src: ${makeSrc('bold-italic')};
    font-weight: 700;
    font-style: italic;
  }

  :global() {
    html {
      font-family: ${Family.sansSerif};
    }

    code {
      font-family: ${Family.monospace};
    }
  }
`;
