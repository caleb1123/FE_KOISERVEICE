import { DatePicker, Form, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { doctorsMock, timeSlotsMock } from "../MockData"; // Giả sử bạn có mock data

const { Option } = Select;

const DoctorAndDateForm = ({ initialData, setFormInstance, onSubmit }) => {
  const [form] = Form.useForm();
  const [timeSlots, setTimeSlots] = useState([]); // Khung giờ tư vấn khả dụng

  // Gửi instance của form lên parent để xử lý submit bên ngoài
  React.useEffect(() => {
    setFormInstance(form);
  }, [form, setFormInstance]);

  // Khi component được load, điền thông tin từ initialData (nếu có)
  React.useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
      if (initialData.selectedDoctor) {
        setTimeSlots(timeSlotsMock[initialData.selectedDoctor] || []); // Đảm bảo timeSlots luôn là mảng
      }
    }
  }, [initialData, form]);

  // Khi người dùng chọn bác sĩ, hiển thị các khung giờ tư vấn khả dụng
  const handleDoctorChange = (value) => {
    form.setFieldsValue({ timeSlot: null }); // Reset lại khung giờ nếu đổi bác sĩ
    const selectedTimeSlots = timeSlotsMock[value] || []; // Kiểm tra giá trị hợp lệ
    setTimeSlots(selectedTimeSlots); // Đảm bảo timeSlots luôn là mảng
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialData}
      onFinish={onSubmit}
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <Form.Item
        label="Chọn bác sĩ"
        name="selectedDoctor"
        rules={[{ required: true, message: "Vui lòng chọn bác sĩ" }]}
      >
        <Select placeholder="Chọn bác sĩ" onChange={handleDoctorChange}>
          {doctorsMock.map((doctor) => (
            <Option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialty}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Chọn ngày kiểm tra"
        name="selectedDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày kiểm tra" }]}
      >
        <DatePicker
          format="DD/MM/YYYY"
          disabledDate={(current) => current && current < moment().endOf("day")}
          placeholder="Chọn ngày"
        />
      </Form.Item>

      <Form.Item
        label="Chọn khung giờ tư vấn"
        name="timeSlot"
        rules={[{ required: true, message: "Vui lòng chọn khung giờ tư vấn" }]}
      >
        <Select
          placeholder="Chọn khung giờ"
          disabled={timeSlots.length === 0} // Bảo đảm mảng timeSlots luôn hợp lệ
        >
          {timeSlots.map((time, index) => (
            <Option key={index} value={time}>
              {time}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default DoctorAndDateForm;
