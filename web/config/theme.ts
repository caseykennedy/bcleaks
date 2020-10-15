// Theme / Design system:

// Types
// ___________________________________________________________________

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  strokeWidth: string
  maxWidth: string
  siteWidth: string
  logoWidth: string
  headerHeight: string
  iconWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: string
    }
  }
}

// Begin theme
// ___________________________________________________________________

const breakpoints: string[] = ['600px', '1024px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: '#ffffff',
    background: '#171717',

    primary: '#00ff9b',
    secondary: '#0d0d0d',
    tertiary: '#808080',
    quaternary: '#545454',
    quinary: '#121212',

    black: '#000000',
    white: '#ffffff',
    red: '#FF0000'
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxs)', // 1
    'var(--space-xs)', // 2
    'var(--space-sm)', // 3
    'var(--space-md)', // 4
    'var(--space-lg)', // 5
    'var(--space-xl)', // 6
    'var(--space-xxl)', // 7
    '6rem', // 8
    '10rem', // 9
    '12rem', // 10
    '14rem', // 11
    '16rem', // 12
    '18rem' // 13
  ],

  // Left/Right gutter
  gutter: {
    x: [5, 6],
    y: [7, 8]
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"SuisseMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    heading: `"SuisseMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    sans: `"Suisse", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    display: `"Rubik", Arial`
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)' // 7
  ],

  Heading: {},

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700
  },

  strokeWidth: '2px',

  maxWidth: '1440px',
  siteWidth: '100vw',
  logoWidth: '',
  headerHeight: '88px',
  iconWidth: '18px',

  // Base
  // ___________________________________________________________________

  grid: {
    gap: '0.5rem'
  },

  transition: {
    all: 'all 0.222s ease-in-out',
    global: '0.222s ease-in-out'
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)'
    }
  },

  border: '1px solid #545454',
  shadow: '2rem 1.5rem 1rem #8a8a7c',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)'
    }
  }
}

export default theme
