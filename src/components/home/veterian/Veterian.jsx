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
import "./Veterian.scss";

// Import hình ảnh của các bác sĩ
import veterian1 from "../../../assets/home/veterian1.jpg";
import veterian2 from "../../../assets/home/veterian2.jpg";
import veterian3 from "../../../assets/home/veterian3.jpg";

const veterinarians = [
  {
    name: "Dr. Nguyễn Văn A",
    specialization: "Chuyên gia về bệnh cá Koi",
    image: veterian1,
    link: "/doctors/nguyen-van-a",
  },
  {
    name: "Dr. Trần Thị B",
    specialization: "Chuyên gia về dinh dưỡng cá Koi",
    image: veterian2,
    link: "/doctors/tran-thi-b",
  },
  {
    name: "Dr. Lê Văn C",
    specialization: "Chuyên gia về môi trường hồ cá",
    image: veterian3,
    link: "/doctors/le-van-c",
  },
  {
    name: "Dr. Nguyễn Văn A",
    specialization: "Chuyên gia về bệnh cá Koi",
    image: veterian1,
    link: "/doctors/nguyen-van-a",
  },
  {
    name: "Dr. Trần Thị B",
    specialization: "Chuyên gia về dinh dưỡng cá Koi",
    image: veterian2,
    link: "/doctors/tran-thi-b",
  },
  {
    name: "Dr. Lê Văn C",
    specialization: "Chuyên gia về môi trường hồ cá",
    image: veterian3,
    link: "/doctors/le-van-c",
  },
];

const Veterian = () => {
  return (
    <section className="featured-veterinarians">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Đội Ngũ Bác Sĩ Thú Y
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Gặp gỡ những chuyên gia hàng đầu của chúng tôi trong lĩnh vực chăm sóc
          cá Koi.
        </Typography>
        <Grid container spacing={4}>
          {veterinarians.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="doctor-card">
                <CardMedia
                  component="img"
                  alt={doctor.name}
                  height="300"
                  image={doctor.image}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {doctor.specialization}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={doctor.link}
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

export default Veterian;
