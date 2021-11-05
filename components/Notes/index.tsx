import React from 'react'
import styles from '../../styles/Notes.module.css'
import { Note } from '../../utils/types'

interface Props {
  notes: Array<Note>
}

export default function Notes(props: Props) {
  const { notes } = props

  return (
    <div className={styles.grid}>
      {notes?.map((note) => (
        <div className={styles.element} key={note._id}>
          <h2 className={styles.element_title}>{note.title}</h2>
          <br />
          <p className={styles.element_description}>{note.description}</p>
        </div>
      ))}
    </div>
  )
}
