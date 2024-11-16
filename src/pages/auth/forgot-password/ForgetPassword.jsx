import { Lock as LockIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./ForgetPassword.scss";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic (e.g., send password reset email)
    console.log(`Password reset link sent to: ${email}`);
  };

  return (
    <Container className="forget-password-container" maxWidth="sm">
      <Box className="forget-password-box" boxShadow={3} p={4} borderRadius={4}>
        <LockIcon className="lock-icon" />
        <Typography variant="h4" align="center" gutterBottom>
          Quên Mật Khẩu
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="reset-password-button"
          >
            Gửi Liên Kết Đặt Lại
          </Button>
        </form>
        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Nhớ mật khẩu?{" "}
          <Link
            href="/auth/login"
            className="link-hover-effect"
            variant="body2"
          >
            Đăng Nhập
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
