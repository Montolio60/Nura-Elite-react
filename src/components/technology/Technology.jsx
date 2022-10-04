import React from 'react';
import './technology.css';
import TEC1 from '../../assets/Rectangle 11.png';
import TEC2 from '../../assets/Rectangle 12.png';
import TEC3 from '../../assets/Rectangle 13.png';
import TEC4 from '../../assets/Rectangle 14.png';
import TEC5 from '../../assets/Rectangle 15.png';
import TEC6 from '../../assets/Rectangle 16.png';

function Technology() {
  return (
    <section className='technology'>
      <div className="container technology__container">
        <h2 className='technology__title'>Технология строения</h2>
        <div className="technology__content">
          <div className="technology__content-block1">
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC1} alt="" className='tec1' />
            </div>
            <div className="technology__text">
            <h4>Конструкция стены</h4>
            <p>
            Двойная кладка из жжённого красного кирпича - 38/40 см, утепление минеральной плитой - 10 см., и облицовка HPL и ФБЦ панелью
            </p>
            </div>
          </article>
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC3} alt="" className='tec3' />
            </div>
            <div className="technology__text">
            <h4>Конструкция двери</h4>
            <p>
            Технология IZO TERMO. <br/>
Двери не соприкасаются с наружными. Между ними расположен изолятор - щит из португальского пробкового дуба толщиной в 8 мм. IZO TERMO устраняет “мостик холода” и не дает теплу уходить из дома. С этой технологией вам не нужен тамбур и вторая дверь.            </p>
            </div>
          </article>
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC5} alt="" className='tec5'/>
            </div>
            <div className="technology__text">
            <h4>Конструкция Фасада</h4>
              <p>
                HPL панель - это высококачественная строительная продукция для долговечной облицовки фасада.
                Стойкость на погодные воздействия +180 с/ -180с с высоким эффектом защиты от атмосферных воздействий.
                Данная защита обеспечивается за счет применения акрилополиуретановых смол с двойным отверждением.
                Относится к экологичным материалам.
              </p>    
            </div>             
            </article>
          </div>
          <div className="technology__content-block2">
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC2} alt="" className='tec2'/>
            </div>
           <div className="technology__text">
           <h4>Конструкция окна</h4>
            <p>
            Высокая экологичность, безопасность, надёжность и долговечность, усиленная теплоизолирующая способность, которая обеспечивается пятикамерным строением профиля с тройным остеклением и шумоизоляцией (система Helios рассчитана на стеклопакеты толщиной 44 мм с воздушной прослойкой в 16 мм, проходя через которые низкочастотные шумы теряют свою интенсивность, что очень ценят жители) по технологии FUNKE
            </p>
           </div>
          </article>
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC4} alt="" className='tec4'/>
            </div>
           <div className="technology__text">
           <h4>Конструкция кровли</h4>
            <p>
            Гибкая черепица ТЕХНОНИКОЛЬ SHINGLAS - это гарантия комфорта и безопасности вашего дома. Дома с кровлей из гибкой черепицы ТЕХНОНИКОЛЬ SHINGLAS очаровывают своей гармонией, изяществом. Коллекции отличаются разнообразием форм и расцветок.            </p>
           </div>
          </article>
          <article className='technology__item'>
            <div className="technology__image">
              <img src={TEC6} alt="" className='tec6'/>
            </div>
            <div className="technology__text">
            <h4>ФБЦ</h4>
            <p>
              ФБЦ - это уникальный и высококачественный строительный материал для долговечной облицовки фасада.<br/>
              Высокая морозостойкость, пожаробезопасность, хорошая звуко- и теплоизоляция, герметичность, повышенная прочность, погодоустойчивость. <br/>
              Безопасна как для человека, так и для окружающей среды. Они не содержат асбест, состоят из экологически чистых натуральных компонентов: 82-85% цемента, древесное волокно, добавки для снижения веса, кремнийорганические соединения         
            </p>   </div>       
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology