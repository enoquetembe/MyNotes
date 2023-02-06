const createUsers = `
  CREATE TABLE IF NOT EXISTS users(
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
  	name VARCHAR,
  	email VARCHAR,
  	password VARCHAR,
  	avatar VARCHAR null,
  	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`
module.exports = createUsers
