import { setupTracing } from './tracing';
setupTracing('example-express-server');
'use strict'
const autocannon = require('autocannon')
const express = require('express')
const app = express()
const port = 5000

app.get('/health', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export async function server2 () {
  const result = await autocannon({
    url: 'http://localhost:5000/health',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
return result;
}
