import Head from 'next/head'
import AddButton from '../components/AddButton'
import Notes from '../components/Notes'
import { Note } from '../utils/types'

interface Props {
  notes: Array<Note>
}

function Index(props: Props) {
  return (
    <>
      <Head>
        <title>Epic Notes</title>
      </Head>
      <main>
        <Notes notes={props.notes} />
        <AddButton />
      </main>
    </>
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
