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
import ScrollToTop from './components/buttons/ScrollToTop';
import VideoContainer from './components/video/VideoContainer';
import FooterContainer from './components/footer/FooterContainer';
import MockUpContainer from './components/mockup/MockUpContainer';
import React, { useState, useRef } from "react";
import { ToastContainer } from 'react-toastify';
import { Element } from 'react-scroll';



function App() {
  const subsubsubComponentRef = useRef();
  // const images = [audi, bmw, fiat, ford, hyundai, mercedes, nissan, volkswagen];
  return (
    <div className='overflow-hidden'>
      <ToastContainer />

      <nav className='z-[100] static md:fixed'>
        <Navbar />
      </nav>
      <section className="md:mt-[5rem] mt-0">
        <CarouselContainer />
      </section>
      <section>
        <div className="md:-translate-y-[30%] -translate-y-[12vh] flex justify-center">
          <Element name='bookingcontainer' />

          <BookingContainer className="mx-auto" />
        </div>
      </section>
      <section className='flex justify-center'>
        <AboutUsContainer className="mx-auto" />
      </section>
      {/* <section className='flex justify-center'>
        <BrandsContainer images={images} />
      </section> */}
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