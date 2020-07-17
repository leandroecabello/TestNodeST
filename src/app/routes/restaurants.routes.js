const { Router } = require('express')
const router = Router()
const fs = require('fs')

const jsonRestaurants = fs.readFileSync('src/restaurants.json', 'utf-8')
let restaurants = JSON.parse(jsonRestaurants) 

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
        
        console.log(newRestaurant.name)

        for( let r of restaurants) {
            if(r.name === newRestaurant.name) {
                console.log('nombre ya existe')
                res.status(400).json({ message: 'The restaurant name already exists' })
                return
            }
        }
    
        restaurants.push(newRestaurant)
        const jsonRestaurants = JSON.stringify(restaurants)
        fs.writeFileSync('src/restaurants.json', jsonRestaurants, 'utf-8')
        res.status(201).json({ message : 'Restaurant added successfully'})
        console.log('added successfully')
        
        console.log(newRestaurant)
    })

    .delete('/delete/:name', (req, res) => {
        restaurants = restaurants.filter( restaurant => restaurant.name != req.params.name)
        const jsonRestaurants = JSON.stringify(restaurants)  
        fs.writeFileSync('src/restaurants.json', jsonRestaurants, 'utf-8')
        console.log('delete')    
    })

module.exports = router    