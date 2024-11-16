// src/components/admin/ReportManagement.jsx
import {
  AppstoreOutlined,
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Table } from "antd";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./ReportManagement.scss";

// Mock data for statistics
const statsData = [
  { title: "Doanh Thu Tổng", value: 5000000, icon: <DollarOutlined /> },
  { title: "Số Lượng Lịch Hẹn", value: 75, icon: <CalendarOutlined /> },
  { title: "Số Lượng Người Dùng", value: 150, icon: <UserOutlined /> },
  { title: "Số Lượng Dịch Vụ", value: 20, icon: <AppstoreOutlined /> },
];

// Mock data for revenue chart
const revenueData = [
  { month: "Tháng 1", revenue: 400000 },
  { month: "Tháng 2", revenue: 300000 },
  { month: "Tháng 3", revenue: 500000 },
  { month: "Tháng 4", revenue: 450000 },
  { month: "Tháng 5", revenue: 600000 },
  { month: "Tháng 6", revenue: 700000 },
  { month: "Tháng 7", revenue: 800000 },
  { month: "Tháng 8", revenue: 750000 },
  { month: "Tháng 9", revenue: 900000 },
  { month: "Tháng 10", revenue: 850000 },
  { month: "Tháng 11", revenue: 950000 },
  { month: "Tháng 12", revenue: 1000000 },
];

// Mock data for appointments chart
const appointmentsData = [
  { month: "Tháng 1", appointments: 50 },
  { month: "Tháng 2", appointments: 45 },
  { month: "Tháng 3", appointments: 60 },
  { month: "Tháng 4", appointments: 55 },
  { month: "Tháng 5", appointments: 70 },
  { month: "Tháng 6", appointments: 75 },
  { month: "Tháng 7", appointments: 80 },
  { month: "Tháng 8", appointments: 65 },
  { month: "Tháng 9", appointments: 85 },
  { month: "Tháng 10", appointments: 80 },
  { month: "Tháng 11", appointments: 90 },
  { month: "Tháng 12", appointments: 100 },
];

// Mock data for users chart
const usersData = [
  { month: "Tháng 1", users: 20 },
  { month: "Tháng 2", users: 25 },
  { month: "Tháng 3", users: 30 },
  { month: "Tháng 4", users: 35 },
  { month: "Tháng 5", users: 40 },
  { month: "Tháng 6", users: 45 },
  { month: "Tháng 7", users: 50 },
  { month: "Tháng 8", users: 55 },
  { month: "Tháng 9", users: 60 },
  { month: "Tháng 10", users: 65 },
  { month: "Tháng 11", users: 70 },
  { month: "Tháng 12", users: 75 },
];

// Mock data for detailed reports table
const reportData = [
  {
    key: "1",
    month: "Tháng 1",
    revenue: 400000,
    appointments: 50,
    newUsers: 20,
  },
  {
    key: "2",
    month: "Tháng 2",
    revenue: 300000,
    appointments: 45,
    newUsers: 25,
  },
  {
    key: "3",
    month: "Tháng 3",
    revenue: 500000,
    appointments: 60,
    newUsers: 30,
  },
  // Thêm các dữ liệu khác nếu cần
];

const columns = [
  {
    title: "Tháng",
    dataIndex: "month",
    key: "month",
  },
  {
    title: "Doanh Thu (VND)",
    dataIndex: "revenue",
    key: "revenue",
    sorter: (a, b) => a.revenue - b.revenue,
    render: (text) => new Intl.NumberFormat("vi-VN").format(text),
  },
  {
    title: "Số Lượng Lịch Hẹn",
    dataIndex: "appointments",
    key: "appointments",
    sorter: (a, b) => a.appointments - b.appointments,
  },
  {
    title: "Người Dùng Mới",
    dataIndex: "newUsers",
    key: "newUsers",
    sorter: (a, b) => a.newUsers - b.newUsers,
  },
];

const ReportManagement = () => {
  return (
    <div className="report-management">
      {/* Overview Statistics */}
      <Row gutter={[16, 16]}>
        {statsData.map((stat) => (
          <Col xs={24} sm={12} md={6} key={stat.title}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Revenue Chart */}
      <Row gutter={[16, 16]} className="report-chart">
        <Col span={24}>
          <Card title="Doanh Thu Theo Tháng">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat("vi-VN").format(value)
                  }
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1890ff"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Appointments Chart */}
      <Row gutter={[16, 16]} className="report-chart">
        <Col span={24}>
          <Card title="Số Lượng Lịch Hẹn Theo Tháng">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointmentsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* New Users Chart */}
      <Row gutter={[16, 16]} className="report-chart">
        <Col span={24}>
          <Card title="Người Dùng Mới Theo Tháng">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Detailed Reports Table */}
      <Row gutter={[16, 16]} className="report-table">
        <Col span={24}>
          <Card title="Báo Cáo Chi Tiết Theo Tháng">
            <Table
              columns={columns}
              dataSource={reportData}
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReportManagement;
