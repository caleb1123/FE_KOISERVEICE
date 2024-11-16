import { DatePicker, Form, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getDoctors } from "../../../../services/account.service";

const { Option } = Select;

const DoctorAndDateForm = ({ formDataStepOne, setFormDataStepOne }) => {
  const [timeSlots, setTimeSlots] = useState([
    {
      time: "8h00 - 10h00",
      shiftId: 1,
    },
    {
      time: "11h00 - 13h00",
      shiftId: 2,
    },
    {
      time: "15h00 - 17h00",
      shiftId: 3,
    },
    {
      time: "19h00 - 21h00",
      shiftId: 4,
    },
  ]);

  const [doctors, setDoctors] = useState([]);

  const loadDoctorAvailable = async () => {
    const { dateSelect, shiftId } = formDataStepOne;
    if (dateSelect && shiftId) {
      try {
        const response = await getDoctors(dateSelect, shiftId);
        setDoctors(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    loadDoctorAvailable();
  }, [formDataStepOne.dateSelect, formDataStepOne.shiftId]);

  return (
    <Form layout="vertical" style={{ maxWidth: "600px", margin: "auto" }}>
      <Form.Item
        label="Chọn ngày kiểm tra"
        name="selectedDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày kiểm tra" }]}
      >
        <DatePicker
          format="DD/MM/YYYY"
          disabledDate={(current) => current && current < moment().endOf("day")}
          placeholder="Chọn ngày"
          onChange={(e) =>
            setFormDataStepOne((prev) => ({
              ...prev,
              dateSelect: e?.format("YYYY-MM-DD"),
            }))
          }
        />
      </Form.Item>
      <Form.Item
        label="Chọn khung giờ tư vấn"
        name="timeSlot"
        rules={[{ required: true, message: "Vui lòng chọn khung giờ tư vấn" }]}
      >
        <Select
          placeholder="Chọn khung giờ"
          onChange={(value) =>
            setFormDataStepOne((prev) => ({
              ...prev,
              shiftId: value,
            }))
          }
        >
          {timeSlots.map((el, index) => (
            <Option key={index} value={el.shiftId}>
              {el.time}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Chọn bác sĩ"
        name="selectedDoctor"
        rules={[{ required: true, message: "Vui lòng chọn bác sĩ" }]}
      >
        <Select
          placeholder="Chọn bác sĩ"
          onChange={(value) =>
            setFormDataStepOne((prev) => ({
              ...prev,
              doctorId: value,
            }))
          }
          disabled={!formDataStepOne.dateSelect || !formDataStepOne.shiftId}
        >
          {doctors.map((doctor) => (
            <Option key={doctor.accountId} value={doctor.accountId}>
              {doctor.fullName}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default DoctorAndDateForm;
