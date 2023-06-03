


const Product = require('../models/productModel')



const getProducts = async (req, res) => {
    try {
        const products = await Product.find() // Recherche de tous les produits dans la base de données grâce au modèle de données des produits
        res.status(200).send({data: products}) // Envoi de la liste des produits en réponse HTTP
    } catch (error) {
        res.status(400).send({error: error}) // Envoi d'une réponse HTTP avec le code d'erreur 400 si une erreur est survenue
    }
}


const getProductsByCategory = async(req, res) => {
    try {
        const products = await Product.aggregate([
            // Étape 1 : match tous les documents
            {$match: {}},
            // Étape 2 : groupe les documents par catégorie, et ajoute chaque document dans le tableau "products"
            {$group: {
                _id:'$category',
                products: {$push: '$$ROOT'}
            }},
            // Étape 3 : projette le nom de la catégorie et le tableau des produits, et masque l'ID
            {$project: {name: '$_id', products: 1, _id: 0}}
        ])
        res.status(200).send({data: products}) // Envoi de la liste des produits triés par catégories en réponse HTTP
    } catch (error) {
        res.status(400).send({error: err}) // Envoi d'une réponse HTTP avec le code d'erreur 400 si une erreur est survenue
    }
}

const getSingleProduct = async (req, res) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send({ data: product });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  };
  

module.exports = {
    getProducts,
    getProductsByCategory,
    getSingleProduct
}