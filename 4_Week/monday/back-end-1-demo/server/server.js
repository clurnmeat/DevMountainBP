const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const inventory = [
    'waterbottle', 
    'tea', 
    'apron', 
    'hairbrush', 
    'jewelry', 
    'makeup', 
    'tanning lotion', 
    'swimming trunks', 
    'facewash', 
    'hair-tie', 
]


app.get('/api/inventory', (req, res) => {
    
    if(req.query.item){
        const filteredItems = inventory.filter((inventoryItems) => {
           return inventoryItems.toLowerCase().includes(req.query.item.toLowerCase())
        })
        return res.status(200).send(filteredItems)
    } else {
        return res.status(200).send(inventory)
    }
})


app.get('/api/inventory/:id', (req, res) => {
    const {id} = req.params
    
    res.status(200).send(inventory[id])
})


app.listen(5050, () => console.log(`jammin on 5050`))