import React, { useEffect, useState } from "react";
import {
  cancelAppointment,
  completedAppointment,
  createBill,
  getAppointmentByDoctor,
  inprogressAppointment,
} from "../../../services/appointment.service";
import { Button, Checkbox, message, Modal, Space, Table, Tag } from "antd";
import { getServiceKois } from "../../../services/service-koi.service";

const VeterinarianAppointments = () => {
  const [listAppointments, setListAppointments] = useState([]);
  const [services, setServices] = useState([]);
  const accountId = localStorage.getItem("accountId");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseService, setChooseService] = useState([]);
  const [chooseRequestId, setChooseRequestId] = useState(null);
  const loadData = async () => {
    try {
      const response = await getAppointmentByDoctor(accountId);
      const convertResponse = response.filter(
        (item) => item.status !== "CANCELLED"
      );
      const formConvert = convertResponse.map((item) => (
        {
          requestId: item.requestId,
          appointmentTime:item.appointmentTime,
          completedTime: item.completedTime,
          status: item.status,
          shiftId: item.shiftId,
          customerEmail: item.customerId.customerEmail,
          customerId: item.customerId.accountId,
          customerPhone: item.customerId.phone,
          customerAddress: item.customerId.address,
          customerName: item.customerId.userName,
        }
    ));
      setListAppointments(formConvert);
    } catch (error) {
      console.log(error);
    }
  };

  const loadServices = async () => {
    try {
      const response = await getServiceKois();
      setServices(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeService = (event) => {
    const serviceId = event.target.value;
    const isChecked = event.target.checked;
    setChooseService((prev) => {
      if (isChecked) {
        return [...prev, serviceId];
      } else {
        return prev.filter((id) => id !== serviceId);
      }
    });
  };

  const handleAddServices = async () => {
    if (chooseService.length === 0) {
      return message.warning("Bạn chưa chọn dịch vụ nào!");
    }
    try {
      const promises = chooseService.map((serviceId) => {
        const billData = {
          requestId: chooseRequestId,
          serviceId: serviceId,
          quantity: 1,
          status: true,
        };
        return createBill(billData);
      });
      await Promise.all(promises);
      message.success("Thêm dịch vụ thành công");
      setChooseService([]);
      setIsOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInprogressAppoinment = (requestId) => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn muốn chấp nhận cuộc hẹn này?",
      okText: "Ok",
      cancelText: "Hủy",
      async onOk() {
        try {
          await inprogressAppointment(requestId);
          message.success("Thành công");
          loadData();
        } catch (error) {
          message.error("Thất bại");
        }
      },
      onCancel() {
        console.log("Cancelled");
      },
    });
  };
  const handleCancelAppointment = (requestId) => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn muốn hủy lịch hẹn?",
      okText: "Ok",
      cancelText: "Hủy",
      async onOk() {
        try {
          const response = await cancelAppointment(requestId);
          message.success("Hủy lịch hẹn thành công");
          loadData();
        } catch (error) {
          message.error("Hủy lịch hẹn thất bại");
        }
      },
      onCancel() {
        console.log("Cancelled");
      },
    });
  };
  const handleCompletedAppointment = async (requestId) => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn đã hoàn thành cuộc hẹn này?",
      okText: "Ok",
      cancelText: "Hủy",
      async onOk() {
        try {
          await completedAppointment(requestId);
          message.success("Xử lý thành công");
          loadData();
        } catch (error) {
          message.error("Xử lý thất bại");
        }
      },
      onCancel() {
        console.log("Cancelled");
      },
    });
  };
  useEffect(() => {
    loadData();
    loadServices();
  }, []);
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "customerPhone",
      key: "customerPhone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "customerAddress",
      key: "customerAddress",
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
      title: "Ngày đặt lịch",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Tag
          color={
            text == "CANCEL"
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.status !== "COMPLETED" && (
            <>
            
             <Button
             variant="filled"
             type="default"
             onClick={() => handleInprogressAppoinment(record.requestId)}
           >
             Chấp nhận
           </Button>
           <Button
             type="primary"
             danger
             onClick={() => handleCancelAppointment(record.requestId)}
           >
             Từ chối
           </Button>
            </>
          )}
          {record.status === "IN_PROGRESS" && (
            <>
              <Button
                type="primary"
                onClick={() => {
                  setIsOpenModal(true);
                  setChooseRequestId(record.requestId);
                }}
              >
                Dịch vụ
              </Button>
              <Button
                type="primary"
                onClick={() => handleCompletedAppointment(record.requestId)}
              >
                Hoàn thành
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ];
  return (
    <div>
      <h2>Quản lý lịch hẹn của bác sĩ thú y</h2>
      <Table columns={columns} dataSource={listAppointments} />
      <Modal
        title="Thêm dịch vụ"
        open={isOpenModal}
        onOk={() => handleAddServices()}
        onCancel={() => setIsOpenModal(false)}
      >
        {services.map((item) => (
          <Checkbox
            key={item.serviceId}
            value={item.serviceId}
            style={{ width: "100%" }}
            onChange={(e) => handleChangeService(e)}
          >
            {item.serviceName}
          </Checkbox>
        ))}
      </Modal>
    </div>
  );
};

export default VeterinarianAppointments;
