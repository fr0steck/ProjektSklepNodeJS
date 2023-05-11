var express = require('express');
var router = express.Router();
const { ProductRecord } = require('../records/product.record');

router.get('/', async (req, res) => {
    const {category_name} = req.params
    const productList = await ProductRecord.listAll(category_name);
    
    // res.send('Product')
    res.json(productList)
})

module.exports = router