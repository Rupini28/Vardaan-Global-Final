const theme = {
  fonts: {
    family: {
      primary: "'Segoe UI', 'Roboto', Arial, sans-serif",
      heading: "'Segoe UI', 'Roboto', Arial, sans-serif",
    },
    size: {
      h1: '3rem',
      h2: '2rem',
      h3: '1.25rem',
      h4: '1.15rem',
      body: '1.08rem',
      small: '0.95rem',
    },
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  colors: {
    // Main brand colors
    primary: '#1a237e', // Deep blue
    secondary: '#1976d2', // Medium blue
    accent: '#e53935', // Red accent
    // Light and mid blues
    lightBlue: '#e3edfa', // Light blue background
    midBlue: '#6ea8fe', // Mid blue (portfolio alt)
    // Backgrounds and cards
    white: '#fff',
    black: '#222',
    gray: '#374151',
    bg: '#f8fafc', // Main app background
    card: '#fff',
    cardAlt: '#e3edfa',
    border: '#e3edfa',
    // Shadows
    shadow: 'rgba(60, 100, 180, 0.08)',
    // Button and icon colors
    buttonText: '#fff',
    buttonOutline: '#e53935',
    icon: '#1a237e',
    iconAlt: '#fff',
    // Additional colors from Home.css
    heroBorder: '#1a237e', // Hero section border
    heroSubtext: '#1976d2',
    aboutText: '#333',
    aboutShadow: 'rgba(60, 100, 180, 0.08)',
    portfolioEven: '#6ea8fe',
    portfolioOdd: '#1a237e',
    portfolioHover: '#1976d2',
    portfolioBorder: '#e3edfa',
    portfolioHeaderBg: '#1a237e',
    portfolioHeaderText: '#fff',
    // For gradients (if needed)
    gradientLight: '#e3edfa',
    gradientMid: '#b6d0f7',
    gradientDark: '#4f8ef7',
  },
  transitions: {
    base: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default theme; 