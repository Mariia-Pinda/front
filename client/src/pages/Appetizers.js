import React from 'react';
import {Image} from "react-bootstrap";

const Appetizers = () => {
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
                            <a className="nav__link" href="sign-up.html">Sign up</a>
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
                        <h2 className="section__title">Appetizers</h2>
                        <h3 className="section__subtitle">Better food, better mood</h3>
                        <div className="section__text recipes">
                            <p>Appetizer, food eaten to pique the appetite or to moderate the hunger stimulated by
                                drink.
                                Hors d’oeuvres, small portions of savoury foods, often highly seasoned, and canapés,
                                small pieces of bread, crackers, or croutons with various toppings, are the classic
                                appetizer categories. The Scandinavian smorgasbord, Spanish tapas, Greek meze and
                                Egyptian mazza,
                                are all elaborate appetizer displays.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/sweet-potato.jpg"/>
                            </div>
                            <div className="products__text">Sweet potato bites</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/rice-paper.jpg"/>
                            </div>
                            <div className="products__text">Rice paper wraps</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/stuffed-mushrooms.jpg"/>
                            </div>
                            <div className="products__text">Stuffed mushrooms</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/mint-coriander.jpg"/>
                            </div>
                            <div className="products__text">Mint & coriander tomato tarts</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/tomato-feta.jpg"/>
                            </div>
                            <div className="products__text">Tomato & feta pesto bites</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/appetizers/jalapeno-crisps.jpg"/>
                            </div>
                            <div className="products__text">Jalapeño cheese crisps</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appetizers;