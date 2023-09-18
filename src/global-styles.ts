import { createGlobalStyle } from 'styled-components'

import BebasNeueRegular from '@assets/fonts/BebasNeueRegular.ttf'
import PTSansBold from '@assets/fonts/PTSansBold.ttf'
import PTSansRegular from '@assets/fonts/PTSansRegular.ttf'

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:BebasNeueRegular;
  src: url(${BebasNeueRegular});
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: PTSansBold;
  src: url(${PTSansBold});
  font-weight: 700;
  font-style: normal
}

@font-face {
  font-family: PTSansRegular;
  src: url(${PTSansRegular});
  font-weight: 400;
  font-style: normal
}

:root {
    --bg: #F4F5F9;
    --text: #42567A;
    --year: #3877EE;
    --pagination: #adb5c6;
    --iris: #5D5FEF;
    --fuschia: #EF5DA8;
  }

html,
  body {
    z-index: -5;
    margin: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: var(--text);
    background: var(--bg);
    font-family: 'PTSansRegular', sans-serif;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    line-height: 120%;
    overflow: hidden;
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--text);
  }
}
`
