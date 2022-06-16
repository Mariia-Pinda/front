import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl, NavLink, Row} from "react-bootstrap";
import {useNavigate, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, RECIPES_LIST_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Main from "./Main";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(<Main/>)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <div>
            <header className="header fixed" id="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">Cooking blog
                            <link href="https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap"
                                  rel="stylesheet"/>
                        </div>
                        <nav className="nav" id="nav">
                            <a className="nav__link" href="Main">Main page</a>
                            <a className="nav__link" href="Auth">Log in</a>
                            <a className="nav__link" href="#">Sign up</a>
                            <a className="nav__link" href="#">Contact</a>
                        </nav>
                        <button className="nav-toggle" id="nav_toggle" type="button">
                            <span className="nav-toggle__item">Nav</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="log__in__section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">{isLogin ? 'Log in' : 'Sign up'}</h2>
                    </div>
                    <div className="log__in">
                        <Form className='d-flex flex-column'>
                            <FormControl
                                className='mt-3'
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                            <Row className='d-flex justify-content-between pl-3 pr-3'>
                                {isLogin ?
                                    <div>
                                        <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                                    </div>
                                    :
                                    <div>
                                        <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                                    </div>
                                }
                                <Button
                                    className='mt-3'
                                    variant={"outline-light"}
                                    onClick={click}
                                >
                                    {isLogin ? 'Log in' : 'Sign up'}
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Auth;

// <Container
//     className='d-flex justify-content-center align-items-center'
//     style={{height: window.innerHeight - 54}}
// >
//     <Card style={{width: 600}} className='p-5'>
//         <h2 className='m-auto'>{isLogin ? 'Log in' : 'Sign up'}</h2>
//         <Form className='d-flex flex-column'>
//             <Form.Control
//                 className='mt-3'
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//             />
//             <Form.Control
//                 className='mt-3'
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 type="password"
//             />
//             <Row className='d-flex justify-content-between pl-3 pr-3'>
//                 {isLogin ?
//                     <div>
//                         <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
//                     </div>
//                     :
//                     <div>
//                         <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
//                     </div>
//                 }
//                 <Button
//                     variant={"outline-success"}
//                     onClick={click}
//                 >
//                     {isLogin ? 'Log in' : 'Sign up'}
//                 </Button>
//             </Row>
//         </Form>
//     </Card>
// </Container>