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
  tickerHeight: string
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
  borderRadius: string
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
    text: '#f5f5f5',
    background: '#121212',

    primary: '#00ff9b',
    secondary: '#0d0d0d',
    tertiary: '#808080',
    quaternary: '#545454',
    quinary: '#101010',

    black: '#000000',
    white: '#ffffff',
    red: '#FF0000',

    lightgray: '#e1e1e1',
    gray: '#C4C4c4',
    darkgray: '#545454',
    
    moss: '#a8ffdc',
    blue: '#1be8ff',
    pink: '#f700de',
    purple: '#bc58ff',
    orange: '#ff9900',
    yellow: '#e2fb00'
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0',                     // 0
    'var(--space-xxs)',      // 1
    'var(--space-xs)',       // 2
    'var(--space-sm)',       // 3
    'var(--space-md)',       // 4
    'var(--space-lg)',       // 5
    'var(--space-xl)',       // 6
    'var(--space-xxl)',      // 7
    '7rem',                  // 8
    '10rem',                 // 9
    '12rem',                 // 10
    '14rem',                 // 11
    '16rem',                 // 12
    '18rem'                  // 13
  ],

  // Left/Right gutter
  gutter: {
    mobile: 4,
    tablet: 5,
    desktop: 5,
    vertical: [4, 5, 5],
    axis: [4, 5, 5]
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

  maxWidth: '1280px',
  siteWidth: '100%',
  logoWidth: '',
  headerHeight: '74px',
  tickerHeight: '56px',
  iconWidth: '18px',

  // Base
  // ___________________________________________________________________

  grid: {
    gap: '0.5rem'
  },

  transition: {
    all: 'all 0.15s ease-in-out 0s',
    global: '0.15s ease-in-out 0s'
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)'
    }
  },

  border: '1px solid #303030',
  borderRadius: '4px',
  shadow: '2rem 1.5rem 1rem #9D9FA2',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',

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
      bodyLineHeight: 'var(--body-line-height)',

      // Letter spacing
      headingLetterSpacing: 'var(--heading-letter-spacing)',
      baseLetterSpacing: 'var(--body-letter-spacing)',
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
