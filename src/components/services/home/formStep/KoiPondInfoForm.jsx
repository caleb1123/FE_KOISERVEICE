import { Form, Input } from "antd";
import React from "react";

const { TextArea } = Input;

const KoiPondInfoForm = ({ initialData, setFormInstance }) => {
  const [form] = Form.useForm();

  // Gửi instance của form lên parent để xử lý submit bên ngoài
  React.useEffect(() => {
    setFormInstance(form);
  }, [form, setFormInstance]);

  // Khi component được load, điền thông tin từ initialData (nếu có)
  React.useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData, form]);

  return (
    <div>
      <h2>Điền thông tin về hồ cá Koi và địa chỉ</h2>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialData} // Giá trị khởi tạo cho form (giữ lại khi quay lại step này)
        style={{ maxWidth: "600px", margin: "auto" }} // Đặt form căn giữa
      >
        <Form.Item
          label="Tình trạng hiện tại của hồ cá Koi"
          name="pondCondition"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tình trạng hiện tại của hồ",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Mô tả tình trạng hiện tại của hồ cá Koi"
          />
        </Form.Item>

        <Form.Item
          label="Số lượng cá Koi"
          name="numberOfKoi"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số lượng cá Koi trong hồ",
            },
          ]}
        >
          <Input placeholder="Nhập số lượng cá Koi" />
        </Form.Item>

        <Form.Item
          label="Thời gian xây dựng/cải tạo hồ gần đây"
          name="constructionTime"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập thời gian xây dựng/cải tạo hồ gần đây",
            },
          ]}
        >
          <Input placeholder="Nhập thời gian xây dựng/cải tạo hồ" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ kiểm tra"
          name="address"
          rules={[
            { required: true, message: "Vui lòng nhập địa chỉ kiểm tra hồ" },
          ]}
        >
          <Input placeholder="Nhập địa chỉ cụ thể của hồ cá Koi" />
        </Form.Item>

        <Form.Item label="Ghi chú hoặc yêu cầu bổ sung" name="notes">
          <TextArea
            rows={3}
            placeholder="Nhập ghi chú hoặc yêu cầu bổ sung (không bắt buộc)"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default KoiPondInfoForm;
