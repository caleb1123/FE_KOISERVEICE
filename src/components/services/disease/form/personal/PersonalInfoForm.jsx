import { Form, Input, Radio } from "antd";
import React, { useEffect } from "react";

const PersonalInfoForm = ({ formDataStepTwo, setFormDataStepTwo }) => {
  const handleChangeData = (e) => {
    const { value, name } = e.target;
    setFormDataStepTwo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form layout="vertical" style={{ maxWidth: "600px", margin: "auto" }}>
      <Form.Item
        label="Họ và tên"
        required="true"
        rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
      >
        <Input
          value={formDataStepTwo.name}
          name="name"
          placeholder="Nhập họ và tên của bạn"
          onChange={(e) => handleChangeData(e)}
        />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        required="true"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại của bạn" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Số điện thoại phải có 10 chữ số",
          },
        ]}
      >
        <Input
          value={formDataStepTwo.phone}
          name="phone"
          placeholder="Nhập số điện thoại"
          onChange={(e) => handleChangeData(e)}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        required="true"
        rules={[
          { required: true, message: "Vui lòng nhập email của bạn" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input
          value={formDataStepTwo.email}
          name="email"
          placeholder="Nhập email của bạn"
          onChange={(e) => handleChangeData(e)}
        />
      </Form.Item>

      {/* <Form.Item
        label="Chọn loại khám"
        name="visitType"
        rules={[{ required: true, message: "Vui lòng chọn loại khám" }]}
      >
        <Radio.Group
          defaultValue={formDataStepTwo.isVisit}
          onChange={(e) =>
            setFormDataStepTwo((prev) => ({
              ...prev,
              isVisit: e.target.value,
            }))
          }
        >
          <Radio value="center">Khám tại trung tâm</Radio>
          <Radio value="home">Khám tại nhà</Radio>
        </Radio.Group>
      </Form.Item>

      {formDataStepTwo.isVisit === "home" && (
        <Form.Item
          label="Địa chỉ khám tại nhà"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input
            name="address"
            placeholder="Nhập địa chỉ của bạn"
            onChange={(e) => handleChangeData(e)}
          />
        </Form.Item>
      )} */}

      <Form.Item
        label="Ghi chú"
        rules={[{ message: "Bạn có thể nhập ghi chú thêm" }]}
      >
        <Input.TextArea
          name="note"
          placeholder="Nhập ghi chú hoặc yêu cầu bổ sung"
          rows={4}
          onChange={(e) => handleChangeData(e)}
        />
      </Form.Item>
    </Form>
  );
};

export default PersonalInfoForm;
