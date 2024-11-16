import {
  Button,
  Col,
  Empty,
  Input,
  message,
  Modal,
  Row,
  Select,
  Table,
  Tag,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  banAccount,
  createAccount,
  getAccounts,
} from "../../services/admin.service";

const UsersManage = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    phone: "",
    email: "",
    rodeId: "",
    password: "12345678",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const loadAccounts = async () => {
    try {
      const response = await getAccounts();
      setAccounts(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDisable = (userName, active) => {
    const text = active ? "disable" : "undisable";
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn xác nhận ${text} tài khoản này?`,
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        const checkActive = active ? false : true;
        try {
          await banAccount(userName, checkActive);
          message.success(`${text} tài khoản thành công`);
          loadAccounts();
        } catch (error) {
          message.error("Lỗi khi tạo lịch hẹn");
        }
      },
      onCancel() {
        console.log("Đã hủy đặt lịch");
      },
    });
    try {
    } catch (error) {}
  };

  const columns = [
    {
      title: "Tên người dùng",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Tài khoản người dùng",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "hoạt động",
      dataIndex: "active",
      key: "active",
      render: (_, key) => {
        return (
          <Tag color={key.active === true ? "green" : "red"}>
            {key.active === true ? "Hoạt động" : "Không hoạt động"}
          </Tag>
        );
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, key) => {
        return (
          <Button onClick={() => handleDisable(key.userName, key.active)}>
            {key.active ? "Disable account" : "UnDisable"}
          </Button>
        );
      },
    },
  ];
  useEffect(() => {
    loadAccounts();
  }, []);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onChangeSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      rodeId: value,
    }));
  };
  const handleOk = async () => {
    try {
      await createAccount(formData);
      message.success("Tạo thành công");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Tạo thất bại");
    }
  };
  return (
    <>
      <Button onClick={showModal}>Tạo Tài Khoản</Button>
      {!accounts.length ? (
        <Empty description={<Typography.Text>No Account</Typography.Text>} />
      ) : (
        <>
          <Table columns={columns} dataSource={accounts} />
        </>
      )}
      <Modal
        title="New Account"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[12, 12]}>
          <Col span={24}>
            <Input
              placeholder="fullname"
              name="fullName"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="username"
              name="userName"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="phone"
              name="phone"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col span={24}>
            <Input.Password
              placeholder="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Row gutter={[12, 12]}>
            <Col span={7}>
              <Select
                showSearch
                placeholder="Select a role"
                optionFilterProp="label"
                onChange={onChangeSelect}
                options={[
                  {
                    value: "1",
                    label: "customer",
                  },
                  {
                    value: "2",
                    label: "staff",
                  },
                  {
                    value: "3",
                    label: "doctor",
                  },
                  {
                    value: "4",
                    label: "manager",
                  },
                ]}
              />
            </Col>
            <Col span={17}>
              <span style={{ color: "red" }}>
                *Lưu ý: Không nhập mật khẩu tự động là 12345678
              </span>
            </Col>
          </Row>
        </Row>
      </Modal>
    </>
  );
};

export default UsersManage;
