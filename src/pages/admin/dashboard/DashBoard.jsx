import { Card, Col, Row, Table } from "antd";
import React from "react";
import "./Dashboard.scss";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const Dashboard = () => {
  // Các cột của bảng (table)
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  // Dữ liệu mẫu cho bảng (table)
  const data = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Johnson",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <RangePicker />
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Users" bordered={false}>
            <p>Total Users: 150</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Sales" bordered={false}>
            <p>Total Sales: $12,500</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Orders" bordered={false}>
            <p>Total Orders: 75</p>
          </Card>
        </Col>
      </Row>
      <div className="table-section">
        <h2>Recent Activities</h2>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </div>
    </div>
  );
};

export default Dashboard;
