// simple server example using express
import express from 'express';

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

