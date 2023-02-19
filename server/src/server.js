require('express-async-errors')
const express = require('express')
const uploadConfig = require('./config/upload')

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/AppError')

const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors)
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER ))

app.use(routes)

migrationsRun()

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server Error',
  })
})

const PORT = 3000
app.listen(PORT, () => console.log('Server is running on port ' + PORT))
