// Importation de la bibliothèque mongoose
const mongoose = require('mongoose')

// Création d'un objet Schema de mongoose
const Schema = mongoose.Schema

// Définition du schéma pour la catégorie de nourriture
const CategorySchema = new Schema({
    // Type de nourriture
    name: {type: String, required: true}
})

// Définition du schéma pour les produits alimentaires
const ProductSchema = new Schema({
    // Nom du produit
    name: {type: String, required: true},
    // Adjectif descriptif du produit
    adjective: {type: String, required: true},
    // Description du produit
    description: {type: String, required: true},
    // Prix du produit
    price: {type: String, required: true},
    // Catégorie du produit (référence à la CategorySchema)
    category: {type: String, required: true},
})

// Exportation du modèle 'Product' basé sur le schéma ProductSchema
module.exports = mongoose.model('Product', ProductSchema);
