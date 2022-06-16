import React from 'react';
import {Image} from "react-bootstrap";

const Soups = () => {
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
                        <h2 className="section__title">Soups</h2>
                        <h3 className="section__subtitle">Paradise on your plate</h3>
                        <div className="section__text recipes">
                            <p>Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold),
                                that is made by combining ingredients of meat or vegetables with stock, milk, or water.
                                Hot soups are additionally characterized by boiling solid ingredients in liquids
                                in a pot until the flavors are extracted, forming a broth. Soups are similar to stews,
                                and in some cases there may not be a clear distinction between the two; however,
                                soups generally have more liquid (broth) than stews.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/mushroom-soup.jpg"/>
                            </div>
                            <div className="products__text">Mushroom soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/cauliflower-soup.jpg"/>
                            </div>
                            <div className="products__text">Cauliflower soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/tomato-soup.jpg"/>
                            </div>
                            <div className="products__text">Tomato soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/bouillabaisse.jpg"/>
                            </div>
                            <div className="products__text">Bouillabaisse</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/cabbage-soup.jpg"/>
                            </div>
                            <div className="products__text">Cabbage Soup</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/soups/clam-chowder.jpg"/>
                            </div>
                            <div className="products__text">Clam chowder</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Soups;