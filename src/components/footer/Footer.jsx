import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
         <nav className='footer__menu'>
            <ul className='footer__list'>
               <li><a href="">Преимущества</a></li>
               <li><a href="">Почему мы?</a></li>
               <li><a href="">Технологии</a></li>
               <li><a href="">Способы оплаты</a></li>
            </ul>
         </nav>
      </div>
    </footer>
  )
}

export default Footer