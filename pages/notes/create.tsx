import { useRouter } from 'next/router'
import { FormEventHandler, useRef } from 'react'
import { Note } from '../../utils/types'

interface CreateProps {
  url: string
}

function Create(props: CreateProps) {
  const router = useRouter()

  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    let note: Note = { title: '', description: '' }
    if (null !== title.current || null !== description.current) {
      note = {
        title: title.current?.value as string,
        description: description.current?.value as string
      }
    }

    await fetch(props.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })

    router.push('/')
  }

  return (
    <>
      <h1>Create a New Note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={title}></input>
        <label htmlFor="description">Description</label>
        <input id="description" type="text" ref={description}></input>
        <button type="submit">Submit</button>
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

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL
    }
  }
}

export default Create
