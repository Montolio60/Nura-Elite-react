import React from 'react';
import './advantages.css';
import ADV1 from '../../assets/advantage 1.png';
import ADV2 from '../../assets/advantage 2.png';
import ADV3 from '../../assets/advantage 3.png';
import ADV4 from '../../assets/advantage 4.png';
import ADV5 from '../../assets/advantage 5.png';
import ADV6 from '../../assets/advantage 6.png';
import ADV7 from '../../assets/advantage 7.png';
import ADVM from '../../assets/advantage-main.jpg';

function Advantages() {
  return (
    <section className='advantages'>
      <div className="advantages__container">
         <h2 className="advantages__title">Основные преимущества городка</h2>
         <div className="advantages__content advantage">
            <article className='advantage__item ad1'>
               <div className="advantage__icon"><img src={ADV1} alt="" /></div>
               <p>Выгодное месторасположение</p>
            </article>
            <article className='advantage__item ad2'>
               <div className="advantage__icon"><img src={ADV2} alt="" /></div>
               <p>Охраняемая территория</p>
            </article>
            <article className='advantage__item ad3'>
               <div className="advantage__icon"><img src={ADV3} alt="" /></div>
               <p>Городок по периметру ограждён 3-метровым забором, оснащён системой видеонаблюдения 24/7</p>
            </article>
            <article className='advantage__item ad4'>
               <div className="advantage__icon"><img src={ADV4} alt="" /></div>
               <p>Здесь вы почувствуете уединенность, безопасность и комфорт</p>
            </article>
            <img src={ADVM} alt="" className='advantage__main-img'/>
            <article className='advantage__item ad5'>
               <div className="advantage__icon"><img src={ADV5} alt="" /></div>
               <p>Индивидуальные участки ограждены 2-метровыми заборами</p>
            </article>
            <article className='advantage__item ad6'>
               <div className="advantage__icon"><img src={ADV6} alt="" /></div>
               <p>Cобственное приложение</p>
            </article>
            <article className='advantage__item ad7'>
               <div className="advantage__icon"><img src={ADV7} alt="" /></div>
               <p>Каждому владельцу коттеджа даётся возможность на своем земельном участке возводить дополнительные застройки: баню, сауну, летнюю кухню и др.</p>
            </article>
         </div>
      </div>
    </section>
  )
}

export default Advantages