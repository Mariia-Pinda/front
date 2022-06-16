const Router = require('express')
const router = new Router()
const recipeController = require('../controllers/recipeController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), recipeController.create)
router.get('/', recipeController.getAll)
router.get('/:id', recipeController.getOne)

module.exports = router