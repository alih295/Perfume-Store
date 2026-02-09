const dotenv = require('dotenv')
const server = require('./app')
dotenv.config()

server.listen(process.env.PORT , console.log('server is running on port 3000')
)