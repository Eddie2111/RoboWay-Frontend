import './App.css';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

 // swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css/autoplay';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import Footer from './components/Footer' ;
 // swiper styles

function Index() {
  
  return (
    <>
    <SEO title={"Welcome"}/>
    <Navbar/>
    
    <Swiper className='swiper' modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} navigation zIndex={-1101} autoplay={{ delay: 3000 }} pagination={{ clickable: false }}>
         <SwiperSlide><img className="img" src="assets/metaCover.png" alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src="assets/img1.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src="assets/game.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src="assets/img2.jpg" alt="" /></SwiperSlide>
    </Swiper>

    <SectionA/>
    
    <SectionB/>

    <Footer/>
    </>

  );
}

export default Index;