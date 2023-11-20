import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the updated Login.css file

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/auth";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status >= 400 && response.status < 500) {
          setError(errorData.message);
        }
        throw new Error(errorData.message || "Failed to login");
      }

      const responseData = await response.json();
      localStorage.setItem("token", responseData.data);
      window.location = "/";
    } catch (error) {
      setError(error.message || "Internal Server Error");
    }
  };

  return (
    <div className="login_container_loginPage">
      <div className="login_form_container_loginPage">
        <div className="left_loginPage">
          <form className="form_container_loginPage" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
