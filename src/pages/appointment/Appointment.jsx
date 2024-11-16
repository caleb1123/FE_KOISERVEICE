// src/components/appointments/Appointment.jsx
import { PhoneOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Spin,
  Steps,
  TimePicker,
  Typography,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Appointment.scss";

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Step } = Steps;

const Appointment = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
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

  const steps = [
    {
      title: "Đặt Dịch Vụ",
      content: (
        <Form form={form} layout="vertical">
          <Form.Item
            name="serviceType"
            label="Loại Dịch Vụ"
            rules={[{ required: true, message: "Vui lòng chọn loại dịch vụ!" }]}
          >
            <Select placeholder="Chọn loại dịch vụ">
              <Option value="online-consultation">Tư Vấn Trực Tuyến</Option>
              <Option value="home-evaluation">Đánh Giá Hồ Cá Tại Nhà</Option>
              <Option value="treatment">Điều Trị Bệnh Cho Cá</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="preferredDoctor"
            label="Chọn Bác Sĩ"
            rules={[{ required: false }]}
          >
            <Select placeholder="Chọn bác sĩ (tuỳ chọn)">
              {doctors.map((doctor) => (
                <Option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="appointmentDate"
            label="Ngày Hẹn"
            rules={[{ required: true, message: "Vui lòng chọn ngày hẹn!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="appointmentTime"
            label="Giờ Hẹn"
            rules={[{ required: true, message: "Vui lòng chọn giờ hẹn!" }]}
          >
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tiếp Theo
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Xác Nhận Thông Tin",
      content: (
        <Form
          form={form}
          layout="vertical"
          onFinish={() => setCurrentStep(currentStep + 1)}
        >
          <Form.Item
            name="customerName"
            label="Họ và Tên"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nhập họ và tên của bạn"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Nhập email của bạn" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số Điện Thoại"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Nhập số điện thoại của bạn"
            />
          </Form.Item>

          <Form.Item
            name="koiDetails"
            label="Thông Tin Cá Koi"
            rules={[
              { required: true, message: "Vui lòng nhập thông tin cá Koi!" },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Mô tả về hồ cá Koi của bạn" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tiếp Theo
            </Button>
            <Button
              style={{ marginLeft: "8px" }}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Quay Lại
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Hoàn Tất",
      content: (
        <div className="confirmation">
          <SmileOutlined style={{ fontSize: "48px", color: "#52c41a" }} />
          <Title level={3}>Đặt Lịch Hẹn Thành Công!</Title>
          <Paragraph>
            Cảm ơn bạn đã đặt lịch hẹn. Chúng tôi sẽ liên hệ với bạn sớm nhất có
            thể để xác nhận thông tin.
          </Paragraph>
          <Button type="primary" href="/">
            Quay Về Trang Chủ
          </Button>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="appointment-loading">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="appointment-page">
      <section className="appointment-header">
        <Title level={2}>Đặt Lịch Hẹn</Title>
        <Paragraph>
          Hãy chọn dịch vụ bạn cần và điền thông tin để chúng tôi hỗ trợ bạn tốt
          nhất.
        </Paragraph>
      </section>

      <section className="appointment-steps">
        <Steps current={currentStep} responsive>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </section>

      <section className="appointment-content">
        {steps[currentStep].content}
      </section>
    </div>
  );
};

export default Appointment;
