import { Form, Input } from "antd";
import React, { useEffect } from "react";

const ConsultationForm = ({ onSubmit, formData, setFormInstance }) => {
  const [form] = Form.useForm(); // Tạo form instance của Ant Design

  // Hàm xử lý khi form được submit
  const handleSubmit = (values) => {
    onSubmit(values); // Gửi thông tin người dùng lên callback onSubmit từ parent component
  };

  // Tự động điền lại form khi quay lại bước này
  useEffect(() => {
    if (formData) {
      form.setFieldsValue(formData); // Điền lại dữ liệu form khi quay lại
    }
    if (setFormInstance) {
      setFormInstance(form); // Truyền instance form lên parent component để submit tự động
    }
  }, [formData, form, setFormInstance]);

  return (
    <div>
      <h2>Điền thông tin cá nhân</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }} // Tạo khoảng giữa để căn giữa form
      >
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập họ tên của bạn" }]}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email của bạn" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại của bạn" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Số điện thoại phải gồm 10 chữ số",
            },
          ]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ConsultationForm;
