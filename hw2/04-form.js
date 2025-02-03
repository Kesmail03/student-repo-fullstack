const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.get("/form", (req, res) => {
  res.send(
    `<form action="/submit" method="POST">
        <label for="username">Name:</label>
        <input type="text" name="username"/>
        <br>
        <label for="email">Email:</label>
        <input type="text" name="email"/>
        <br>
        <label for="comments">Comments:</label>
        <input type="text" name="comments"/>
        <br>
        <label for="newsletter">Newsletter:</label>
        <input type="text" name="newsletter"/>
        <br>
        <button type="submit">Submit</button>
        </form>`
  );
});

app.post("/submit", (req, res) => {
  const { username, email, comments, newsletter } = req.body;
  res.send(`<h3>Received Input:</h3>
  <p>Name: ${username}</p>
  <p>Email: ${email}</p>
  <p>Comments: ${comments}</p>
  <p>Newsletter: ${newsletter}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
