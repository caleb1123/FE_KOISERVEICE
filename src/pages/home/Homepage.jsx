// src/components/home/Homepage.jsx
import React, { memo, Suspense } from "react";
import CarouselComponent from "../../components/home/carousel/Carousel";
import IntroductionSection from "../../components/home/introduction/Introduction";
import News from "../../components/home/news/News";
import ServicesOverview from "../../components/home/servicesOverviews/Services";
import Testimonials from "../../components/home/testimonials/Testimonials";
import Veterian from "../../components/home/veterian/Veterian";
import LoadingPage from "../loading/LoadingPage";
import "./Homepage.scss";

const Homepage = memo(() => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="homepage">
        <CarouselComponent />
        <IntroductionSection />
        <ServicesOverview />
        <Veterian />
        <Testimonials />
        <News />
      </div>
    </Suspense>
  );
});

export default Homepage;
