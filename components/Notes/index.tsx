import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Notes.module.css'
import { Note } from '../../utils/types'

interface Props {
  notes: Array<Note>
}

export default function Notes(props: Props) {
  const { notes } = props

  return (
    <div className={`${styles.grid} page`}>
      {notes?.map((note) => (
        <Link key={note._id} href={`/notes/${note._id}`}>
          <div className={styles.element}>
            <h2 className={styles.element_title}>{note.title}</h2>
            <br />
            <div className={styles.element_description}>{note.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
