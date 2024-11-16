// src/components/doctors/Doctors.jsx
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Spin, Typography, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Veterian.scss";

const { Title, Paragraph, Text } = Typography;

const Veterian = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch doctors' data from API
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        message.error("Không thể tải thông tin bác sĩ.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="doctors-loading">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="doctors-page">
      <section className="doctors-header">
        <Title level={2}>Đội Ngũ Bác Sĩ Chuyên Nghiệp</Title>
        <Paragraph>
          Đội ngũ bác sĩ của KoiVet được đào tạo chuyên sâu về chăm sóc và điều
          trị cá Koi, cam kết mang lại dịch vụ tốt nhất cho khách hàng.
        </Paragraph>
      </section>

      <section className="doctors-list">
        <Row gutter={[16, 16]}>
          {doctors.map((doctor) => (
            <Col xs={24} sm={12} md={8} key={doctor.id}>
              <Card className="doctor-card" hoverable>
                <Card.Meta
                  avatar={
                    <Avatar
                      src={doctor.image}
                      size={64}
                      icon={!doctor.image && <UserOutlined />}
                    />
                  }
                  title={<Title level={4}>{doctor.name}</Title>}
                  description={
                    <Text type="secondary">{doctor.specialization}</Text>
                  }
                />
                <Paragraph className="doctor-description">
                  {doctor.description}
                </Paragraph>
                <div className="doctor-contact">
                  <Text>
                    <MailOutlined /> {doctor.email}
                  </Text>
                  <br />
                  <Text>
                    <PhoneOutlined /> {doctor.phone}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Veterian;
