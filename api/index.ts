import { Hono } from 'hono'
import { appendTrailingSlash } from 'hono/trailing-slash'

import { random } from './random.ts'
import { mathml } from './mathml.ts'
import { kudos } from './kudos.ts'
import { bookUpdate } from './book_update.ts'
import { daily } from './daily.ts'

const app = new Hono()
app.use(appendTrailingSlash())

// API Root Endpoint
app.get('/api/', (c: any) => c.json({
  message: 'API is running.',
  healthy: true
}))

// Random Redirect Endpoint
app.get('/api/random/', async (c: any) => {
  const redirect = await random()
  return c.redirect(redirect)
})

// MathML Processing Endpoint
app.get('/api/mathml/', (c: any) => {
  c.status(405)
  return c.json({
    error: "Method Not Allowed. Please use POST to submit TeX data."
  })
})
.post('/api/mathml/', async (c: any) => {
  return await mathml(c)
})

// Kudos Endpoint
app.get('/api/kudos/', (c: any) => {
  c.status(405)
  return c.json({
    error: "Method Not Allowed. Please use POST to submit kudos."
  })
})
.post('/api/kudos/', async (c: any) => {
  if (c.req.query('key') !== "7f2ababa423061c509f4923dd04b6cf1") {
    c.status(403)
    return c.json({
      error: "Forbidden. This is not the function you are looking for."
    })
  }
  return await kudos(c)
})

// Book Update Endpoint
app.get('/api/book_update/', (c: any) => {
  c.status(405)
  return c.json({
    error: "Method Not Allowed. Please use POST to submit kudos."
  })
})
.post('/api/book_update/', async (c: any) => {
  const secretKey = c.env.POST_SECRET
  if (c.req.query('secret') !== secretKey) {
    c.status(403)
    return c.json({
      error: "Forbidden. This is not the function you are looking for."
    })
  }
  return await bookUpdate(c)
})

// Daily Update Endpoint
app.get('/api/daily/', async (c: any) => {
  return await daily(c)
})

// 404 Handler for Undefined API Routes
app.get('/api/*', (c: any) => {
  c.status(404)
  return c.json({
    error: "API endpoint not found."
  })
})

export default app
