import Cors from 'cors'

function initMiddleware(middleware) {
  return (req, res) => 
    new Promise((resolve, reject) => {
      middleware(req, res, result => {
        if(result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      })
    })
}

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}