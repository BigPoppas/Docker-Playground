// This program handles requests for two endpoints see code bellow (1 get & 1 post)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Redirect node to this folder to node styles.css bellow in the html code
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

// Starts a web server with node.js listening on port 80
app.listen(80);