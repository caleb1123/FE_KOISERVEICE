import { Card, Select } from "antd";
import React, { useEffect, useState } from "react";
import { doctorsMock, timeSlotsMock } from "../MockData";

const { Option } = Select;

const DoctorSelection = ({
  selectedDoctor,
  selectedTime,
  setConsultationDetails,
}) => {
  const [timeSlots, setTimeSlots] = useState([]); // Thời gian khả dụng

  // Hàm xử lý khi chọn bác sĩ
  const handleDoctorChange = (doctorId) => {
    const selectedDoc = doctorsMock.find((doctor) => doctor.id === doctorId);
    setConsultationDetails(selectedDoc, null); // Cập nhật bác sĩ và reset thời gian
    setTimeSlots(timeSlotsMock[doctorId]); // Lấy thời gian tư vấn từ mock data
  };

  // Hàm xử lý khi chọn thời gian tư vấn
  const handleTimeChange = (time) => {
    setConsultationDetails(selectedDoctor, time); // Cập nhật thời gian đã chọn
  };

  // Điền lại thông tin đã chọn nếu quay lại
  useEffect(() => {
    if (selectedDoctor) {
      setTimeSlots(timeSlotsMock[selectedDoctor.id]);
    }
  }, [selectedDoctor]);

  return (
    <div>
      <h2>Chọn bác sĩ và thời gian tư vấn</h2>

      <Card title="Chọn bác sĩ" style={{ marginBottom: 20 }}>
        <Select
          placeholder="Chọn bác sĩ"
          onChange={handleDoctorChange}
          style={{ width: "100%" }}
          value={selectedDoctor ? selectedDoctor.id : null} // Hiển thị lại bác sĩ đã chọn
        >
          {doctorsMock.map((doctor) => (
            <Option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialty}
            </Option>
          ))}
        </Select>
      </Card>

      {selectedDoctor && (
        <Card title="Chọn thời gian tư vấn" style={{ marginBottom: 20 }}>
          <Select
            placeholder="Chọn thời gian tư vấn"
            onChange={handleTimeChange}
            style={{ width: "100%" }}
            disabled={!timeSlots.length}
            value={selectedTime || null} // Hiển thị lại thời gian đã chọn
          >
            {timeSlots.map((time, index) => (
              <Option key={index} value={time}>
                {time}
              </Option>
            ))}
          </Select>
        </Card>
      )}
    </div>
  );
};

export default DoctorSelection;
