import { Button, Carousel, Typography } from "antd";
import React from "react";
import "./HeroSection.scss";

import carousel1 from "../../../assets/home/carousel2.webp";
import carousel2 from "../../../assets/home/koi_images2.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel autoplay className="hero-carousel">
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${carousel1})` }}
        >
          <div className="slide-content">
            <Typography.Title level={1} className="hero-title">
              Chào mừng đến với Trung tâm Dịch vụ Thú y Cá Koi
            </Typography.Title>
            <Typography.Paragraph className="hero-description">
              Chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe toàn diện cho cá
              Koi của bạn.
            </Typography.Paragraph>
            <Button type="primary" size="large" className="cta-button">
              Đặt lịch ngay
            </Button>
          </div>
        </div>
        <div className="carousel-slide">
          <div
            className="slide-content"
            style={{ backgroundImage: `url(${carousel2})` }}
          >
            <Typography.Title level={1} className="hero-title">
              Dịch vụ tư vấn trực tuyến với bác sĩ thú y chuyên nghiệp
            </Typography.Title>
            <Typography.Paragraph className="hero-description">
              Liên hệ với chúng tôi để được tư vấn và chăm sóc sức khỏe cho cá
              Koi của bạn một cách tốt nhất.
            </Typography.Paragraph>
            <Button type="primary" size="large" className="cta-button">
              Tư vấn ngay
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default HeroSection;
