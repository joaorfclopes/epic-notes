import React, { useEffect, useState } from 'react'
import Logo from '../../icons/Logo'
import Toggle from '../../icons/Toggle'
import styles from '../../styles/Navbar.module.css'
import { Theme } from '../../utils/types'

export default function Navbar() {
  const theme: Theme = {
    dark: 'dark',
    light: 'light'
  }

  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme')
      return val ? JSON.parse(val) : theme.dark
    }
    return theme.dark
  })

  const darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    return theme.dark
  }

  const lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    return theme.light
  }

  const toggleMode = () => {
    setMode(mode === theme.light ? darkMode() : lightMode())
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(mode))
      document.documentElement.setAttribute('data-theme', mode)
    }
  }, [mode])

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.element}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.app_name}>Epic Notes</div>
        </div>
        <div className={styles.element}>
          <div className={styles.toggler} onClick={toggleMode}>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  )
}
