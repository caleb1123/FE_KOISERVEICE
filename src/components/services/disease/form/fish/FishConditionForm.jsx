import { Form, Input, InputNumber, Select } from "antd";
import React from "react";

const { Option } = Select;

const FishConditionForm = ({ setFormDataStepThree }) => {
  const handleChangeData = (e) => {
    const { value, name } = e.target;
    setFormDataStepThree((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Form layout="vertical" style={{ maxWidth: "600px", margin: "auto" }}>
      <Form.Item
        label="Số lượng cá Koi"
        rules={[{ required: true, message: "Vui lòng chọn loại cá" }]}
      >
        {/* <Select
          placeholder="Chọn loại cá"
          onChange={(value) =>
            setFormDataStepThree((prev) => ({
              ...prev,
              fishType: value,
            }))
          }
        >
          <Option value="Koi">Cá Koi</Option>
          <Option value="Betta">Cá Betta</Option>
          <Option value="Goldfish">Cá Vàng</Option>
          <Option value="Other">Khác</Option>
        </Select> */}
        <InputNumber
          style={{ width: "100wd" }}
          name="fishType"
          onChange={(value) =>
            setFormDataStepThree((prev) => ({
              ...prev,
              fishType: value,
            }))
          }
          placeholder="Nhập số lượng cá Koi"
        />
      </Form.Item>

      <Form.Item
        label="Triệu chứng hoặc tình trạng bệnh"
        rules={[
          { required: true, message: "Vui lòng nhập tình trạng bệnh của cá" },
        ]}
      >
        <Input.TextArea
          rows={4}
          name="fishCondition"
          onChange={(e) => handleChangeData(e)}
          placeholder="Nhập triệu chứng hoặc tình trạng bệnh hiện tại của cá"
        />
      </Form.Item>

      <Form.Item
        label="Thời gian phát hiện bệnh"
        rules={[
          { required: true, message: "Vui lòng nhập thời gian phát hiện bệnh" },
        ]}
      >
        <Input
          placeholder="Ví dụ: 2 ngày, 1 tuần..."
          name="diseaseDuration"
          onChange={(e) => handleChangeData(e)}
        />
      </Form.Item>
    </Form>
  );
};

export default FishConditionForm;
