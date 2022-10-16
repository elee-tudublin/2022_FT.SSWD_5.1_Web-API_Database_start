// Category service functions

const categoryData = require('../dataAccess/categoryData');

// Function to get all categories
//
async function getCategories() {
    
    // a place holder for now 
    const categories = await categoryData.getCategories();
  
    // return categories
    return categories;
  }
  
// Module exports
// expose these functions
module.exports = {
    getCategories
};