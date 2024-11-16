import React from "react";
import "./Welcome.scss";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Admin Panel</h1>
      <p>
        This is the admin dashboard where you can manage system settings and
        view reports.
      </p>
    </div>
  );
};

export default WelcomePage;
