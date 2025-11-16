import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173"
}))
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
})

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:💲{port}`);
});
