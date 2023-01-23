'use strict'
const autocannon = require('autocannon')
import express from 'express'
const app = express();
const port = 3000;
app.get('/health', (req:any, res:any) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export async function server1 () {
  const result = await autocannon({
    url: 'http://localhost:3000/health',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
return result;
}
