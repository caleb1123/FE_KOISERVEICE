import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    function generateRandom19DigitNumber() {
        const firstDigit = Math.floor(Math.random() * 9) + 1; 
        const remainingDigits = Array.from({ length: 18 }, () => Math.floor(Math.random() * 10)).join('');
    
        return `${firstDigit}${remainingDigits}`;
      }
      const orderNumber = generateRandom19DigitNumber();
  return <div>
    <Result
    status="success"
    title="Bạn đã thanh toán thành công!"
    subTitle={`Mã số: ${orderNumber} `}
    extra={[
      <Button key="buy" onClick={() => navigate("/")}>
        Quay về trang chủ
      </Button>,
    ]}
  />
  </div>;
};

export default PaymentSuccess;
