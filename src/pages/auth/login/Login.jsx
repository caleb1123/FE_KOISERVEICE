import { Google as GoogleIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.scss";
import { login } from "../../../services/auth.service";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem("token", response?.token);
      localStorage.setItem("name", response?.account?.fullName);
      localStorage.setItem("accountId", response?.account?.accountId);
      message.success("Đăng nhập thành công");
      switch (response?.account.roleId) {
        case 4:
          navigate("/admin");
          break;
        case 3:
          navigate("/veterinarian/appointments");
          break;
        default:
          navigate("/");
          break;
      }
    } catch (error) {
      message.error("Đăng nhập thất bại");
    }
  };

  return (
    <Container className="login-container" maxWidth="sm">
      <Box className="login-box" boxShadow={3} p={4} borderRadius={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Đăng Nhập
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="userName"
            type="text"
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
          <Grid container justifyContent="space-between" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Link
              href="/auth/forget-password"
              className="link-hover-effect"
              variant="body2"
            >
              Quên mật khẩu?
            </Link>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="login-button"
          >
            Đăng Nhập
          </Button>
        </form>

        <Divider sx={{ my: 2 }}>Hoặc</Divider>

        {/* <Button
          variant="outlined"
          color="primary"
          fullWidth
          className="google-login-button"
          startIcon={<GoogleIcon />}
        >
          Đăng Nhập bằng Google
        </Button> */}

        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Bạn chưa có tài khoản?{" "}
          <Link href="/register" className="link-hover-effect" variant="body2">
            Đăng ký ngay
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
