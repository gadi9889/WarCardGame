require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(
  cors({
    origin:"*"
}))

app.get('/',(req,res) => {
  res.json({message:'connected'})
})

const usersRouter = require('./routes/users')
const gamesRouter = require('./routes/games')
app.use('/api/users', usersRouter)
app.use('/api/games', gamesRouter)

app.listen(process.env.PORT,() => {
  console.log('live at '+process.env.PORT)
})