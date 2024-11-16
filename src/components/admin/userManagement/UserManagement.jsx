// src/components/admin/UserManagement.jsx
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  message,
} from "antd";
import React, { useState } from "react";
import "./UserManagement.scss";

const { Option } = Select;

const UserManagement = () => {
  // Mock data for users
  const [users, setUsers] = useState([
    {
      key: "1",
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      role: "admin",
    },
    {
      key: "2",
      name: "Trần Thị B",
      email: "tranthib@example.com",
      role: "veterinarian",
    },
    {
      key: "3",
      name: "Lê Văn C",
      email: "levancc@example.com",
      role: "customer",
    },
    // Thêm các người dùng khác nếu cần
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const showModal = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
    form.resetFields();
  };

  const handleDelete = (key) => {
    setUsers(users.filter((user) => user.key !== key));
    message.success("Xóa người dùng thành công!");
  };

  const handleFinish = (values) => {
    if (editingUser) {
      // Cập nhật người dùng hiện tại
      setUsers(
        users.map((user) =>
          user.key === editingUser.key ? { ...user, ...values } : user
        )
      );
      message.success("Cập nhật người dùng thành công!");
    } else {
      // Thêm người dùng mới
      const newUser = {
        key: (users.length + 1).toString(),
        ...values,
      };
      setUsers([...users, newUser]);
      message.success("Thêm người dùng thành công!");
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Tên Người Dùng",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Vai Trò",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "Admin", value: "admin" },
        { text: "Veterinarian", value: "veterinarian" },
        { text: "Customer", value: "customer" },
      ],
      onFilter: (value, record) => record.role === value,
      render: (text) => {
        const roleColor = {
          admin: "geekblue",
          veterinarian: "green",
          customer: "volcano",
        };
        return (
          <span
            style={{
              color: roleColor[text] || "default",
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
            title="Bạn có chắc chắn muốn xóa người dùng này?"
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
    <div className="user-management">
      <div className="header">
        <h1>Quản Lý Người Dùng</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Thêm Người Dùng
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingUser ? "Sửa Người Dùng" : "Thêm Người Dùng"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="userForm"
          onFinish={handleFinish}
        >
          <Form.Item
            name="name"
            label="Tên Người Dùng"
            rules={[
              { required: true, message: "Vui lòng nhập tên người dùng!" },
            ]}
          >
            <Input placeholder="Nhập tên người dùng" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email người dùng" />
          </Form.Item>

          <Form.Item
            name="role"
            label="Vai Trò"
            rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]}
          >
            <Select placeholder="Chọn vai trò người dùng">
              <Option value="admin">Admin</Option>
              <Option value="veterinarian">Veterinarian</Option>
              <Option value="customer">Customer</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editingUser ? "Cập Nhật" : "Thêm Mới"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
