import { Google as GoogleIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Register.scss";
import { register } from "../../../services/auth.service";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fullname: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  const resetForm = () => {
    setFormData({
      userName: "",
      password: "",
      fullname: "",
      phone: "",
      email: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      message.success("Đăng ký thành công");
      resetForm();
      navigate("/login");
    } catch (error) {
      message.error(error.response?.data || "Đăng ký thất bại");
    }
  };

  return (
    <Container className="register-container" maxWidth="sm">
      <Box className="register-box" boxShadow={3} p={4} borderRadius={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Đăng Ký
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="username"
            name="userName"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Mật Khẩu"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Họ và Tên"
            name="fullname"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <TextField
            label="Số Điện Thoại"
            name="phone"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="register-button"
          >
            Đăng Ký
          </Button>
        </form>

        <Divider sx={{ my: 2 }}>Hoặc</Divider>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className="google-register-button"
          startIcon={<GoogleIcon />}
        >
       Đăng Ký bằng Google
        </Button>

        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Bạn đã có tài khoản?{" "}
          <Link to="/login" className="link-hover-effect">
            Đăng Nhập
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;

