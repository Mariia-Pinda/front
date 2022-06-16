import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserBlog from "./blog/UserBlog";
import RecipesBlog from "./blog/RecipesBlog";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserBlog(),
        recipes: new RecipesBlog(),
    }}>
        <App />
    </Context.Provider>,

);

