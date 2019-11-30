const express = require('express');
const Tour = require('../models/tour');

const authMiddleware = require('../middleware/authmiddleware');
const adminmiddleware = require('../middleware/adminmiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await Tour.find()
        res.send(result);
    } catch (error) {
        res.status(400).send('Error' + error.message)
    }
});

router.get('/:id', async (req, res) => {

    try {
        const result = await Tour.findById(req.params.id)

        if (result) {
            res.send(result);
        } else {
            res.status(404).send('no data found ');
        }
    } catch (error) {
        res.status(400).send('Bad Request : ' + error.message);
    };
});


router.post('/', [authMiddleware, adminmiddleware], async (req, res) => {
    try {
        const newtour = new Tour({
            title: req.body.title
            , agencyname: req.body.agencyname
            , rating: req.body.rating
            , description: req.body.description
            , mealplan: req.body.mealplan
            , days: req.body.days
            , imageUrl: req.body.imageUrl
        });
        const result = await newtour.save()
        if (result) {
            res.send(result);
        } else {
            res.status(404).send('no data saved')
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
});
module.exports = router;