import React from 'react'
import styles from '../../styles/Layout.module.css'
import Navbar from '../Navbar'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export default function Layout(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Navbar />
        {props.children}
      </div>
    </div>
  )
}
