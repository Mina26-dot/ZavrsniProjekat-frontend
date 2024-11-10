const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());  // Omogućava CORS
app.use(express.json());  // Omogućava JSON body parsing

// Definišemo rute
app.get('/subject/all', (req, res) => {
  // Kod za vraćanje svih predmeta iz baze podataka
});

app.post('/subject/add', (req, res) => {
  // Kod za dodavanje novog predmeta u bazu podataka
});

// Pokrećemo server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});