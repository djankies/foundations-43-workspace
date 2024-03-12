const houses = require('./db.json')
let globalID = 4
module.exports = {
    getHouses: (req, res) => { 
        res.status(200).send(houses) 
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: globalID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        globalID++
        res.status(200).send(houses)
    }
}