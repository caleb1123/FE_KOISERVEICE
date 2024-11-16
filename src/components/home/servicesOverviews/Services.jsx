import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";

// Import hình ảnh hoặc biểu tượng cho các dịch vụ
import serviceImage1 from "../../../assets/home/service1.jpg";
import serviceImage2 from "../../../assets/home/service2.jpg";
import serviceImage3 from "../../../assets/home/service3.jpg";

const services = [
  {
    title: "Tư vấn trực tuyến",
    description:
      "Nhận tư vấn từ các chuyên gia của chúng tôi mọi lúc, mọi nơi.",
    image: serviceImage1,
    link: "/services/tu-van-truc-tuyen",
  },
  {
    title: "Đánh giá chất lượng hồ cá tại nhà",
    description: "Chúng tôi đến tận nơi để kiểm tra và đánh giá hồ cá của bạn.",
    image: serviceImage2,
    link: "/services/danh-gia-ho-ca",
  },
  {
    title: "Điều trị bệnh cho cá",
    description: "Dịch vụ điều trị và chăm sóc sức khỏe cho cá Koi của bạn.",
    image: serviceImage3,
    link: "/services/dieu-tri-benh",
  },
];

const ServicesOverview = () => {
  return (
    <section className="services-overview">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Dịch Vụ Của Chúng Tôi
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Chúng tôi cung cấp các dịch vụ chuyên nghiệp để đáp ứng mọi nhu cầu
          của bạn.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="service-card">
                <CardMedia
                  component="img"
                  alt={service.title}
                  height="180"
                  image={service.image}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={service.link}
                  >
                    Xem Chi Tiết
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServicesOverview;
