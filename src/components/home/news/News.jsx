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
import "./News.scss";

// Import hình ảnh cho các bài viết
import newsImage1 from "../../../assets/home/veterian1.jpg";
import newsImage2 from "../../../assets/home/veterian2.jpg";
import newsImage3 from "../../../assets/home/veterian3.jpg";

const newsArticles = [
  {
    title: "Cách chăm sóc cá Koi vào mùa đông",
    summary:
      "Hướng dẫn chi tiết về cách chăm sóc cá Koi của bạn trong thời tiết lạnh giá.",
    image: newsImage1,
    date: "2023-10-01",
    link: "/news/cach-cham-soc-ca-koi-vao-mua-dong",
  },
  {
    title: "Những bệnh thường gặp ở cá Koi và cách phòng tránh",
    summary:
      "Tìm hiểu về các bệnh phổ biến ở cá Koi và biện pháp phòng ngừa hiệu quả.",
    image: newsImage2,
    date: "2023-09-20",
    link: "/news/nhung-benh-thuong-gap-o-ca-koi",
  },
  {
    title: "Cập nhật công nghệ mới trong chăm sóc cá Koi",
    summary:
      "Khám phá các công nghệ và thiết bị mới giúp việc nuôi cá Koi trở nên dễ dàng hơn.",
    image: newsImage3,
    date: "2023-09-10",
    link: "/news/cong-nghe-moi-trong-cham-soc-ca-koi",
  },
];

const News = () => {
  return (
    <section className="latest-news">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Tin Tức Mới Nhất
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Cập nhật những thông tin và bài viết mới nhất từ chúng tôi.
        </Typography>
        <Grid container spacing={4}>
          {newsArticles.map((article, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="news-card">
                <CardMedia
                  component="img"
                  alt={article.title}
                  height="200"
                  image={article.image}
                />
                <CardContent>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(article.date).toLocaleDateString("vi-VN")}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {article.summary}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={article.link}
                  >
                    Đọc Thêm
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

export default News;
