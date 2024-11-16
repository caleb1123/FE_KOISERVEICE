// src/components/admin/AppointmentManagement.jsx
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  TimePicker,
  message,
} from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import "./AppointmentManagement.scss";

const { Option } = Select;

const AppointmentManagement = () => {
  // Mock data for appointments
  const [appointments, setAppointments] = useState([
    {
      key: "1",
      customerName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      service: "Khám Sức Khỏe",
      date: "2024-05-01",
      time: "09:00",
      status: "Đã xác nhận",
    },
    {
      key: "2",
      customerName: "Trần Thị B",
      email: "tranthib@example.com",
      service: "Phẫu Thuật",
      date: "2024-05-02",
      time: "11:30",
      status: "Chưa xác nhận",
    },
    {
      key: "3",
      customerName: "Lê Văn C",
      email: "levanc@example.com",
      service: "Tiêm Phòng",
      date: "2024-05-03",
      time: "14:00",
      status: "Đã hoàn thành",
    },
    // Thêm các lịch hẹn khác nếu cần
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [form] = Form.useForm();

  const showModal = () => {
    setEditingAppointment(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (record) => {
    setEditingAppointment(record);
    form.setFieldsValue({
      ...record,
      date: dayjs(record.date, "YYYY-MM-DD"),
      time: dayjs(record.time, "HH:mm"),
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingAppointment(null);
    form.resetFields();
  };

  const handleDelete = (key) => {
    setAppointments(
      appointments.filter((appointment) => appointment.key !== key)
    );
    message.success("Xóa lịch hẹn thành công!");
  };

  const handleFinish = (values) => {
    const formattedValues = {
      ...values,
      date: values.date.format("YYYY-MM-DD"),
      time: values.time.format("HH:mm"),
    };

    if (editingAppointment) {
      // Cập nhật lịch hẹn hiện tại
      setAppointments(
        appointments.map((appointment) =>
          appointment.key === editingAppointment.key
            ? { ...appointment, ...formattedValues }
            : appointment
        )
      );
      message.success("Cập nhật lịch hẹn thành công!");
    } else {
      // Thêm lịch hẹn mới
      const newAppointment = {
        key: (appointments.length + 1).toString(),
        ...formattedValues,
      };
      setAppointments([...appointments, newAppointment]);
      message.success("Thêm lịch hẹn thành công!");
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Tên Khách Hàng",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Dịch Vụ",
      dataIndex: "service",
      key: "service",
      sorter: (a, b) => a.service.localeCompare(b.service),
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Giờ",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => dayjs(a.time, "HH:mm") - dayjs(b.time, "HH:mm"),
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Đã xác nhận", value: "Đã xác nhận" },
        { text: "Chưa xác nhận", value: "Chưa xác nhận" },
        { text: "Đã hoàn thành", value: "Đã hoàn thành" },
        { text: "Đã hủy", value: "Đã hủy" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (text) => {
        const statusColor = {
          "Đã xác nhận": "green",
          "Chưa xác nhận": "orange",
          "Đã hoàn thành": "blue",
          "Đã hủy": "red",
        };
        return (
          <span
            style={{
              color: statusColor[text] || "default",
              textTransform: "capitalize",
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: "Hành Động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa lịch hẹn này?"
            onConfirm={() => handleDelete(record.key)}
            okText="Có"
            cancelText="Không"
          >
            <Button type="danger" icon={<DeleteOutlined />}>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="appointment-management">
      <div className="header">
        <h1>Quản Lý Lịch Hẹn</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Thêm Lịch Hẹn
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={appointments}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingAppointment ? "Sửa Lịch Hẹn" : "Thêm Lịch Hẹn"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="appointmentForm"
          onFinish={handleFinish}
        >
          <Form.Item
            name="customerName"
            label="Tên Khách Hàng"
            rules={[
              { required: true, message: "Vui lòng nhập tên khách hàng!" },
            ]}
          >
            <Input placeholder="Nhập tên khách hàng" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email khách hàng" />
          </Form.Item>

          <Form.Item
            name="service"
            label="Dịch Vụ"
            rules={[{ required: true, message: "Vui lòng chọn dịch vụ!" }]}
          >
            <Select placeholder="Chọn dịch vụ">
              <Option value="Khám Sức Khỏe">Khám Sức Khỏe</Option>
              <Option value="Phẫu Thuật">Phẫu Thuật</Option>
              <Option value="Tiêm Phòng">Tiêm Phòng</Option>
              {/* Thêm các dịch vụ khác nếu cần */}
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Ngày"
            rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="time"
            label="Giờ"
            rules={[{ required: true, message: "Vui lòng chọn giờ!" }]}
          >
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng Thái"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
          >
            <Select placeholder="Chọn trạng thái">
              <Option value="Đã xác nhận">Đã xác nhận</Option>
              <Option value="Chưa xác nhận">Chưa xác nhận</Option>
              <Option value="Đã hoàn thành">Đã hoàn thành</Option>
              <Option value="Đã hủy">Đã hủy</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editingAppointment ? "Cập Nhật" : "Thêm Mới"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AppointmentManagement;
