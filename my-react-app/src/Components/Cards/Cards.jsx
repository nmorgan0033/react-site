import React, { useEffect } from 'react'
import './Cards.css'
import pic1 from '../../assets/pexels-pixabay-276663.jpg'
import pic2 from '../../assets/pexels-d-huy-hoang-163344088-10847181.jpg'
import pic3 from '../../assets/pexels-d-huy-hoang-163344088-10847184.jpg'
import pic4 from '../../assets/pexels-heyho-8135267.jpg'
import pic5 from '../../assets/pexels-heyho-8135276.jpg'
import pic6 from '../../assets/pexels-lisa-anna-901356985-19899074.jpg'
import arrow from '../../assets/arrow_forward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Cards = () => {
  return (
    <div className="container1">
       <h2 className="section-title">Featured Properties</h2>
      <div className="card-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic1} alt="Card Image" className="card-image" />
                <p className="badge">For Sale</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic2} alt="Card Image" className="card-image" />
                <p className="badge for-rent">For Rent</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic3} alt="Card Image" className="card-image" />
                <p className="badge">For Sale</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic4} alt="Card Image" className="card-image" />
                <p className="badge">For Sale</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic5} alt="Card Image" className="card-image" />
                <p className="badge">For Sale</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item">
              <a href="#" className="card-link">
                <img src={pic6} alt="Card Image" className="card-image" />
                <p className="badge">For Sale</p>
                <h2 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <span className='btnCard'><img src={arrow} alt="" className="card-button material-symbols-rounded"/></span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Cards
