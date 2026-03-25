import { createContext, useContext, useState } from 'react'

export const themes = {
  dark: {
    name: 'Dark',
    bg: '#080810',
    surface: 'rgba(255,255,255,0.03)',
    surfaceHover: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.07)',
    borderHover: 'rgba(139,92,246,0.4)',
    text: '#f1f5f9',
    textMuted: 'rgba(255,255,255,0.45)',
    textFaint: 'rgba(255,255,255,0.2)',
    accent: '#8b5cf6',
    accentText: '#c4b5fd',
    accentBg: 'rgba(139,92,246,0.12)',
    sidebarBg: 'rgba(255,255,255,0.02)',
    sidebarBorder: 'rgba(255,255,255,0.06)',
    inputBg: 'rgba(255,255,255,0.05)',
    inputBorder: 'rgba(255,255,255,0.1)',
    scrollbar: 'rgba(255,255,255,0.1)',
    gradientMesh: `radial-gradient(ellipse at 20% 20%, rgba(139,92,246,0.12) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)`,
  },
  neon: {
    name: 'Neon',
    bg: '#00040f',
    surface: 'rgba(0,255,180,0.03)',
    surfaceHover: 'rgba(0,255,180,0.07)',
    border: 'rgba(0,255,180,0.1)',
    borderHover: 'rgba(0,255,180,0.5)',
    text: '#e0fff8',
    textMuted: 'rgba(180,255,230,0.55)',
    textFaint: 'rgba(180,255,230,0.25)',
    accent: '#00ffb4',
    accentText: '#00ffb4',
    accentBg: 'rgba(0,255,180,0.1)',
    sidebarBg: 'rgba(0,255,180,0.02)',
    sidebarBorder: 'rgba(0,255,180,0.08)',
    inputBg: 'rgba(0,255,180,0.04)',
    inputBorder: 'rgba(0,255,180,0.12)',
    scrollbar: 'rgba(0,255,180,0.15)',
    gradientMesh: `radial-gradient(ellipse at 10% 50%, rgba(0,255,180,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 20%, rgba(0,180,255,0.06) 0%, transparent 50%)`,
  },
  solarized: {
    name: 'Solarized',
    bg: '#fdf6e3',
    surface: 'rgba(0,0,0,0.04)',
    surfaceHover: 'rgba(0,0,0,0.07)',
    border: 'rgba(0,0,0,0.08)',
    borderHover: 'rgba(38,139,210,0.5)',
    text: '#073642',
    textMuted: '#586e75',
    textFaint: '#93a1a1',
    accent: '#268bd2',
    accentText: '#268bd2',
    accentBg: 'rgba(38,139,210,0.1)',
    sidebarBg: '#eee8d5',
    sidebarBorder: 'rgba(0,0,0,0.08)',
    inputBg: 'rgba(0,0,0,0.04)',
    inputBorder: 'rgba(0,0,0,0.12)',
    scrollbar: 'rgba(0,0,0,0.15)',
    gradientMesh: `radial-gradient(ellipse at 20% 20%, rgba(38,139,210,0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(42,161,152,0.05) 0%, transparent 50%)`,
  },
}

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('dark')
  const theme = themes[themeName]
  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}