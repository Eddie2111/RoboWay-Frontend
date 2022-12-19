import './App.css';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Index() {
    const onImage = {
        marginTop: "-18px",
        height:"80px",
        width:"230px",
        marginLeft:"-50px",
        background: "rgba(255, 255, 255, 0.23)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5.8px)",
        webkitBackdropFilter: "blur(5.8px)",
        border: "1px solid rgba(255, 255, 255, 0.64)",
    }
  
  return (
    <>
    <SEO title={"Welcome"}/>
    <Navbar/>
    <Swiper
    className='swiper'
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      zIndex={-1101}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: false }}
    >
         <SwiperSlide><img className="img" src="./img1.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src="game.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src="img2.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
    </>

  );
}

export default Index;