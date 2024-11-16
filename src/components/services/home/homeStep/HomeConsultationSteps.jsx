import { Button, Steps, message } from "antd";
import React, { useState } from "react";
import DoctorAndDateForm from "../doctorSelection/DoctorAndDateForm";
import CombinedForm from "../formStep/PersonalInfoForm";
import SuccessPage from "../success/SuccessPage";
import SummaryAndConfirmPage from "../summary/HomeSummary";

const { Step } = Steps;

const HomeConsultationSteps = () => {
  const [current, setCurrent] = useState(0);
  const [doctorDetails, setDoctorDetails] = useState({});
  const [combinedData, setCombinedData] = useState({});
  const [formInstance, setFormInstance] = useState(null);

  const steps = [
    {
      title: "Chọn Bác Sĩ & Thời Gian",
      content: (
        <DoctorAndDateForm
          initialData={doctorDetails}
          setFormInstance={(form) => setFormInstance(form)}
          onSubmit={(values) => {
            setDoctorDetails(values);
            next();
          }}
        />
      ),
    },
    {
      title: "Điền Thông Tin",
      content: (
        <CombinedForm
          formData={combinedData}
          setFormInstance={(form) => setFormInstance(form)}
          onSubmit={(values) => {
            setCombinedData(values);
            next();
          }}
        />
      ),
    },
    {
      title: "Xác Nhận Thông Tin",
      content: (
        <SummaryAndConfirmPage
          personalInfo={combinedData}
          koiPondInfo={combinedData}
          consultationDetails={doctorDetails}
        />
      ),
    },
    {
      title: "Hoàn thành",
      content: <SuccessPage />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const confirmBooking = () => {
    message.success("Xác nhận thành công!");
    next();
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
                formInstance.submit();
              } else {
                next();
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

export default HomeConsultationSteps;
