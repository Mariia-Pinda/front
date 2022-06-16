import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createRecipe} from "../../http/recipeApi";

const CreateRecipe = ({show, onHide}) => {
    const {recipe} = useContext(Context)
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addRecipe = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('ingredients', ingredients)
        formData.append('img', file)
        createRecipe(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add recipe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={'mt-3'}
                        placeholder={'Enter recipe name'}
                    />
                    <Form.Control
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                        className={'mt-3'}
                        placeholder={'Enter ingredients'}
                    />
                    <Form.Control
                        className={'mt-3'}
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addRecipe}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRecipe;