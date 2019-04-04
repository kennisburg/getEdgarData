const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send(`<html>
              <body>
                Get 10Qs
              </body>
            </html>\n`);
});


app.listen(port, () => {
  console.log(`go to localhost:${port}`)
});