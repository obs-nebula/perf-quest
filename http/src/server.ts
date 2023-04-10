import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  process.stdout.write(`Example app listening on port ${port}\n`);
});
