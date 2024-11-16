// src/components/about/About.jsx
import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import doctor1 from "../../assets/home/veterian1.jpg";
import doctor2 from "../../assets/home/veterian2.jpg";
import doctor3 from "../../assets/home/veterian3.jpg";
import "./About.scss";

const { Title, Paragraph } = Typography;

const About = () => {
  const teamMembers = [
    {
      name: "Bác sĩ Nguyễn Văn A",
      role: "Chuyên gia chăm sóc cá Koi",
      image: doctor1,
      description:
        "Có hơn 10 năm kinh nghiệm trong việc chăm sóc và điều trị cá Koi. Đam mê với việc nâng cao chất lượng cuộc sống cho cá Koi của bạn.",
    },
    {
      name: "Bác sĩ Trần Thị B",
      role: "Chuyên viên dinh dưỡng cho cá Koi",
      image: doctor2,
      description:
        "Chuyên về dinh dưỡng và phát triển hồ cá Koi. Luôn tìm kiếm các giải pháp tối ưu để đảm bảo sức khỏe cho cá Koi.",
    },
    {
      name: "Bác sĩ Lê Văn C",
      role: "Chuyên gia xử lý bệnh cho cá Koi",
      image: doctor3,
      description:
        "Chuyên về chẩn đoán và điều trị các bệnh thường gặp ở cá Koi. Cam kết mang lại sự phục hồi nhanh chóng cho cá Koi của bạn.",
    },
  ];

  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="introduction-section">
        <Row justify="center" align="middle">
          <Col xs={24} md={12}>
            <Title className="section-title">
              Về Trung Tâm Thú Y Cá Koi KoiVet
            </Title>
            <Paragraph className="section-description">
              KoiVet là trung tâm thú y chuyên nghiệp, tập trung vào chăm sóc
              sức khỏe và phát triển hồ cá Koi. Với đội ngũ bác sĩ giàu kinh
              nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang lại dịch
              vụ tốt nhất cho cá Koi của bạn.
            </Paragraph>
          </Col>
          {/* <Col xs={24} md={12}>
            <img src={doctor1} alt="About Us" className="intro-image" />
          </Col> */}
        </Row>
      </section>

      <Divider />

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card className="mission-card">
              <Title level={3}>Sứ Mệnh</Title>
              <Paragraph>
                Cung cấp các dịch vụ chăm sóc sức khỏe chất lượng cao cho cá
                Koi, đảm bảo sự hài lòng và an tâm cho khách hàng.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="vision-card">
              <Title level={3}>Tầm Nhìn</Title>
              <Paragraph>
                Trở thành trung tâm thú y hàng đầu về chăm sóc và phát triển hồ
                cá Koi, được khách hàng tin tưởng và lựa chọn.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* Our Team Section */}
      <section className="team-section">
        <Title className="section-title">Đội Ngũ Của Chúng Tôi</Title>
        <Row gutter={[16, 16]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="team-card" hoverable>
                <Card.Meta
                  avatar={
                    <Avatar
                      src={member.image}
                      size={64}
                      icon={<UserOutlined />}
                    />
                  }
                  title={member.name}
                  description={member.role}
                />
                <Paragraph className="team-description">
                  {member.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Divider />

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <Title className="section-title">Tại Sao Chọn Chúng Tôi</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card">
              <SmileOutlined className="feature-icon" />
              <Title level={4}>Chuyên Nghiệp</Title>
              <Paragraph>
                Đội ngũ bác sĩ thú y giàu kinh nghiệm và được đào tạo chuyên sâu
                về chăm sóc cá Koi.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card">
              <SmileOutlined className="feature-icon" />
              <Title level={4}>Trang Thiết Bị Hiện Đại</Title>
              <Paragraph>
                Sử dụng các thiết bị y tế tiên tiến để đảm bảo chất lượng dịch
                vụ và hiệu quả điều trị.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card">
              <SmileOutlined className="feature-icon" />
              <Title level={4}>Dịch Vụ Đa Dạng</Title>
              <Paragraph>
                Cung cấp nhiều loại dịch vụ từ tư vấn trực tuyến, đánh giá hồ
                cá, đến điều trị bệnh tại nhà hoặc trung tâm.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <Divider />
    </div>
  );
};

export default About;
