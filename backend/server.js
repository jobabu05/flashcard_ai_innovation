import express from 'express'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.get('/api/ping', (req, res) => {
  console.log('ping received');
  const response = {
    text: 'pong'
  }
  res.json(response);
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:💲{port}`);
  console.log('Ready to handle requests...');
  console.log('Press Ctrl+C to stop the server');
});
