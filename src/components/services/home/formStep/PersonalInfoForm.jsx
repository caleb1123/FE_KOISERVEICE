import { Form, Input } from "antd";
import React, { useEffect } from "react";

const CombinedForm = ({ formData, setFormInstance, onSubmit }) => {
  const [form] = Form.useForm();

  // Gửi instance của form lên parent để xử lý submit bên ngoài
  useEffect(() => {
    if (setFormInstance) {
      setFormInstance(form);
    }
  }, [form, setFormInstance]);

  // Điền lại dữ liệu form nếu có
  useEffect(() => {
    if (formData) {
      form.setFieldsValue(formData);
    }
  }, [formData, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit} // Submit form khi người dùng hoàn thành
      style={{ maxWidth: "600px", margin: "auto" }} // Căn giữa form
    >
      {/* Thông tin cá nhân */}
      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
      >
        <Input placeholder="Nhập họ và tên của bạn" />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại của bạn" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Số điện thoại phải có 10 chữ số",
          },
        ]}
      >
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email của bạn" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input placeholder="Nhập email của bạn" />
      </Form.Item>

      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
      >
        <Input placeholder="Nhập địa chỉ của bạn" />
      </Form.Item>

      {/* Thông tin hồ cá Koi */}
      <Form.Item
        label="Tình trạng hồ cá Koi"
        name="pondCondition"
        rules={[{ required: true, message: "Vui lòng nhập tình trạng hồ cá" }]}
      >
        <Input.TextArea
          placeholder="Mô tả tình trạng hiện tại của hồ cá Koi"
          rows={4}
        />
      </Form.Item>
      <Form.Item
        label="Số lượng cá Koi"
        name="numberOfKoi"
        rules={[{ required: true, message: "Vui lòng nhập số lượng cá Koi" }]}
      >
        <Input placeholder="Nhập số lượng cá Koi" />
      </Form.Item>
      <Form.Item
        label="Thời gian xây dựng/cải tạo hồ"
        name="constructionTime"
        rules={[
          { required: true, message: "Vui lòng nhập thời gian xây dựng hồ" },
        ]}
      >
        <Input placeholder="Nhập thời gian xây dựng/cải tạo hồ" />
      </Form.Item>

      {/* Ghi chú thêm */}
      <Form.Item
        label="Ghi chú"
        name="notes"
        rules={[{ message: "Bạn có thể nhập ghi chú thêm" }]}
      >
        <Input.TextArea
          placeholder="Nhập ghi chú hoặc yêu cầu bổ sung"
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default CombinedForm;
