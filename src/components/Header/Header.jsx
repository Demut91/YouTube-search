import React from "react";
import { Menu } from "antd";
import { NavLink} from "react-router-dom";
import "./Header.css";
import logo from "../../img/sibdev-logo.svg";

function Header({ quit }) {

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="логотип" className="header__logo"></img>
        <Menu          
          mode="horizontal"         
        >
          <Menu.Item key="search">
            <NavLink to="/">
              Поиск
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/">
            <NavLink to="/">
              Избранное
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div>
        <button className="header__button" onClick={quit}>Выйти</button>
      </div>
    </header>
  )
}

export default Header;
