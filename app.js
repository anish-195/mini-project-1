const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

let notes = [
];
let currentId = 1


app.get("/", (req, res) => {
  res.send('hello');
});



app.get("/notes/:id", (req, res) => {
  
const id = parseInt(req.params.id);
  res.send('done')
  const note = notes.find(m => m.id === id);
  
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.json(note);
});

app.post('/notes', (req,res) =>{
  const {title , content} = req.body;

  if(!title || !content){
    return res.status(404).json({massage: 'Note not found'})
  }
const newNote = {
  id : currentId++,
  title,
  content
}

notes.push(newNote)

res.status(201).json(notes)
})

app
