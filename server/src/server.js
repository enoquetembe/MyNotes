const express = require('express')

const app = express()

app.get('/hello', (request, response) => {
  response.send('Helllo')
})

const PORT = 3000
app.listen(PORT, () => console.log('Server is running on port ' +PORT))