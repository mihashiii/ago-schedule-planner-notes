import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://mihashi:123@cluster1.hooh8sr.mongodb.net/?retryWrites=true&w=majority&appName=cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend with MongoDB!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});