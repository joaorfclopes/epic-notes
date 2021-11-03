import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../utils/connection'
import { Response } from '../../../utils/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof Response = req.method as keyof Response

  const catcher = (error: Error) => res.status(400).json({ error })

  const id: string = req.query.id as string

  const handleCase: Response = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Note } = await connect()
      res.json(await Note.findById(id).catch(catcher))
    },
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Note } = await connect()
      res.json(
        await Note.findByIdAndUpdate(id, req.body, { new: true }).catch(catcher)
      )
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Note } = await connect()
      res.json(await Note.findByIdAndRemove(id).catch(catcher))
    }
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
