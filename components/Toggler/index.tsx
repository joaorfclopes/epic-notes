import React, { useEffect, useState } from 'react'
import Toggle from '../../icons/Toggle'
import styles from '../../styles/Toggler.module.css'

const themeType = {
  dark: 'dark',
  light: 'light'
}

export default function Toggler() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme')
      return val ? JSON.parse(val) : themeType.dark
    }
    return themeType.dark
  })

  const darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    return themeType.dark
  }

  const lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    return themeType.light
  }

  const toggleMode = () => {
    setMode(mode === themeType.light ? darkMode() : lightMode())
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(mode))
      document.documentElement.setAttribute('data-theme', mode)
    }
  }, [mode])

  return (
    <div className={styles.toggler} onClick={toggleMode}>
      <Toggle />
    </div>
  )
}
