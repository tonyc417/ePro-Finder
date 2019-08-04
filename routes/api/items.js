const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');


//route GET api/items
router.get('/', (req,res) => {
    Item.find()
    .sort({ date: -1}) //sorts posts by dates
    .then(items => res.json(items));
});
//Post request very important for adding new item 
//creates post
router.post('/', (req,res) => {
    const newItem = new Item({
        name: req.body.name,
        summary: req.body.summary
    });

    newItem.save().then(item => res.json(item));
});

//Delete request
//Deletes post
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false}));
});

module.exports = router;