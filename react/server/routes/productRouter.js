const express = require('express') // Importation du module express

const {getProducts, getProductsByCategory, getSingleProduct} = require('../controllers/ProductController')

const router = express.Router() // Création d'un router pour ce module

const Product = require('../models/productModel') // Importation du modèle de données des produits

// Route pour récupérer tous les produits de la base de données
router.get('/products', getProducts)

// Route pour récupérer les produits triés par catégories
router.get('/products-by-categories', getProductsByCategory)
// Route pour un produit
router.get('/products/:id', getSingleProduct)

module.exports = router // Exportation du router pour être utilisé dans l'application principale
