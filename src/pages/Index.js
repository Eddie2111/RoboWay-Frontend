import './App.css';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

 // swiper styles
    import 'swiper/css';
    import 'swiper/css/autoplay';

// component imports    
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import Footer   from './components/Footer' ;

function Index() {
    const metaCoverLink = "https://raw.githubusercontent.com/Eddie2111/RoboWay-Frontend/main/public/Assets/metaCover.png";
    const img1Link =      "https://raw.githubusercontent.com/Eddie2111/RoboWay-Frontend/main/public/Assets/img1.jpg";
    const img2Link =      "https://raw.githubusercontent.com/Eddie2111/RoboWay-Frontend/main/public/Assets/img2.jpg";
    const gameLink =      "https://raw.githubusercontent.com/Eddie2111/RoboWay-Frontend/main/public/Assets/game.jpg";
  return (
    <>
    <SEO title={"Welcome"}/>
    <Navbar/>
    
    <Swiper className='swiper' modules={[ Pagination, Autoplay]} slidesPerView={1} navigation zIndex={-1101} autoplay={{ delay: 3000 }} pagination={{ clickable: false }}>
         <SwiperSlide><img className="img" src={metaCoverLink} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img1Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img2Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={gameLink} alt="" /></SwiperSlide>
    </Swiper>

    <SectionA/>
    
    <SectionB/>

    <Footer/>
    </>

  );
}

export default Index;