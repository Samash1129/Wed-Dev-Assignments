const express = require("express");
const Test = require("../Models/test");
const router = express.Router();

//Get
router.get('/', async (req, res) => {
    try {
        const tester = await Test.find();
        res.json(tester);
    } catch (err) {
        res.send({
            message: "Not Found"
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tester = await Test.findById(req.params.id);
        res.json(tester);
    } catch (err) {
        res.send({message: "Not Found"})
    }
});

//Post
router.post('/', async (req, res) => {
    try {
        const inserttodb = new Test({
            name: req.body.name,
            number: req.body.number
        });
    
        const addtodb = await inserttodb.save();
        res.json(addtodb);

    } catch (err) {
        console.error(err);
        res.send("Not Inserted");
    }
});

//Patch
router.patch('/:id', async (req, res) => {
    try {
        const tester = await Test.findById(req.params.id);
        tester.number = req.body.number;

        const addtodb = await tester.save();
        res.json(addtodb);
    } catch (err) {
        res.send({message: "Not Found"})
    }
})

module.exports = router;