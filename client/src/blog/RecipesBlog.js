import {makeAutoObservable} from "mobx";

export default class RecipesBlog {
    constructor() {
        this._recipes = [
            {id: 1, name: "Jalapeno Crisps", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/jalapeno-crisps.jpg'},
            {id: 2, name: "Mint Coriander", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/mint-coriander.jpg'},
            {id: 3, name: "Rice Paper", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/rice-paper.jpg'},
            {id: 4, name: "Stuffed Mushrooms", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/stuffed-mushrooms.jpg'},
            {id: 5, name: "Sweet Potato", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/sweet-potato.jpg'},
            {id: 6, name: "Tomato Feta", ingredients: "", rating: 5, img: '../components/assets/images/recipe/appetizers/tomato-feta.jpg'},

            {id: 7, name: "New York Cheesecake", ingredients: "", rating: 5, img: '../components/assets/images/recipe/desserts/cheesecake.jpg'},
            {id: 8, name: "Chocolate Fondant", ingredients: "", rating: 5, img: '../components/assets/images/recipe/desserts/chocolate-fondant.jpg'},
            {id: 9, name: "Microwave Mug Cake", ingredients: "", rating: 5, img: '../components/assets/images/recipe/desserts/microwave-mug-cake.jpg'},
            {id: 10, name: "Tasty Pancakes", ingredients: "flour, baking powder, white sugar, milk, eggs, butter, salt", rating: 5, img: '../components/assets/images/recipe/desserts/pancakes.jpg'},
            {id: 11, name: "Rice Pudding", ingredients: "", rating: 5, img: '../components/assets/images/recipe/desserts/rice-pudding.jpg'},
            {id: 12, name: "Strawberry Mousse", ingredients: "", rating: 5, img: '../components/assets/images/recipe/desserts/strawberry-mousse.jpg'},


        ]
        makeAutoObservable(this)
    }

    setRecipes(recipes) {
        this._recipes = recipes
    }

    get recipes() {
        return this._recipes
    }
}