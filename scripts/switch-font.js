#!/usr/bin/env node

/**
 * Font Switcher Script
 * Usage: node scripts/switch-font.js [font-name]
 * Example: node scripts/switch-font.js lato
 */

const fs = require('fs')
const path = require('path')

const fonts = {
  inter: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  lato: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');",
    fontFamily: "'Lato', sans-serif",
  },
  poppins: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');",
    fontFamily: "'Poppins', sans-serif",
  },
  manrope: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');",
    fontFamily: "'Manrope', sans-serif",
  },
  spaceGrotesk: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');",
    fontFamily: "'Space Grotesk', sans-serif",
  },
}

const fontName = process.argv[2]?.toLowerCase()

if (!fontName || !fonts[fontName]) {
  console.log('❌ Invalid font name!')
  console.log('\nAvailable fonts:')
  Object.keys(fonts).forEach((key) => {
    console.log(`  - ${key}`)
  })
  console.log('\nUsage: node scripts/switch-font.js [font-name]')
  console.log('Example: node scripts/switch-font.js lato')
  process.exit(1)
}

const selectedFont = fonts[fontName]

// Update config/fonts.js
const configPath = path.join(__dirname, '../config/fonts.js')
let configContent = fs.readFileSync(configPath, 'utf8')
configContent = configContent.replace(
  /export const currentFont = ['"](.*?)['"]/,
  `export const currentFont = '${fontName}'`
)
fs.writeFileSync(configPath, configContent)

// Update app/globals.css
const globalsPath = path.join(__dirname, '../app/globals.css')
let globalsContent = fs.readFileSync(globalsPath, 'utf8')

// Update @import
globalsContent = globalsContent.replace(
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=.*?&display=swap'\);/,
  selectedFont.import
)

// Update font-family in @layer base
globalsContent = globalsContent.replace(
  /font-family: ['"].*?['"],.*?;/,
  `font-family: ${selectedFont.fontFamily};`
)

fs.writeFileSync(globalsPath, globalsContent)

console.log(`✅ Successfully switched to ${fontName}!`)
console.log(`\n📝 Updated files:`)
console.log(`   - config/fonts.js`)
console.log(`   - app/globals.css`)
console.log(`\n🔄 Please restart your dev server or rebuild the project.`)

