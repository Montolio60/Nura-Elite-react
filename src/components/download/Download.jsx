import React from 'react';
import './download.css';
import {BiUserCircle} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';

function Download() {
  return (
    <section className='download'>
      <div className="container download__container">
         <h2 className='download__title'>Скачать презентацию</h2>
         <h4 className='download__subtitle'>Оставьте свои контакты и мы вам вышлем</h4>
         <form action="" className='download__form'>
            <div className="download__form-input">
            <BiUserCircle className='download__icon'/>
            <input type="text" name='name' placeholder='Ваше имя'/>
            </div>
            <div className="download__form-input">
               <BsFillTelephoneFill className='download__icon phone'/>
            <input type="phone" name='phone' placeholder='Номер телефона' />
            </div>
            <button>Отправить</button>
         </form>
      </div>
    </section>
  )
}

export default Download