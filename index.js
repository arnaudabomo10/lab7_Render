const mongoose = require('mongoose');
const Note = require('./Note');  // Assurez-vous d'importer le modèle

// Connexion à MongoDB
const uri = "mongodb+srv://aabom040:8cM01rGg7WShl2vI@fullstackopensed.mbntq.mongodb.net/?retryWrites=true&w=majority&appName=FullstackOpenSed";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connecté à MongoDB !"))
  .catch((err) => console.error("Erreur de connexion :", err));

// Opérations CRUD
async function createNote() {
  const newNote = new Note({ content: "Note importante", important: true });
  const result = await newNote.save();
  console.log("Note insérée :", result);
}

async function getNotes() {
  const notes = await Note.find();
  console.log("Toutes les notes :", notes);
}

async function updateNote(noteId) {
  const updatedNote = await Note.findByIdAndUpdate(noteId, { important: false }, { new: true });
  console.log("Note mise à jour :", updatedNote);
}

async function deleteNote(noteId) {
  const deletedNote = await Note.findByIdAndDelete(noteId);
  console.log("Note supprimée :", deletedNote);
}

// Exemple d'appel des fonctions
createNote();
getNotes();
updateNote('603c72ef28a2e5f79d8b7db1');
deleteNote('603c72ef28a2e5f79d8b7db1');
