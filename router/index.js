const router = require('express').Router();
const productRoutes = require('./product/productrouter')
const userRoutes = require('./user/userrouter')

router.use('/product',productRoutes)
router.use('/users',userRoutes)

module.exports = router;