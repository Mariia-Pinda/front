import Admin from './pages/Admin'
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    RECIPES_LIST_ROUTE,
    RECIPES_ROUTE,
    REGISTRATION_ROUTE,
    SAVED_ROUTE
} from "./utils/consts";
import Saved from "./pages/Saved";
import RecipesList from "./pages/RecipesList";
import Auth from "./pages/Auth";
import Recipes from "./pages/Recipes";
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SAVED_ROUTE,
        Component: Saved
    }
]

export const publicRoutes = [
    {
        path: RECIPES_LIST_ROUTE,
        Component: RecipesList
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: RECIPES_ROUTE + '/:id',
        Component: Recipes
    }
]