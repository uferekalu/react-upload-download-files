const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');

const connectDB = require('./db/db')

connectDB()

const app = express()

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use(fileRoute);

const PORT = process.env.PORT || 3030

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log('Server started on port 3030');
})