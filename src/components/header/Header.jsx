import React from 'react'
import { ALLButton, Container, Messages } from '../../utils/Container'
import "./Header.scss";
import {FiHeart, FiMessageCircle, FiUser} from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Header = () => {
   const location=useLocation();
  return  location.pathname!=="/auth" && (
    <header>

      <Container>
       <div className="header__wrapper d-flex align-items-center gap-3">
       <NavLink className="header__logo" to="/">
          <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=23-02-17" alt="logo" />
        </NavLink>
        <ul className="header__lenguage__select d-flex gap-3">
            <li className="lenguage__select__item">O'Z</li>
            <span>|</span>
            <li className="lenguage__select__item">RU</li>
        </ul>
        <Messages  link="/messages" title="Xabarlar" icon={<FiMessageCircle/>} />
       <Messages  link="/wishlist"  icon={<FiHeart/>} />
       <Messages  link="/auth" title="Xisobingiz" icon={<FiUser/>} />
        <ALLButton link="/jonatish"  title="Reklamani yuboring" classButton="oq"/>
       </div>
      </Container>
    </header>
  )
}

export default Header