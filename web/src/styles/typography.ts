// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'
import { darken, lighten } from 'polished'

// Rubik Bold
import RubikBoldEot from './fonts/Rubik-Bold.eot'
import RubikBoldWoff2 from './fonts/Rubik-Bold.woff2'
import RubikBoldWoff from './fonts/Rubik-Bold.woff'
import RubikBoldOtf from './fonts/Rubik-Bold.otf'

// Suisse Regular
import SuisseIntlRegularEot from './fonts/SuisseIntl-Regular.eot'
import SuisseIntlRegularWoff2 from './fonts/SuisseIntl-Regular.woff2'
import SuisseIntlRegularWoff from './fonts/SuisseIntl-Regular.woff'
import SuisseIntlRegularOtf from './fonts/SuisseIntl-Regular.otf'

// Suisse Mono Regular
import SuisseIntlMonoRegularEot from './fonts/SuisseIntlMono-Regular.eot'
import SuisseIntlMonoRegularWoff2 from './fonts/SuisseIntlMono-Regular.woff2'
import SuisseIntlMonoRegularWoff from './fonts/SuisseIntlMono-Regular.woff'
import SuisseIntlMonoRegularOtf from './fonts/SuisseIntlMono-Regular.otf'

// Suisse Mono Thin
import SuisseIntlMonoThinEot from './fonts/SuisseIntlMono-Thin.eot'
import SuisseIntlMonoThinWoff2 from './fonts/SuisseIntlMono-Thin.woff2'
import SuisseIntlMonoThinWoff from './fonts/SuisseIntlMono-Thin.woff'
import SuisseIntlMonoThinOtf from './fonts/SuisseIntlMono-Thin.otf'

// Suisse Mono Bold
import SuisseIntlMonoBoldEot from './fonts/SuisseIntlMono-Bold.eot'
import SuisseIntlMonoBoldWoff2 from './fonts/SuisseIntlMono-Bold.woff2'
import SuisseIntlMonoBoldWoff from './fonts/SuisseIntlMono-Bold.woff'
import SuisseIntlMonoBoldOtf from './fonts/SuisseIntlMono-Bold.otf'

// ___________________________________________________________________

const Typography = css`
  /* Rubik Bold */
  @font-face {
    font-family: 'Rubik';
    src: url(${RubikBoldEot});
    src: url(${RubikBoldWoff2}) format('woff2'),
      url(${RubikBoldWoff}) format('woff'),
      url(${RubikBoldOtf}) format('opentype'),
      url(${RubikBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Regular */
  @font-face {
    font-family: 'Suisse';
    src: url(${SuisseIntlRegularEot});
    src: url(${SuisseIntlRegularWoff2}) format('woff2'),
      url(${SuisseIntlRegularWoff}) format('woff'),
      url(${SuisseIntlRegularOtf}) format('opentype'),
      url(${SuisseIntlRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Thin */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoThinEot});
    src: url(${SuisseIntlMonoThinWoff2}) format('woff2'),
      url(${SuisseIntlMonoThinWoff}) format('woff'),
      url(${SuisseIntlMonoThinOtf}) format('opentype'),
      url(${SuisseIntlMonoThinEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Regular */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoRegularEot});
    src: url(${SuisseIntlMonoRegularWoff2}) format('woff2'),
      url(${SuisseIntlMonoRegularWoff}) format('woff'),
      url(${SuisseIntlMonoRegularOtf}) format('opentype'),
      url(${SuisseIntlMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Bold */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoBoldEot});
    src: url(${SuisseIntlMonoBoldWoff2}) format('woff2'),
      url(${SuisseIntlMonoBoldWoff}) format('woff'),
      url(${SuisseIntlMonoBoldOtf}) format('opentype'),
      url(${SuisseIntlMonoBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.quinary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.root.font.headingLineHeight};
    /* letter-spacing: 0.5px; */
    margin: 0 0 0.25em;
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xxxl} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.xxxl} * 1.25);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.lg} * 1.15);
    font-weight: 500;

    @media ${theme.mq.tablet} {
      font-size: ${theme.root.font.xl};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.root.font.lg};
    font-weight: 400;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.root.font.lg} * 1.25);
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.root.font.md};
    /* line-height: ${theme.root.font.bodyLineHeight}; */
    margin: 0 0 0.5em;

    @media ${theme.mq.tablet} {
      font-size: ${theme.root.font.lg};
    }
  }

  h4,
  .text--md {
    font-size: ${theme.fontSizes[2]};
    font-weight: 500;
    /* line-height: ${theme.root.font.bodyLineHeight}; */
    text-transform: uppercase;
    margin: 0 0 0.5em;

    @media ${theme.mq.tablet} {
      margin: 0 0 1.5em;
    }
  }

  h5,
  .text--sm {
    font-size: ${theme.fontSizes[1]};
    /* font-weight: 400; */
    line-height: ${theme.root.font.bodyLineHeight};
    text-transform: uppercase;
    margin: 0 0 1em;

    @media ${theme.mq.tablet} {
      margin: 0 0 1.5em;
    }
  }

  small {
    font-size: ${theme.root.font.sm};
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.root.font.baseSize};
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 1.5em;

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[2]};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  .t--small {
    font-size: calc(${theme.fontSizes[1]} / 1.1);
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .t--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 1;

    transition: ${theme.transition.all};

    color: ${theme.colors.primary};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${lighten(0.15, `${theme.colors.primary}`)};
    }
  }

  mark {
    background-color: ${theme.colors.primary};
    padding: ${theme.space[2]} ${theme.space[2]} ${theme.space[0]} ${
  theme.space[2]
};
  }

  .t--link {
    position: relative;

    &::before {
      content: '';
      background: ${theme.colors.secondary};
      width: 0;
      height: 6px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    /* &:hover {
      &::before {
        width: 100%;
      }
    } */

    &:active {
      &::after {
        mix-blend-mode: difference;
      }
    }

    &:hover {
      span {
        margin-left: calc(${theme.space[5]} * 1.5);
      }
    }

    span {
      margin-left: ${theme.space[5]};
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
      }
    }

    h4 {
      display: flex;
    }
  }

  ul {
    margin: 0 0 1.5em 1.15rem;
    list-style-type: disc;

    li {
      list-style-position: outside;
      /* font-size: calc(${theme.root.font.baseSize} / 1); */
      line-height: ${theme.root.font.bodyLineHeight};

      @media ${theme.mq.tablet} {
        /* font-size: calc(${theme.root.font.baseSize} / 1.25); */
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
