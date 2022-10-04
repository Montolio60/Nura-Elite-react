import React from 'react';
import './location.css';
import Map from '../../assets/location-map.png';

function Location() {
  return (
    <section className='location'>
      <div className="container location__container">
         <div className="location__text">
            <h2>Локация</h2>
            <p>Закрытый коттеджный городок Nura Elite расположен в элитном и перспективном районе столицы, рядом с зелёным поясом по соседству с Vella Village.</p>
            <p> Nura Elite - это прекрасное пространство для уединения и активной семейной жизни в гармонии с природой, без городского шума с удобной транспортной развязкой.</p>
         </div>
         <div className="location__map">
          <div className="location__map-wrap">
          <img src={Map} alt="" />
          </div>
         </div>
      </div>
    </section>
  )
}

export default Location