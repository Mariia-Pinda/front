import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const createRecipe = async (recipe) => {
    const {data} = await $authHost.post('api/recipe', recipe)
    return data
}

export const fetchRecipes = async () => {
    const {data} = await $host.get('api/recipe')
    return data
}

export const fetchOneRecipe = async (id) => {
    const {data} = await $host.get('api/recipe/'+id)
    return data
}


