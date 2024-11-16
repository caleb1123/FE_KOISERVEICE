// src/components/admin/ContentManagement.jsx
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  Upload,
} from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import "./ContentManagement.scss";

const { TextArea } = Input;

const ContentManagement = () => {
  // Mock data for content items
  const [contents, setContents] = useState([
    {
      key: "1",
      title: "Giới Thiệu Về Koi Veterinary Service Center",
      type: "Trang",
      description: "Trang giới thiệu về dịch vụ và đội ngũ của chúng tôi.",
      image: null,
    },
    {
      key: "2",
      title: "Bài Viết Blog: Cách Chăm Sóc Thú Cưng Mùa Hè",
      type: "Blog",
      description: "Các mẹo chăm sóc thú cưng trong mùa hè.",
      image: null,
    },
    {
      key: "3",
      title: "Gallery: Những Khoảnh Khắc Đáng Yêu",
      type: "Gallery",
      description: "Hình ảnh các thú cưng của khách hàng tại trung tâm.",
      image: null,
    },
    // Thêm các nội dung khác nếu cần
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [form] = Form.useForm();

  const showModal = () => {
    setEditingContent(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (record) => {
    setEditingContent(record);
    form.setFieldsValue({
      ...record,
      image: record.image
        ? [{ uid: "-1", name: "image.png", status: "done", url: record.image }]
        : [],
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingContent(null);
    form.resetFields();
  };

  const handleDelete = (key) => {
    setContents(contents.filter((content) => content.key !== key));
    message.success("Xóa nội dung thành công!");
  };

  const handleFinish = (values) => {
    // Xử lý upload hình ảnh
    let imageUrl = null;
    if (values.image && values.image.length > 0) {
      // Trong thực tế, bạn sẽ tải hình ảnh lên server và lấy URL
      imageUrl = values.image[0].url || values.image[0].thumbUrl || null;
    }

    const formattedValues = {
      ...values,
      image: imageUrl,
    };

    if (editingContent) {
      // Cập nhật nội dung hiện tại
      setContents(
        contents.map((content) =>
          content.key === editingContent.key
            ? { ...content, ...formattedValues }
            : content
        )
      );
      message.success("Cập nhật nội dung thành công!");
    } else {
      // Thêm nội dung mới
      const newContent = {
        key: (contents.length + 1).toString(),
        ...formattedValues,
      };
      setContents([...contents, newContent]);
      message.success("Thêm nội dung thành công!");
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Tiêu Đề",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Loại Nội Dung",
      dataIndex: "type",
      key: "type",
      filters: [
        { text: "Trang", value: "Trang" },
        { text: "Blog", value: "Blog" },
        { text: "Gallery", value: "Gallery" },
      ],
      onFilter: (value, record) => record.type === value,
    },
    {
      title: "Mô Tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) =>
        text ? (
          <img src={text} alt="Content" style={{ width: "100px" }} />
        ) : (
          "Không có"
        ),
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
            title="Bạn có chắc chắn muốn xóa nội dung này?"
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

  const uploadProps = {
    beforeUpload: (file) => {
      // Bạn có thể thêm kiểm tra kích thước hoặc định dạng file tại đây
      return false; // Ngăn chặn upload tự động
    },
    listType: "picture",
    maxCount: 1,
  };

  return (
    <div className="content-management">
      <div className="header">
        <h1>Quản Lý Nội Dung</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Thêm Nội Dung
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={contents}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingContent ? "Sửa Nội Dung" : "Thêm Nội Dung"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <Form
          form={form}
          layout="vertical"
          name="contentForm"
          onFinish={handleFinish}
        >
          <Form.Item
            name="title"
            label="Tiêu Đề"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
          >
            <Input placeholder="Nhập tiêu đề nội dung" />
          </Form.Item>

          <Form.Item
            name="type"
            label="Loại Nội Dung"
            rules={[
              { required: true, message: "Vui lòng chọn loại nội dung!" },
            ]}
          >
            <Select placeholder="Chọn loại nội dung">
              <Option value="Trang">Trang</Option>
              <Option value="Blog">Blog</Option>
              <Option value="Gallery">Gallery</Option>
              {/* Thêm các loại nội dung khác nếu cần */}
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Mô Tả"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <TextArea placeholder="Nhập mô tả nội dung" rows={4} />
          </Form.Item>

          <Form.Item name="image" label="Hình Ảnh">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Chọn Hình Ảnh</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editingContent ? "Cập Nhật" : "Thêm Mới"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContentManagement;
