import React from 'react';
import './header.css';
import Logo from '../../assets/Logo.png';
import {BsTelephone, BsWhatsapp} from 'react-icons/bs'

function Header() {
  const [activeNav, setActiveNav] = React.useState(false);
  return (
    <header>
      <div className="container header__container">
         <div className="header__top">
            <div className="header__logo">
               <img src={Logo} alt="logo" />
            </div>
            <div className="header__nav">
              <div className="header__contact">
                <BsWhatsapp className='icon__whatsapp'/>
              <div className="header__phone">
                <BsTelephone className='icon-phone'/>
                <span>+7 700 001 18 88</span>
              </div>
              </div>
              <div className="header__menu">
              <div className="burger__btn" onClick={()=> setActiveNav(!activeNav)}><span/></div>
             <nav className={!activeNav ? 'menu__body': 'menu__body active' }>
             <ul className='header__menu-list'>
                <li><a href="">О проекте</a></li>
                <li><a href="">Локация</a></li>
                <li><a href="">Преимущества</a></li>
                <li><a href="">Почему мы?</a></li>
                <li><a href="">Способы оплаты</a></li>
                <li><a href="">Контакты</a></li>
              </ul>
             </nav>
              </div>              
            </div>
         </div>
         <div className="header__main">
         <div className="header__content">
          <h1>Элитный коттеджный городок в г. Нур-Султан</h1>
          <button>Скачать презентацию</button>
          <h2>36 коттеджей</h2>
          <div className="header__count-cottage">
            <article>
              <span>3</span>
              <p>коттеджа <br/>368 м2 <br/>
                 на 10 сотках </p>
            </article>
            <article>
              <span>33</span>
              <p>коттеджа <br/>179 м2 <br/>
                  на 5 сотках</p>
            </article>
          </div>
         </div>
         <div className="header__terms">
          <p>
          <span>Строительные работы</span> начались в сентября 2021 года.
          </p>
          <p><span>Срок сдачи</span> коттеджей - I квартал 2022 года</p>
          <p><span>Срок сдачи</span> всего коттеджного городка - II квартал 2022 года</p>
        
         </div>
         </div>
       
      </div>
    </header>
  )
}

export default Header