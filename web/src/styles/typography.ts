// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
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
    color: ${theme.colors.text};

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
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    margin: 0 0 ${theme.space[3]};
    transition: ${theme.transition.all};

    text-transform: capitalize;
  }

  .text--xxxl {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[7]} / 1);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1.25);
      line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h2,
  .text--xl {
    font-size: calc(${theme.fontSizes[4]} / 1.15);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]} / 1.25);
      line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[5]};
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]} / 1.25);
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[2]} / 1.25);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]});
    }
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p,
  .text--base {
    color: ${theme.colors.lightgray};
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]} * 1.25);
    }

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        text-decoration: none;
        color: ${theme.colors.primary};
      }
    }

    strong {
      color: ${theme.colors.white};
    }
  }

  strong {
    font-weight: 600;
  }

  .text--small {
    font-size: calc(${theme.fontSizes[0]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
    }
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

  .text--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text--underline {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    position: relative;

    transition: ${theme.transition.all};

    color: ${theme.colors.text};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${darken(0.15, theme.colors.white)};
    }
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    color: inherit;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  ul {
    margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    /* list-style-position: inside; */
    list-style-type: square;

    @media ${theme.mq.tablet} {
      margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    }

    li {
      color: ${darken(0.15, theme.colors.white)};
      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
        color: ${theme.colors.primary};

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.primary};
        }
      }

      strong {
        color: ${theme.colors.white};
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
