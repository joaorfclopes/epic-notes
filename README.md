# Epic Notes

### Requirements 💻

- Yarn
- MongoDB database

### Setup 🏁

After cloning the project run `yarn install`

### Run 💨

**Before running:**

- In root folder, create an `.env.local` file and add your configs based on
  `.env.local.example`

**Development environment:**

- In the root of the project run `yarn dev`

**Production environment:**

- In the root of the project run `yarn prod`

_Notes:_

1. _Keep the names of the .env variables if you didn't change them in the rest
   of the code_
2. _The `API_URL` variable will be `http://localhost:3000/api/notes` if you
   didn't change the port were Next is running_
3. _The value of `DATABASE_URL` .env variable must be the connection string to
   you MongoDB database_

### Live website 🌍

Access my version here: [epic-notes](https://epic-notes.vercel.app/)
