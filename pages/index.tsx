import Link from 'next/link'
import { Note } from '../utils/types'

interface IndexProps {
  notes: Array<Note>
}

function Index(props: IndexProps) {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <h2>Click On Note to see it individually</h2>
      {notes.map((note) => (
        <Link key={note._id} href={`/notes/${note._id}`} passHref>
          <div style={{ cursor: 'pointer' }}>
            <h1>{note.title}</h1>
            <h3>{note.description}</h3>
          </div>
        </Link>
      ))}
      <Link href="/notes/create" passHref>
        <button>Create a New Todo</button>
      </Link>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string)
  const notes = await res.json()

  return {
    props: { notes }
  }
}

export default Index
