# Font Configuration Guide

This project has a flexible font system that allows you to easily switch between different fonts.

## Quick Start

### Option 1: Simple Method (Recommended)
1. Open `config/fonts.js`
2. Change the `currentFont` value to your desired font:
   ```javascript
   export const currentFont = 'lato'  // or 'inter', 'poppins', 'manrope', 'spaceGrotesk'
   ```
3. Open `app/globals.css`
4. Update the `@import` statement at the top to match your font choice
5. Update the `font-family` in the `@layer base` section

### Option 2: Using the Helper Script
Run the helper script (if available) to automatically update all files.

## Available Fonts

### Inter (Default)
- **Key**: `'inter'`
- **Best for**: Modern, clean SaaS applications
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Lato
- **Key**: `'lato'`
- **Best for**: Friendly, approachable designs
- **Weights**: 300, 400, 700, 900

### Poppins
- **Key**: `'poppins'`
- **Best for**: Geometric, modern look
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Manrope
- **Key**: `'manrope'`
- **Best for**: Rounded, friendly aesthetic
- **Weights**: 300, 400, 500, 600, 700, 800

### Space Grotesk
- **Key**: `'spaceGrotesk'`
- **Best for**: Tech-forward, contemporary feel
- **Weights**: 300, 400, 500, 600, 700

## Step-by-Step: Switching to Lato

1. **Update `config/fonts.js`**:
   ```javascript
   export const currentFont = 'lato'
   ```

2. **Update `app/globals.css`**:
   - Replace the `@import` with:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
     ```
   - Update the `font-family` in `@layer base`:
     ```css
     font-family: 'Lato', sans-serif;
     ```

3. **Rebuild the project**:
   ```bash
   npm run build
   ```

## Adding a New Font

To add a new font:

1. **Add to `config/fonts.js`**:
   ```javascript
   yourFont: {
     name: 'Your Font Name',
     import: "@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500&display=swap');",
     fontFamily: ['Your Font', 'sans-serif'],
   },
   ```

2. **Update `app/globals.css`** with the new font import and font-family

3. **Update `tailwind.config.js`** will automatically pick it up from the config

## Notes

- The Tailwind config automatically uses the font from `config/fonts.js`
- You need to manually update `globals.css` for the font import and base font-family
- After changing fonts, restart your dev server or rebuild
- All components will automatically use the new font through Tailwind's `font-sans` class

