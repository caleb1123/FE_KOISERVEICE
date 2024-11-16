import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./Testimonials.scss";

import veterian1 from "../../../assets/home/veterian1.jpg";
import veterian2 from "../../../assets/home/veterian2.jpg";
import veterian3 from "../../../assets/home/veterian3.jpg";

const testimonials = [
  {
    name: "Anh Nguyễn Văn H",
    feedback:
      "Dịch vụ tại trung tâm thật tuyệt vời! Cá Koi của tôi đã khỏe mạnh trở lại sau khi được điều trị ở đây.",
    image: veterian1,
    rating: 5,
  },
  {
    name: "Chị Trần Thị M",
    feedback:
      "Đội ngũ bác sĩ rất tận tâm và chuyên nghiệp. Tôi rất hài lòng với dịch vụ tư vấn trực tuyến.",
    image: veterian2,
    rating: 4.5,
  },
  {
    name: "Anh Lê Văn T",
    feedback:
      "Trung tâm đã giúp tôi cải thiện chất lượng hồ cá tại nhà. Rất đáng tin cậy!",
    image: veterian3,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Phản Hồi Từ Khách Hàng
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Chúng tôi tự hào về những phản hồi tích cực từ khách hàng của mình.
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="testimonial-card">
                <CardContent>
                  <div className="testimonial-header">
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.image.default}
                      className="testimonial-avatar"
                    />
                    <div>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Rating
                        value={testimonial.rating}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    "{testimonial.feedback}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
