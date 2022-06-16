const Router = require('express')
const router = new Router()
const recipeRouter = require('./recipeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/recipe', recipeRouter)

module.exports = router