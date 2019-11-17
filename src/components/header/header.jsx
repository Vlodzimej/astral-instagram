import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-container">
                <Logo />
            </div>
            <div className="header__menu-container">
                <button className="btn-fill">Войти</button>
                <button className="btn">Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Header;
