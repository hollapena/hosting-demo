const express = require('express')
const path = require('path')

const app = express()

app.get("http://localhost:4000/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))

})

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname, "../index.css"))
  })

const port = process.env.PORT || 4567

app.listen(port, () => console.log(`Rockin' and rollin' on ${port}`))