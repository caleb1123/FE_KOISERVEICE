import { Button, Steps, message } from "antd";
import React, { useState } from "react";
import SuccessPage from "../../../../pages/services/online/SuccessPage";
import DoctorSelection from "../doctorSelection/DoctorSeclection";
import ConsultationForm from "../form/Form";
import ConsultationSummary from "../summary/Summary";

const { Step } = Steps;

const ConsultationSteps = () => {
  const [current, setCurrent] = useState(0); // Quản lý bước hiện tại
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Lưu bác sĩ đã chọn
  const [selectedTime, setSelectedTime] = useState(null); // Lưu thời gian đã chọn
  const [formData, setFormData] = useState({}); // Lưu dữ liệu form thông tin cá nhân
  const [formInstance, setFormInstance] = useState(null); // Để lưu instance của form

  const steps = [
    {
      title: "Chọn Bác Sĩ & Thời Gian",
      content: (
        <DoctorSelection
          selectedDoctor={selectedDoctor} // Truyền bác sĩ đã chọn
          selectedTime={selectedTime} // Truyền thời gian đã chọn
          setConsultationDetails={(doctor, time) => {
            setSelectedDoctor(doctor); // Cập nhật bác sĩ đã chọn
            setSelectedTime(time); // Cập nhật thời gian đã chọn
          }}
        />
      ),
    },
    {
      title: "Điền Thông Tin",
      content: (
        <ConsultationForm
          onSubmit={(values) => {
            setFormData(values); // Lưu dữ liệu form khi submit
            next(); // Sau khi submit form, chuyển sang bước tiếp theo
          }}
          formData={formData} // Truyền dữ liệu đã lưu để giữ lại khi quay lại
          setFormInstance={setFormInstance} // Truyền instance của form lên
        />
      ),
    },
    {
      title: "Xác Nhận Thông Tin",
      content: (
        <ConsultationSummary
          doctor={selectedDoctor}
          time={selectedTime}
          formData={formData}
        />
      ), // Tóm tắt thông tin trước khi xác nhận
    },
    {
      title: "Hoàn thành",
      content: <SuccessPage />, // Trang hoàn thành
    },
  ];

  // Hàm xử lý khi nhấn "Tiếp theo"
  const next = () => {
    setCurrent(current + 1);
  };

  // Hàm quay lại bước trước
  const prev = () => {
    setCurrent(current - 1);
  };

  // Hàm xác nhận thông tin ở bước 3 và chuyển sang bước 4
  const confirmBooking = () => {
    message.success("Xác nhận thành công!"); // Hiển thị thông báo
    next(); // Chuyển sang bước 4
  };

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{ marginTop: 20 }}>
        {current < steps.length - 1 && current !== 2 && (
          <Button
            type="primary"
            onClick={() => {
              if (current === 1 && formInstance) {
                // Nếu đang ở bước form, submit form trước khi chuyển bước
                formInstance.submit();
              } else {
                next(); // Nếu không ở bước form, chuyển bước ngay lập tức
              }
            }}
          >
            Tiếp theo
          </Button>
        )}

        {current === 2 && (
          <>
            <Button type="primary" onClick={confirmBooking}>
              Xác nhận
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}

        {current > 0 && current < steps.length - 1 && current !== 2 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Quay lại
          </Button>
        )}
      </div>
    </div>
  );
};

export default ConsultationSteps;
