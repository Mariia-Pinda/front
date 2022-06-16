const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Saved = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const SavedRecipe = sequelize.define('saved_recipe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Recipe = sequelize.define('recipe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    ingredients: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasOne(Saved)
Saved.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Saved.hasMany(SavedRecipe)
SavedRecipe.belongsTo(Saved)

Recipe.hasMany(Rating)
Rating.belongsTo(Recipe)

Recipe.hasMany(SavedRecipe)
SavedRecipe.belongsTo(Recipe)

module.exports = {
    User,
    Saved,
    SavedRecipe,
    Recipe,
    Rating
}
