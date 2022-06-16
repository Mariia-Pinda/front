import React from 'react';
import {Image} from "react-bootstrap";

const Salads = () => {
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


            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Salads</h2>
                        <h3 className="section__subtitle">Kitchen. Heart. Home</h3>
                        <div className="section__text recipes">
                            <p>A salad is a dish consisting of mixed, mostly natural ingredients with at least
                                one raw ingredient. They are often dressed, and typically served at room temperature
                                or chilled, though some can be served warm.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/greek.jpg"/>
                            </div>
                            <div className="products__text">Greek salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/chickpea.jpg"/>
                            </div>
                            <div className="products__text">Chickpea salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/nicoise.jpg"/>
                            </div>
                            <div className="products__text">Salade niçoise</div>
                        </div>

                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/broccoli.jpg"/>
                            </div>
                            <div className="products__text">Broccoli salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/caesar.jpg"/>
                            </div>
                            <div className="products__text">Chicken Caesar salad</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/salads/fruit.jpg"/>
                            </div>
                            <div className="products__text">Fruit salad</div>
                        </div>

                    </div>
                </div>
                <div id="like_button_container"></div>
            </section>
        </div>
    );
};

export default Salads;