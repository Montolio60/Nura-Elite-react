import React from 'react';
import './payment.css';
import Payment1 from '../../assets/payment1.png';
import Payment2 from '../../assets/payment2.png';
import Payment3 from '../../assets/payment3.png';
import Payment4 from '../../assets/payment4.png';

function Payment() {
  return (
    <section className='payment'>
      <div className="container payment__container">
         <h2 className="payment__title">Способы оплаты</h2>
         <div className="payment__content">
            <article className='payment__item'>
               <div className="payment__image">
                  <img src={Payment1} alt="ЖилСтройСберБанк" />
               </div>
               <h5>Получение займа через АО “ЖилСтройСберБанк”</h5>
            </article>
            <article className='payment__item'>
               <div className="payment__image">
                  <img src={Payment2} alt="0%" />
               </div>
               <h5>Получение беспроцентной рассрочки от застройщика NURA ELITE</h5>
            </article>
            <article className='payment__item'>
               <div className="payment__image">
                  <img src={Payment3} alt="Орда" />
               </div>
               <h5>Казахстанская Ипотечная Компания «Орда»</h5>
            </article>
            <article className='payment__item'>
               <div className="payment__image">
                  <img src={Payment4} alt="Биткоин"/>
               </div>
               <h5>Оплата криптовалютой (Биткоин)</h5>
            </article>
         </div>
      </div>
    </section>
  )
}

export default Payment