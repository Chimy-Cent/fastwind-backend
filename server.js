import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
  const { details } = req.body;

  if (details === 'FSWL3359054TRK') {
    res.json({ message: 'Your parcel is already dispatched and is on its way to you' });
  } else {
    res.status(400).json({ error: 'Invalid details' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});
