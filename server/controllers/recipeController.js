const uuid = require('uuid')
const path = require('path');
const {Recipe} = require('../models/models')
const ApiError = require('../error/ApiError')
class RecipeController {
    async create(req, res, next) {
        try {
            const {name, ingredients} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const recipe = await Recipe.create({name, ingredients, img: fileName})

            return res.json(recipe)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let recipes;
        recipes = await Recipe.findAll()
    }

    async getOne(req, res) {
        const {id} = req.params
        const recipe = await Recipe.findOne(
            {
                where: {id},
                include: [{as: 'ingredients'}]
            }
        )
        return res.json(recipe)
    }
}

module.exports = new RecipeController()