import { Button, Modal, Steps, message } from "antd";
import React, { useEffect, useState } from "react";
import SuccessPage from "../../home/success/SuccessPage";
import DoctorAndDateForm from "../doctor-date/DoctorAndDateForm";
import FishConditionForm from "../form/fish/FishConditionForm";
import PersonalInfoForm from "../form/personal/PersonalInfoForm";
import SummaryAndConfirmPage from "../summary/SummaryAndConfirmPage";
import { getMyProfileCurrent } from "../../../../services/account.service";
import { creatAppointment } from "../../../../services/appointment.service";

const { Step } = Steps;

const TreatmentBookingSteps = () => {
  const [current, setCurrent] = useState(0);
  const [formDataStepOne, setFormDataStepOne] = useState({
    dateSelect: "",
    shiftId: "",
    doctorId: "",
  });
  const [formDataStepTwo, setFormDataStepTwo] = useState({});
  const [formDataStepThree, setFormDataStepThree] = useState({
    fishType: "",
    fishCondition: "",
    diseaseDuration: "",
  });

  const isDisabledStepTwo =
    !formDataStepTwo.name ||
    !formDataStepTwo.phone ||
    !formDataStepTwo.email ||
    (formDataStepTwo.isVisit === "home" && !formDataStepTwo.address);

  const isDisabledStepThree =
    !formDataStepThree.fishType ||
    !formDataStepThree.fishCondition ||
    !formDataStepThree.diseaseDuration;
  const next = () => {
    if (current <= 2) {
      setCurrent(current + 1);
    }
  };
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  const createAppointment = () => {
    Modal.confirm({
      title: "Xác nhận đặt lịch",
      content: "Bạn xác nhận đặt lịch hẹn này?",
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        try {
          const formData = {
            customerId: formDataStepTwo.accountId,
            veterinarianId: formDataStepOne.doctorId,
            shiftId: formDataStepOne.shiftId,
            appointmentTime: formDataStepOne.dateSelect,
          };
          await creatAppointment(formData);
          setCurrent(current + 1);
        } catch (error) {
          message.error("Lỗi khi tạo lịch hẹn");
        }
      },
      onCancel() {
        console.log("Đã hủy đặt lịch");
      },
    });
  };
  const loadMyProfile = async () => {
    try {
      const response = await getMyProfileCurrent();
      setFormDataStepTwo(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadMyProfile();
  }, []);
  const steps = [
    {
      title: "Chọn Bác Sĩ & Thời Gian",
      content: (
        <DoctorAndDateForm
          setFormDataStepOne={setFormDataStepOne}
          formDataStepOne={formDataStepOne}
        />
      ),
    },
    {
      title: "Điền Thông Tin Cá Nhân",
      content: (
        <PersonalInfoForm
          formDataStepTwo={formDataStepTwo}
          setFormDataStepTwo={setFormDataStepTwo}
        />
      ),
    },
    {
      title: "Tình Trạng Bệnh của Cá",
      content: (
        <FishConditionForm setFormDataStepThree={setFormDataStepThree} />
      ),
    },
    {
      title: "Xác Nhận Thông Tin",
      content: (
        <SummaryAndConfirmPage
          formDataStepOne={formDataStepOne}
          formDataStepTwo={formDataStepTwo}
          formDataStepThree={formDataStepThree}
        />
      ),
    },
    {
      title: "Hoàn thành",
      content: <SuccessPage />,
    },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action" style={{ marginTop: 20 }}>
        {current === 0 && (
          <Button
            type="primary"
            disabled={!formDataStepOne.doctorId}
            onClick={next}
          >
            Tiếp theo
          </Button>
        )}
        {current === 1 && (
          <>
            <Button type="primary" disabled={isDisabledStepTwo} onClick={next}>
              Tiếp theo
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}
        {current === 2 && (
          <>
            <Button
              type="primary"
              disabled={isDisabledStepThree}
              onClick={next}
            >
              Tiếp theo
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}
        {current === 3 && (
          <>
            <Button type="primary" onClick={createAppointment}>
              Đặt lịch
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TreatmentBookingSteps;
