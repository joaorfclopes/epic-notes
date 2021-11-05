import React, { useEffect, useState } from 'react'
import Logo from '../../icons/Logo'
import Toggle from '../../icons/Toggle'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(Boolean)

  const handleToggle = () => {
    setDarkTheme(!darkTheme)
  }
  const storeUserSetPreference = (pref: string) => {
    localStorage.setItem('theme', pref)
  }

  useEffect(() => {
    const initialColorValue = document.documentElement.style.getPropertyValue(
      '--initial-color-mode'
    )
    setDarkTheme(initialColorValue === 'dark')
  }, [])
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark')
        storeUserSetPreference('dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        storeUserSetPreference('light')
      }
    }
  }, [darkTheme])

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
          <div className={styles.toggler} onClick={handleToggle}>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  )
}
