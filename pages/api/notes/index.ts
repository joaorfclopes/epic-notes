import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../utils/connection'
import { Response } from '../../../utils/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof Response = req.method as keyof Response

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: Response = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Note } = await connect()
      res.json(await Note.find({}).catch(catcher))
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Note } = await connect()
      if (!(req.body.title === '' && req.body.description === '')) {
        res.json(await Note.create(req.body).catch(catcher))
      }
    }
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export const config = {
  api: {
    externalResolver: true
  }
}

export default handler
