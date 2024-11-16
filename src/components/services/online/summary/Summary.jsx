import React from "react";

const ConsultationSummary = ({ doctor, time, formData }) => {
  return (
    <div>
      <h2>Xác nhận thông tin</h2>
      <p>
        <strong>Bác sĩ đã chọn:</strong> {doctor ? doctor.name : "Chưa chọn"}
      </p>
      <p>
        <strong>Thời gian đã chọn:</strong> {time || "Chưa chọn"}
      </p>
      <p>
        <strong>Họ và tên:</strong> {formData.name || "Chưa nhập"}
      </p>
      <p>
        <strong>Email:</strong> {formData.email || "Chưa nhập"}
      </p>
      <p>
        <strong>Số điện thoại:</strong> {formData.phone || "Chưa nhập"}
      </p>
    </div>
  );
};

export default ConsultationSummary;
