import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, RECIPES_LIST_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={RECIPES_LIST_ROUTE}>Cooking blog</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Admin panel</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} className="ml-2">Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>]
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Sign up</Button>  {/*??????????????????????????????*/}
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;