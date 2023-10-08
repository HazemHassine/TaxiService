import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import FormContainer from './components/form/FormContainer';
import CarouselContainer from './components/carousel/CarouselContainer';
import BookingContainer from './components/bookingform/BookingContainer';
import AboutUsContainer from './components/aboutus/AboutUsContainer';
import BrandsContainer from './components/brandssponsoring/BrandsContainer';
import BookTaxiSimpleContainer from './components/booktaxisimple/BookTaxiSimpleContainer';
import FeaturesContainer from './components/features/FeaturesContainer';
import WhyChooseUsContainer from './components/whychooseus/WhyChooseUsContainer';
import audi from "./assets/images/car_brands/audi-logo.png";
import bmw from "./assets/images/car_brands/bmw-logo.png";
import fiat from "./assets/images/car_brands/fiat-logo.png";
import ford from "./assets/images/car_brands/ford-logo.png";
import hyundai from "./assets/images/car_brands/hyundai-logo.png";
import mercedes from "./assets/images/car_brands/mercedes-logo.png";
import nissan from "./assets/images/car_brands/nissan-logo.png";
import volkswagen from "./assets/images/car_brands/vw-logo.png";
import ScrollToTop from './components/buttons/ScrollToTop';
import VideoContainer from './components/video/VideoContainer';
import FooterContainer from './components/footer/FooterContainer';
import MockUpContainer from './components/mockup/MockUpContainer';

function App() {
  const images = [audi, bmw, fiat, ford, hyundai, mercedes, nissan, volkswagen];

  return (
    <div className='overflow-hidden'>
      <nav className='z-[100] static md:fixed'>
        <Navbar />
      </nav>
      <section className="md:mt-[5rem] mt-0">
        <CarouselContainer />
      </section>
      <section>
        <div className="md:-translate-y-[30%] -translate-y-[12vh] flex justify-center">
          <BookingContainer className="mx-auto" />
        </div>
      </section>
      <section className='flex justify-center'>
        <AboutUsContainer className="mx-auto" />
      </section>
      <section className='flex justify-center'>
        <BrandsContainer images={images} />
      </section>
      <section className='flex justify-center'>
        <BookTaxiSimpleContainer />
      </section>
      <section className='flex justify-center'>
        <FeaturesContainer />
      </section>
      <section className='flex justify-center'>
        <VideoContainer />
      </section>
      <section className='flex justify-center'>
        <WhyChooseUsContainer />
      </section>
      <section className='flex justify-center'>
        <MockUpContainer />
      </section>
      <section>
        <FooterContainer />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;