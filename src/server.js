require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/health', (req, res) => 
    {
        res.status(200).json({ message: 'App is healthyyyy' })
    }
)

app.listen(5001, () => 
    {
        console.log('Server is listening')
    }
)