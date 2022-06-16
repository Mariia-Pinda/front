import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipesImages = observer(() => {
    const {recipe} = useContext(Context)
    return (
        <Row className='d-flex'>
            {recipe.recipes.map(recipe =>
                <RecipeItem key={recipe.id} recipe={recipe}/>
            )}

        </Row>
    );
});

export default RecipesImages;