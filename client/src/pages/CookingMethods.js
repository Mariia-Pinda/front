import React from 'react';
import {Image} from "react-bootstrap";

const CookingMethods = () => {
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
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="section__header">
                                <h2 className="section__title">Cooking Methods</h2>
                                <h3 className="section__subtitle">Create. Enjoy</h3>
                                <div className="section__text">
                                    <p>Dry heat cooking method: broiling and baking.
                                        In this cooking method foods are cooked without the presence of water,
                                        fat, or oil, it only relies on the circulation of hot.</p>
                                    <p>Medium of fat or oil: roasting, frying.
                                        This cooking method is done with different types of fat or oil.</p>
                                    <p>Medium of liquids (Moist heat cooking): boiling, poaching, steaming, stewing,
                                        braising.
                                        Moist heat cooking relies on the presence of liquid or steam to cook food.
                                        The foods that are cooked by this method are usually healthy.</p>
                                </div>
                                <div className="quote__author">Gordon Ramsay</div>
                                <hr/>
                                    <div className="quote">"So when people ask me, ‘What do you think of Michelin?’
                                        I don’t cook for guides. I cook for customers."
                                    </div>
                            </div>
                        </div>
                        <div className="recipes__item products--photos">
                            <table className="recipes--img">
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <a href="broiling-method.html">
                                                <Image width={175} src="../components/assets/images/methods/1.jpg"/>
                                            </a>
                                        </div>
                                        <div className="products__text">Broiling</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/2.jpg"/>
                                        </div>
                                        <div className="products__text">Baking</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/3.jpg"/>">
                                        </div>
                                        <div className="products__text">Roasting</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/4.jpg"/>
                                        </div>
                                        <div className="products__text">Frying</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/5.jpg"/>
                                        </div>
                                        <div className="products__text">Boiling</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <iImage width={175} src="../components/assets/images/methods/6.jpg"/>
                                        </div>
                                        <div className="products__text">Poaching</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/7.jpg"/>
                                        </div>
                                        <div className="products__text">Steaming</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/8.jpg"/>
                                        </div>
                                        <div className="products__text">Stewing</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image width={175} src="../components/assets/images/methods/9.jpg"/>
                                        </div>
                                        <div className="products__text">Braising</div>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookingMethods;