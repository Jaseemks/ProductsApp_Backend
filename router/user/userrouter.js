const router = require('express').Router();
const SignUp = require('../../controllers/userController');
const Login = require('../../controllers/userController');
const asyncHandler = require('../../utils/asyncHandler')

router.post('/signup',asyncHandler(SignUp))
router.post('/login',asyncHandler(Login))




module.exports = router