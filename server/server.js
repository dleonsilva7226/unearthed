import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express()
// middleware configuration
//serve the files from the client\public directory
app.use('/public', express.static('./public'))

//serve the files from the client\public\scripts directory
app.use('/scripts', express.static('./public/scripts'))

//route for the root URL of the server with parameters req and res
app.get('/', (req,res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})
// end of middleware configuration

// adding /gifts endpoint
app.use('/gifts', giftsRouter)

// server on port process.env.PORT or 3001
const PORT = process.env.PORT || 3001

// Starts a server on port process.env.PORT or 3001
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})


