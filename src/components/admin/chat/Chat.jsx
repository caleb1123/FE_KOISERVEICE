// src/components/admin/ChatManagement.jsx
import { CommentOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Form,
  Input,
  Layout,
  List,
  message,
  Typography,
} from "antd";
import React, { useState } from "react";
import "./Chat.scss";

const { Sider, Content } = Layout;
const { Text } = Typography;
const { TextArea } = Input;

const mockConversations = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    avatar: "", // URL hình ảnh hoặc để trống sẽ hiển thị icon mặc định
    messages: [
      {
        sender: "customer",
        text: "Chào admin, tôi muốn hỏi về dịch vụ khám sức khỏe cho chó.",
      },
      {
        sender: "admin",
        text: "Chào bạn! Rất vui được hỗ trợ bạn. Bạn muốn biết thêm chi tiết gì?",
      },
    ],
  },
  {
    id: "2",
    name: "Trần Thị B",
    avatar: "",
    messages: [
      {
        sender: "customer",
        text: "Tôi cần hẹn lịch cho mèo của mình vào cuối tuần này.",
      },
      {
        sender: "admin",
        text: "Đã nhận yêu cầu của bạn. Vui lòng cung cấp thời gian cụ thể bạn muốn hẹn.",
      },
    ],
  },
  // Thêm các cuộc trò chuyện khác nếu cần
];

const Chat = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConversationId, setActiveConversationId] = useState(
    conversations[0]?.id || null
  );
  const [form] = Form.useForm();

  const handleSendMessage = (values) => {
    const { message: newMessage } = values;
    if (!activeConversationId) {
      message.error("Vui lòng chọn một cuộc trò chuyện để gửi tin nhắn.");
      return;
    }

    const updatedConversations = conversations.map((conv) => {
      if (conv.id === activeConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, { sender: "admin", text: newMessage }],
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    form.resetFields();
    message.success("Gửi tin nhắn thành công!");
  };

  const selectedConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  return (
    <Layout className="chat-management">
      {/* Sidebar: List of Conversations */}
      <Sider width={300} className="chat-sidebar">
        <List
          itemLayout="horizontal"
          dataSource={conversations}
          renderItem={(item) => (
            <List.Item
              className={`conversation-item ${
                item.id === activeConversationId ? "active" : ""
              }`}
              onClick={() => setActiveConversationId(item.id)}
            >
              <List.Item.Meta
                avatar={
                  item.avatar ? (
                    <Avatar src={item.avatar} />
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )
                }
                title={<Text strong>{item.name}</Text>}
                description={
                  item.messages.length > 0
                    ? item.messages[item.messages.length - 1].text
                    : "Không có tin nhắn"
                }
              />
            </List.Item>
          )}
        />
      </Sider>

      {/* Content: Chat Window */}
      <Layout>
        <Content className="chat-content">
          {selectedConversation ? (
            <>
              <div className="chat-header">
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  src={selectedConversation.avatar}
                />
                <Text className="chat-name">{selectedConversation.name}</Text>
              </div>
              <Divider style={{ margin: "8px 0" }} />
              <div className="chat-messages">
                {selectedConversation.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chat-message ${
                      msg.sender === "admin" ? "admin" : "customer"
                    }`}
                  >
                    <Avatar
                      size="small"
                      icon={
                        msg.sender === "admin" ? (
                          <UserOutlined />
                        ) : (
                          <CommentOutlined />
                        )
                      }
                    />
                    <div className="message-text">{msg.text}</div>
                  </div>
                ))}
              </div>
              <Divider style={{ margin: "8px 0" }} />
              <Form form={form} onFinish={handleSendMessage}>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Vui lòng nhập tin nhắn!" },
                  ]}
                >
                  <TextArea rows={2} placeholder="Nhập tin nhắn..." />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SendOutlined />}
                    block
                  >
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <div className="no-conversation-selected">
              <Text>
                Vui lòng chọn một cuộc trò chuyện từ danh sách bên trái.
              </Text>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Chat;
