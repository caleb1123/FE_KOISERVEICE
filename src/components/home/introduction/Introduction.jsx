import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Introduction.scss";

import introImage from "../../../assets/home/intro-image.jpg";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="intro-image">
              <img src={introImage} alt="Giới thiệu về trung tâm" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Về Chúng Tôi
            </Typography>
            <Typography variant="body1" paragraph>
              Tại Koi Veterinary Service Center, chúng tôi cam kết mang đến dịch
              vụ chăm sóc sức khỏe tốt nhất cho cá Koi của bạn. Với đội ngũ
              chuyên gia giàu kinh nghiệm và đam mê, chúng tôi luôn đặt chất
              lượng và sự hài lòng của khách hàng lên hàng đầu.
            </Typography>
            <Typography variant="body1" paragraph>
              Sứ mệnh của chúng tôi là cung cấp giải pháp toàn diện cho việc
              chăm sóc và điều trị cá Koi, giúp chúng sống khỏe mạnh và tươi đẹp
              trong môi trường của bạn.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default IntroductionSection;
