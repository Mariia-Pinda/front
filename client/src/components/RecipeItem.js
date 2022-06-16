import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../components/assets/images/star.png'
import {useHistory} from "react-router-dom";
import {RECIPES_ROUTE} from "../utils/consts";

const RecipeItem = ({recipe}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(RECIPES_ROUTE + '/' + recipe.id)}>
            <Card style={{width: 300, cursor: 'pointer'}} border={"light"}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + recipe.img}/>
                <div className='mt-1 d-flex justify-content-between align-items-center'>
                    Pancake
                </div>
                <div className="d-flex align-items-center">
                    <div>{recipe.rating}</div>
                    <Image width={20} height={20} src={star}/>
                </div>
                <div>
                    {recipe.name}
                </div>
            </Card>
        </Col>
    );
};

export default RecipeItem;