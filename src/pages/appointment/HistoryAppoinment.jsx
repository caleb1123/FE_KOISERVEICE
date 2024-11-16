import { Button, Col, Empty, message, Modal, Row, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { cancelAppointment, createPayment, getAppointmentMyInfo } from "../../services/appointment.service";

const HistoryAppoinment = () => {
  const [appointments, setAppointments] = useState([]);
  const loadAppointment = async () => {
    try {
      const response = await getAppointmentMyInfo();
      setAppointments(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlCancelAppointment = async (requestId) => {
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn muốn hủy lịch hẹn này?`,
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        try {
          await cancelAppointment(requestId);
          loadAppointment();
        } catch (error) {
          message.error("Lỗi khi xử lý");
        }
      },
      onCancel() {
        console.log("Đã hủy");
      },
    });
    try {
    } catch (error) {}
  }
  const handlePayment = async (requestId) => {
    const formData = {
      requestId: requestId,
      code: "NCB",
      message: "Thanh toán lịch hẹn",
    };
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn muốn thanh toán lịch hẹn này?`,
      onOk: async () => {
        try {
          const response = await createPayment(formData);
          window.open(response?.data?.data?.paymentUrl, "_blank");
        } catch (error) {
          message.error("Lỗi khi xử lý");
        }
      },
      onCancel() {
        console.log("Đã hủy");
      },
    });
  }
  useEffect(() => {
    loadAppointment();
  }, []);
  const columns = [
    {
      title: "Thời gian đặt",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
    },
    {
      title: "Buổi",
      dataIndex: "shiftId",
      key: "shiftId",

      render: (text) => (
        <Tag>
          {text == "1"
            ? "Buổi sáng"
            : text == "2"
            ? "Buổi trưa"
            : text == 3
            ? "Buổi chiều"
            : "Buổi tối"}
        </Tag>
      ),
    },
    {
      title: "Thời gian hoàn thành",
      dataIndex: "completedTime",
      key: "completedTime",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag
          color={
            text == "CANCELLED"
              ? "red"
              : text == "PENDING"
              ? "yellow"
              : text == "IN_PROGRESS"
              ? "orange"
              : "green"
          }
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, key) => {
        return (
          <Row gutter={[12, 12]}>
            {key.status !== "COMPLETED" &&   <Col>
              <Button danger onClick={() => handlCancelAppointment(key.requestId)}>
               Huỷ lịch hẹn
              </Button>
            </Col>}
            {key.status === "COMPLETED" &&   <Col>
              <Button  onClick={() => handlePayment(key.requestId)}>
               Thanh toán
              </Button>
            </Col>}
            
          </Row>
        );
      },
    },
  ];
  return (
    <>
      {!appointments.length ? (
        <Empty
          description={<Typography.Text>No Appointment</Typography.Text>}
        />
      ) : (
        <>
          <Table columns={columns} dataSource={appointments} />
        </>
      )}
    </>
  );
};

export default HistoryAppoinment;
