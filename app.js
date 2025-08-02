const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

let notes = [{
    "id": 3,
    "title": "python",
    "content": "Try creating routes and using middleware"
  }];
let currentId = 3;


app.get("/", (req, res) => {
  res.send('hello');
});



app.get("/notes/:id", (req, res) => {
  
const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.json(note);
});