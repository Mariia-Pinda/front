import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateRecipe from "../components/modals/CreateRecipe";


const Admin = () => {
    const [recipeVisible, setRecipeVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={"outline-dark"}
                className={'mt-4 p-2'}
                onClick={() => setRecipeVisible(true)}
            >
                Add recipe
            </Button>
            <CreateRecipe show={recipeVisible} onHide={() => setRecipeVisible(false)}/>
        </Container>
    );
};

export default Admin;