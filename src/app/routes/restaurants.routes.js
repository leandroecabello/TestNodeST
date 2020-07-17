const { Router } = require('express')
const router = Router()
const fs = require('fs')

const jsonRestaurants = fs.readFileSync('src/restaurants.json', 'utf-8')
const restaurants = JSON.parse(jsonRestaurants) 

router
    .get('/', (req, res) => {

        res.status(200).json(restaurants)
    })

    .post('/create_restaurant', (req, res) => {
        
        const { name , kindOfRestaurant, specials = [] } = req.body
        
        
        const newRestaurant = {
            name,
            kindOfRestaurant,
            specials      
        }
        

        restaurants.push(newRestaurant)
        const jsonRestaurants = JSON.stringify(restaurants)
        fs.writeFileSync('src/restaurants.json', jsonRestaurants, 'utf-8')
                
        res.status(201).json(newRestaurant)
        

    })

module.exports = router    