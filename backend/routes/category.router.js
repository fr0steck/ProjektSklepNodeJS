var express = require('express');
var router = express.Router();

const { CategoryRecord } = require('../records/categore.record');


router.get('/', async (req, res) => {
    const categoryList = await CategoryRecord.listAll();
    
    // res.send('Category')
    res.json(categoryList)
})

module.exports = router
