// Data access functions for categories

// Import dependencies
const { PrismaClient } = require('@prisma/client');

// declare an instance of the client
const prisma = new PrismaClient();

// Get all categories from DB
//
async function getCategories() {
    // define variable to store categories
    let categories;

    try {  
        // Get all categories
        // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
        categories = await prisma.category.findMany();

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all categories: ', err.message);
    } finally {

    }
    // return all categories found
    return categories;
}


// Export 
module.exports = {
    getCategories
};