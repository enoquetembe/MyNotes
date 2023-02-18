const path = require('path')
const multer = require('multer')
const crypto = require('crypto')

const TMP_FOLDER = path(__dirname, '..', '..', 'tmp')
const UPLOADS_FOLDER = path(__dirname, 'uploads')

const MULTER = multer.diskStorage({
  destination: TMP_FOLDER,
  filename(request, file, callback) {
    const fileHash = crypto.randomBytes(10).toString('hex')
    const fileName = `${fileHash}-${file.originalname}`

    return callback(null, fileName)
  }
})

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}
