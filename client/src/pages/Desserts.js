import React from 'react';
import {Image} from "react-bootstrap";

const Desserts = () => {
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
                        <h2 className="section__title">Desserts</h2>
                        <h3 className="section__subtitle">Life is short, make it sweet</h3>
                        <div className="section__text recipes">
                            <p>Dessert, the last course of a meal. In the United States dessert is likely to consist of
                                pastry, cake, ice cream, pudding, or fresh or cooked fruit. British meals traditionally
                                end with nuts, fruits, and port or other dessert wine, while French practice is to
                                end with fruit, cheese, and wine; in both Britain and France, a more elaborate meal
                                would include a sweet course preceding the dessert offerings. In Spain, Portugal,
                                and Latin American countries, desserts of flan (a baked caramel custard) are ubiquitous.
                                Other rich sweets based on eggs, milk, and fruits also are preferred.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <a href="TastyPancakes">
                                    <Image width={300} src="../components/assets/images/recipe/desserts/pancakes.jpg"/>
                                </a>
                            </div>
                            <div className="products__text">Tasty pancakes</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/desserts/cheesecake.jpg"/>
                            </div>
                            <div className="products__text">New York cheesecake</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/desserts/rice-pudding.jpg"/>
                            </div>
                            <div className="products__text">Rice pudding</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/desserts/strawberry-mousse.jpg"/>
                            </div>
                            <div className="products__text">Strawberry mousse</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/desserts/chocolate-fondant.jpg"/>
                            </div>
                            <div className="products__text">Chocolate fondant</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/desserts/microwave-mug-cake.jpg"/>
                            </div>
                            <div className="products__text">Microwave mug cake</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Desserts;