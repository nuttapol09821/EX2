const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('หน้าแรก'))
app.get('/about', (req, res) => res.send('ณัฐพล'))
app.get('/Contact', (req, res) => res.send('084-1395184'))
app.get('/test', (req, res) => {
    res.json({message :"test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))