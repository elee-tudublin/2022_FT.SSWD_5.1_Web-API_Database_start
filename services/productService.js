// Product service functions

const productData = require('../dataAccess/productData');

// Function to get all products
//
async function getProducts() {
    
    // a place holder for now 
    const products = await productData.getProducts();
  
    // return products
    return products;
  }
  
// Module exports
// expose these functions
module.exports = {
    getProducts
};