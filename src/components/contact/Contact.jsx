import React from 'react';
import './contact.css';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai';
import QR from '../../assets/qr-code.png';
import MAP from '../../assets/Map.png';


function Contact() {
  return (
    <section className='contact'>
      <div className="container contact__container">
         <div className="contact__map">
            <img src={MAP} alt="" />
         </div>
         <div className="contact__content">
            <h2 className='contact__title'>Контакты</h2>
            <h5>ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1</h5>
            <div className="contact__connection">
               <div className="contact__connection-item">
                  <BsTelephone className='connection-phone'/>
                  <span>+7 (700) 001-18-88</span>
               </div>
               <div className="contact__connection-item">
                  <AiOutlineMail className='connection-email'/>
                  <span>info@nuramm.kz</span>
               </div>
               <div className="contact__connection-item">
                  <AiOutlineInstagram className='connection-instagram'/>
                  <span>@nura.premier</span>
               </div>
            </div>
            <div className="contact__qr-code">
               <div className="contact__qr-code-wrap">
                  <img src={QR} alt="" />
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Contact