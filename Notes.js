const mongoose = require('mongoose');

// Définition du schéma de la note
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,  // Champ requis
  },
  date: {
    type: Date,
    default: Date.now,  // Par défaut, la date actuelle
  },
  important: {
    type: Boolean,
    default: false,  // Par défaut, la note n'est pas importante
  },
});

// Création du modèle basé sur le schéma
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
