// Importation de la librairie faker-js/faker pour générer des fausses données aléatoires
const {faker} = require('@faker-js/faker')

// Importation de la librairie mongodb pour se connecter à une base de données MongoDB
const MongoClient = require("mongodb").MongoClient

// Importation de la librairie lodash pour utiliser la fonction _.sample() pour choisir un élément aléatoire dans une liste
const _ = require('lodash')

// Définition de la fonction principale, qui est une fonction asynchrone
async function main ()  {
    // Définition de l'URI de la base de données MongoDB
    // const uri = "mongodb://localhost://27017"
    const uri = "mongodb://127.0.0.1:27017"
    // Création d'un nouveau client MongoClient à partir de l'URI
    const client = new MongoClient(uri)

    try {
        // Connexion au serveur MongoDB
        await client.connect();

        // Sélection de la collection "products" de la base de données "restaurant"
        const productsCollection = client.db("restaurant").collection("products")
        // Sélection de la collection "categories" de la base de données "restaurant"
        const categoriesCollection = client.db("restaurant").collection("categories")


        // Définition d'une liste de catégories sous la forme d'objets avec une propriété "name"
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => {
            return {name: category}
        })

        // Insertion de la liste de catégories dans la collection "categories"
        await categoriesCollection.insertMany(categories);

        // Définition d'une liste d'URLs d'images
        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ]

        // Définition d'une liste de produits vide
        let products = []

        // Boucle pour générer 10 nouveaux produits aléatoires
        for(let i = 0; i < 10; i++) {
            // Génération d'un nouveau produit avec des données aléatoires à l'aide de la librairie faker-js/faker
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            }
            // Ajout du nouveau produit à la liste de produits
            products.push(newProduct)
        }

        // Insertion de la liste de produits dans la collection "products"
        await productsCollection.insertMany(products)
    } catch(e) {
        // Affichage de l'erreur dans la console en cas d'erreur lors de l'exécution du code
        console.log(e);
    } finally {
        // Fermeture de la connexion à la base de données MongoDB
        await client.close()
    }  
}

// Appel de la fonction principale pour l'exécution du code
main()
