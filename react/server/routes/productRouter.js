// Importation du module express
const express = require('express') 

const {
    getProducts,
    getProductsByCategory,
    getSingleProduct
} = require('../controllers/ProductController')
// Création d'un router pour ce module
const router = express.Router() 
// Importation du modèle de données des produits
const Product = require('../models/productModel') 

// Route pour récupérer tous les produits de la base de données
router.get('/products', getProducts)

// Route pour récupérer les produits triés par catégories
router.get('/products-by-categories', getProductsByCategory)
// Route pour un produit
router.get('/products/:id', getSingleProduct)
// Exportation du router pour être utilisé dans l'application principale
module.exports = router 
