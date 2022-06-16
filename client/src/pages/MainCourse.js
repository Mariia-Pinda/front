import React from 'react';
import {Image} from "react-bootstrap";

const MainCourse = () => {
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
                        <h2 className="section__title">Main Course</h2>
                        <h3 className="section__subtitle">Cook with imagination</h3>
                        <div className="section__text recipes">
                            <p>A main course is the featured or primary dish in a meal consisting of several courses.
                                It usually follows the entrée ("entry") course. In the United States and Canada (except
                                Quebec),
                                the main course is traditionally called an "entrée". English-speaking Québécois follow
                                the modern French use of the term entrée to refer to a dish served before the main
                                course.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/chickpea-curry.jpg"/>
                            </div>
                            <div className="products__text">Chickpea curry</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/slow-roast-pork.jpg"/>
                            </div>
                            <div className="products__text">Slow-roast pork shoulder</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/aubergine-melts.jpg"/>
                            </div>
                            <div className="products__text">Aubergine melts</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/braised-beef-ginger.jpg"/>
                            </div>
                            <div className="products__text">Braised beef with ginger</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/gnocchi-tomato.jpg"/>
                            </div>
                            <div className="products__text">Gnocchi & tomato bake</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/main-course/green-bean-casserole.jpg"/>
                            </div>
                            <div className="products__text">Green bean casserole</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainCourse;