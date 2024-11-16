import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Carousel.scss";

import koiImages1 from "../../../assets/home/koi_images1.jpg";
import koiImages2 from "../../../assets/home/koi_images2.jpg";

const items = [
  {
    image: koiImages1,
    title: "Chào mừng đến với Koi Veterinary Service Center",
    description:
      "Chúng tôi cung cấp dịch vụ thú y chuyên nghiệp cho cá Koi của bạn.",
    cta: "Xem Dịch Vụ",
    link: "/services",
  },
  {
    image: koiImages2,
    title: "Chăm sóc cá Koi tận tâm",
    description: "Đội ngũ bác sĩ thú y giàu kinh nghiệm và chuyên môn.",
    cta: "Đặt Lịch Hẹn",
    link: "/booking",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
};

const CarouselItem = ({ item }) => {
  return (
    <Paper className="carousel-item">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="carousel-content">
          <Typography variant="h4" component="h2" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.description}
          </Typography>
          <Button variant="contained" color="primary" href={item.link}>
            {item.cta}
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default CarouselComponent;
