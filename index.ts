import * as express from "express";
import * as path from "path";
require('dotenv').config()

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;



console.log(process.env.PORT);


app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: "محمد" });
});


app.post('/submit', (req, res) => {
  let { name, email } = req.body;

  res.render('result', { name, email });
});

app.get('/api', (req, res) => {
  res.json({ "msg": "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
