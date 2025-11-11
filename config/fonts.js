// Font Configuration
// Change the 'currentFont' value below to switch between available fonts
// Available options: 'inter', 'lato', 'poppins', 'manrope', 'spaceGrotesk'

export const fonts = {
  inter: {
    name: 'Inter',
    import: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');",
    fontFamily: ['Inter', 'system-ui', 'sans-serif'],
  },
  lato: {
    name: 'Lato',
    import: "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');",
    fontFamily: ['Lato', 'sans-serif'],
  },
  poppins: {
    name: 'Poppins',
    import: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');",
    fontFamily: ['Poppins', 'sans-serif'],
  },
  manrope: {
    name: 'Manrope',
    import: "@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');",
    fontFamily: ['Manrope', 'sans-serif'],
  },
  spaceGrotesk: {
    name: 'Space Grotesk',
    import: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');",
    fontFamily: ['Space Grotesk', 'sans-serif'],
  },
}

// ⚙️ CHANGE THIS VALUE TO SWITCH FONTS ⚙️
export const currentFont = 'poppins'

export const getCurrentFont = () => {
  return fonts[currentFont]
}
