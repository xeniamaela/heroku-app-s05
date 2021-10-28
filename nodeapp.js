const express = require('express');
const PORT = process.env.PORT || 3000 ;
const app = express();
const cors = require('cors');

let result = ''

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.post('/', (req, res) => {
  result=req.body;
  res.send(result)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/result', (req, res) => {
  res.send(result)
})

app.listen(PORT, () => {
  console.log(`App listening at:${PORT}`)
})