import React from 'react';
import './benefits.css';
import IMG1 from '../../assets/benefits1.png';
import BN1 from '../../assets/benefit 1.png';
import BN2 from '../../assets/benefit 2.png';
import BN3 from '../../assets/benefit 3.png';
import BN4 from '../../assets/benefit 4.png';

function Benefits() {
  return (
    <section className='benefits'>
      <div className="container benefits__container">
         <h2 className='benefits__title'>Почему NURA ELITE?</h2>
         <div className="benefits__content">
            <div className="benefits__image">
               <div className="benefits__image-wrap">
               <img src={IMG1} alt="" />
               </div>              
            </div>
            <div className="benefits__text">
               <article className='benefit'>
                  <div className="benefit__icon">
                     <img src={BN1} alt="" />
                  </div>
                  <div >
                  <h4>Энергоэффектиность</h4>
                  <p>Дома сохраняют тепло зимой и прохладу летом</p>
                  </div>
               </article>
               <article className='benefit'>
                  <div className="benefit__icon">
                     <img src={BN2} alt="" />
                  </div>
                  <div>
                  <h4>Экологически чистый район</h4>
                  <p>Городок расположен рядом с лесополосой и к. Нура-Есиль</p>
                  </div>
               </article>
               <article className='benefit'>
                  <div className="benefit__icon">
                     <img src={BN3} alt="" />
                  </div>
                 <div>
                 <h4>Безопасность</h4>
                  <p>Закрытый городок с круглосуточным видеонаблюдением</p>
                 </div>
               </article>
               <article className='benefit'>
                  <div className="benefit__icon">
                     <img src={BN4} alt="" />
                  </div>
                  <div>
                  <h4>Коммуникации</h4>
                  <p>Централизованное водоснабжение, энергоснабжение и канализация.<br/><br/>
                     Отопительная система и горячая вода - это один общий газгольдер на весь городок, функционирующий за счет газа.</p>
                  </div>
               </article>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Benefits