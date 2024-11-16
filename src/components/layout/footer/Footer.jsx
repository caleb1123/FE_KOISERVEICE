// src/components/layout/Footer/Footer.jsx
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, Row } from 'antd';
import React from 'react';
import './Footer.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Xử lý đăng ký nhận bản tin tại đây (gọi API, validation, v.v.)
  };

  return (
    <AntFooter className="footer">
      <Row gutter={[16, 16]}>
        {/* Thông tin liên hệ */}
        <Col xs={24} sm={12} md={6}>
          <h3>Liên Hệ</h3>
          <p>
            <EnvironmentOutlined /> 123 Đường XYZ, Quận ABC, TP HCM
          </p>
          <p>
            <PhoneOutlined /> +84 123 456 789
          </p>
          <p>
            <MailOutlined /> info@koivet.com
          </p>
        </Col>

        {/* Các liên kết nhanh */}
        <Col xs={24} sm={12} md={6}>
          <h3>Liên Kết</h3>
          <ul>
            <li><a href="/">Trang Chủ</a></li>
            <li><a href="/services">Dịch Vụ</a></li>
            <li><a href="/about">Giới Thiệu</a></li>
            <li><a href="/contact">Liên Hệ</a></li>
          </ul>
        </Col>

        {/* Các liên kết hữu ích */}
        <Col xs={24} sm={12} md={6}>
          <h3>Hỗ Trợ</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/testimonials">Phản Hồi</a></li>
            <li><a href="/shop">Cửa Hàng</a></li>
          </ul>
        </Col>

        {/* Mạng xã hội và Newsletter */}
        <Col xs={24} sm={12} md={6}>
          <h3>Mạng Xã Hội</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
          <h3>Đăng Ký Nhận Tin</h3>
          <Form form={form} name="newsletter" onFinish={onFinish} className="newsletter-form">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input placeholder="Nhập email của bạn" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      {/* Chân trang dưới cùng */}
      <Row>
        <Col span={24}>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Koi Veterinary Service Center. All rights reserved.</p>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;