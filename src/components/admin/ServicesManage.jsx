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
import {
  createServiceKois,
  deleteServiceKoi,
  DisUnActiceServiceKoi,
  getServiceKois,
  updateServiceKoi,
} from "../../services/service-koi.service";

const ServicesManage = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    serviceId: "",
    serviceName: "",
    price: "",
    description: "",
    serviceType: "",
    active: true,
  });
  const [formDataEdit, setFormDataEdit] = useState({
    serviceId: "",
    serviceName: "",
    price: "",
    description: "",
    serviceType: "",
    active: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const loadServices = async () => {
    try {
      const response = await getServiceKois();
      setServices(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDisable = (serviceId, active) => {
    const text = active ? "disable" : "undisable";
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn xác nhận ${text} dịch vụ này?`,
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        const checkActive = active ? false : true;
        try {
          await DisUnActiceServiceKoi(serviceId, checkActive);
          message.success(`${text} dịch vụ thành công`);
          loadServices();
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
  };
  const handleChangeCreate = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onChangeSelectCreate = (value) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
    }));
  };
  const handleChangeEdit = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onChangeSelectEdit = (value) => {
    setFormDataEdit((prev) => ({
      ...prev,
      serviceType: value,
    }));
  };
  const handleEdit = async () => {
    const { serviceName, description, price } = formDataEdit;
    if (!serviceName) {
      return message.warning("Vui lòng nhập tên dịch vụ");
    }
    if (!price) {
      return message.warning("Vui lòng nhập giá dịch vụ");
    }
    if (!description) {
      return message.warning("Vui lòng nhập miêu tả");
    }

    try {
      setIsModalOpenEdit(false);
      await updateServiceKoi(formDataEdit, formDataEdit.serviceId);
      message.success("Cập nhật thành công");
      loadServices();
    } catch (error) {
      message.error("Cập nhật thất bại");
    }
  };
  const handleDelete = (serviceId) => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn xác nhận xóa dịch vụ này",
      okText: "Đồng ý",
      cancelText: "Hủy bỏ",
      onOk: async () => {
        try {
          await deleteServiceKoi(serviceId);
          message.success(`Xóa thành công`);
          loadServices();
        } catch (error) {
          message.error("Lỗi khi xóa");
        }
      },
      onCancel() {
        console.log("Đã hủy xóa");
      },
    });
  };
  const columns = [
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Miêu tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Loại hình",
      dataIndex: "serviceType",
      key: "serviceType",
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
          <Row gutter={[12, 12]}>
            <Col>
              <Button onClick={() => handleDisable(key.serviceId, key.active)}>
                {key.active ? "Disable Service" : "UnDisable Service"}
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  setIsModalOpenEdit(true);
                  setFormDataEdit(key);
                }}
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Button
                danger
                onClick={() => {
                  handleDelete(key.serviceId);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];
  useEffect(() => {
    loadServices();
  }, []);

  const handleOk = async () => {
    const { serviceName, price, description, serviceType } = formData;
    if (!serviceName) {
      return message.warning("Vui lòng nhập tên dịch vụ");
    }
    if (!price) {
      return message.warning("Vui lòng nhập giá dịch vụ");
    }
    if (!description) {
      return message.warning("Vui lòng nhập miêu tả");
    }
    if (!serviceType) {
      return message.warning("Vui lòng chọn loại hình");
    }
    try {
      await createServiceKois(formData);
      message.success("Tạo thành công");
      loadServices();
      setFormData({
        serviceId: "",
        serviceName: "",
        price: "",
        description: "",
        serviceType: "",
        active: true,
      });
      setIsModalOpen(false);
    } catch (error) {
      message.error("Tạo thất bại");
    }
  };
  return (
    <>
      <Button onClick={showModal}>Tạo Dịch Vụ</Button>
      {!services.length ? (
        <Empty description={<Typography.Text>No Service</Typography.Text>} />
      ) : (
        <>
          <Table columns={columns} dataSource={services} />
        </>
      )}
      <Modal
        title="New Service"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[12, 12]}>
          <Col span={24}>
            <Input
              placeholder="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={(e) => handleChangeCreate(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="price"
              name="price"
              value={formData.price}
              onChange={(e) => handleChangeCreate(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="description"
              name="description"
              value={formData.description}
              onChange={(e) => handleChangeCreate(e)}
            />
          </Col>

          <Col span={24}>
            <Select
              showSearch
              placeholder="Select a service type"
              optionFilterProp="label"
              onChange={onChangeSelectCreate}
              value={formData.serviceType}
              options={[
                {
                  value: "Offline",
                  label: "Offline",
                },
                {
                  value: "Online",
                  label: "Online",
                },
              ]}
            />
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Edit Service"
        open={isModalOpenEdit}
        onOk={handleEdit}
        onCancel={() => setIsModalOpenEdit(false)}
      >
        <Row gutter={[12, 12]}>
          <Col span={24}>
            <Input
              placeholder="serviceName"
              name="serviceName"
              value={formDataEdit.serviceName}
              onChange={(e) => handleChangeEdit(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="price"
              name="price"
              value={formDataEdit.price}
              onChange={(e) => handleChangeEdit(e)}
            />
          </Col>
          <Col span={24}>
            <Input
              placeholder="description"
              name="description"
              value={formDataEdit.description}
              onChange={(e) => handleChangeEdit(e)}
            />
          </Col>

          <Col span={24}>
            <Select
              showSearch
              placeholder="Select a service type"
              optionFilterProp="label"
              onChange={onChangeSelectEdit}
              value={formDataEdit.serviceType}
              options={[
                {
                  value: "Offline",
                  label: "Offline",
                },
                {
                  value: "Online",
                  label: "Online",
                },
              ]}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ServicesManage;
