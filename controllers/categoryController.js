// This is the product controller

// Import router package
const router = require('express').Router();
const productService = require('../services/categoryService');


// This endpoint will return all product data from the database
router.get('/', async(req, res) => {

    // set content type of response body in the headers
    // As this is defined globally in app.js it can be ommitted from here
    res.setHeader('Content-Type', 'application/json');

    const result = await productService.getCategories();

    // Send a  response - this app will be a web api so no need to send HTML
    res.json(result);

});

// export
module.exports = router;