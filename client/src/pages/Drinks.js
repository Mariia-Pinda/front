import React from 'react';
import {Image} from "react-bootstrap";

const Drinks = () => {
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
                        <h2 className="section__title">Drinks</h2>
                        <h3 className="section__subtitle">Good morning juice?</h3>
                        <div className="section__text recipes">
                            <p>A drink (or beverage) is a liquid intended for human consumption. In addition to their
                                basic function of satisfying thirst, drinks play important roles in human culture.
                                Common types of drinks include plain drinking water, milk, juice, smoothies and soft
                                drinks.
                                Traditionally warm beverages include coffee, tea, and hot chocolate. Caffeinated drinks
                                that contain the stimulant caffeine have a long history. In addition, alcoholic drinks
                                such as wine, beer, and liquor, which contain the drug ethanol, have been part of human
                                culture for more than 8,000 years. Non-alcoholic drinks often signify drinks that would
                                normally contain alcohol, such as beer, wine and cocktails, but are made with a
                                sufficiently
                                low concentration of alcohol by volume. The category includes drinks that have undergone
                                an alcohol removal process such as non-alcoholic beers and de-alcoholized wines.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/dalgona-coffee.jpg"/>
                            </div>
                            <div className="products__text">Dalgona coffee</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/iced-latte.jpg"/>
                            </div>
                            <div className="products__text">Iced latte</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/watermelon-smoothie.jpg"/>
                            </div>
                            <div className="products__text">Watermelon smoothie</div>
                        </div>

                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/honey-lemon-tea.jpg"/>
                            </div>
                            <div className="products__text">Honey and lemon tea</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/limoncello.jpg"/>
                            </div>
                            <div className="products__text">Limoncello</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src="../components/assets/images/recipe/drinks/eggnog.jpg"/>
                            </div>
                            <div className="products__text">Classic eggnog</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Drinks;