const { addProduct,getProducts,getProductsById,updateProduct,deleteProduct } = require('../../controllers/productController');
const asyncHandler = require('../../utils/asyncHandler');
const { verifyToken } = require('../../utils/jwttoken');

const router = require('express').Router();

router.post('/',verifyToken, asyncHandler(addProduct))
      .get('/', asyncHandler(getProducts))  
      .put('/:id', asyncHandler(updateProduct))
      .delete('/:id', asyncHandler(deleteProduct))
      .get('/:id', asyncHandler(getProductsById))
 


module.exports = router