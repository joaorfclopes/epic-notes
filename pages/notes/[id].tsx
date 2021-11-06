import { useRouter } from 'next/router'
import { FormEventHandler, useRef, useState } from 'react'
import { Note } from '../../utils/types'

interface ShowProps {
  note: Note
  url: string
}

function Show(props: ShowProps) {
  const router = useRouter()

  const [note, setNote] = useState<Note>(props.note)

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)

  const handleEdit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const newNote: Note = {
      title: title.current?.value as string,
      description: description.current?.value as string
    }
    await fetch(props.url + '/' + note._id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    setNote(newNote)
    router.push('/')
  }

  const handleDelete = async () => {
    await fetch(props.url + '/' + note._id, {
      method: 'delete'
    })
    router.push('/')
  }

  return (
    <>
      <form onSubmit={handleEdit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          ref={title}
          defaultValue={note.title}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          ref={description}
          defaultValue={note.description}
        ></input>
        <button type="submit">Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button
          onClick={() => {
            router.push('/')
          }}
        >
          Go Back
        </button>
      </form>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    (process.env.API_URL + '/' + context.query.id) as string
  )
  const note = await res.json()

  return { props: { note, url: process.env.API_URL } }
}

export default Show
