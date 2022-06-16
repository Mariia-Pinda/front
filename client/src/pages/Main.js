import React from 'react';
import '../components/assets/css/style.css';

function Main() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">Cooking blog</div>
                        <nav className="nav index" id="nav">
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
            <div className="intro" id="intro">
                <div className="container">
                    <div id="intro__inner">
                        <h1 className="intro__title">Cooking blog</h1>
                        <h2 className="intro__subtitle">Cooking with passion. Cooking with love
                            <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"/>
                        </h2>
                        <a className="btn" href="Menu">Menu</a>
                    </div>
                </div>
                <div className="slider">
                    <div className="container">
                        <div className="slider__inner">
                            <div className="slider__item active">
                                <span className="slider__num">01</span>
                                <span className="slider__text">Intro</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">02</span>
                                <span className="slider__text">My blog</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">03</span>
                                <span className="slider__text">Saved</span>
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">04</span>
                                <span className="slider__text">Contacts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default Main;