import "./Login.css";
import logo from "/log.png";
import dashboardImage from "/aouthImages/demo-dashboard.svg";
import bgtop from "/aouthImages/bg-login-top.png";
import eyeIcon from "/aouthImages/show.png"; // أيقونة العين (إظهار كلمة المرور)
import eyeSlashIcon from "/aouthImages/invisible.png"; // أيقونة العين المخفية (إخفاء كلمة المرور)
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/authApi/LoginApi";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // حالة لإظهار/إخفاء كلمة المرور
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(identifier, password);
      console.log("Login Successful:", response);
      navigate("/user/dashboard");
    } catch (err) {
      setError(err.message || "Invalid identifier or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="LoginD">
      <section className="containerLogin">
        <div className="img-top">
          <img src={bgtop} alt="Background Image" />
        </div>

        <div className="form-section">
          <div className="logo" style={{ width: "5rem" }}>
            <img src={logo} alt="Logo" />
          </div>
          <div className="divider"></div>
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="formInput">
              <label htmlFor="identifier">
                <span>*</span> identifier
              </label>
              <input
                type="text"
                id="identifier"
                placeholder="Type your identifier here."
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                style={{ color: '#000' }}
              />
            </div>
            <div className="formInput">
              <label htmlFor="password">
                <span>*</span> Password
              </label>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Type your password here."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={showPassword ? eyeSlashIcon : eyeIcon}
                  alt="Toggle Password Visibility"
                  className="toggle-password-icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
            <div className="forgot-password">
              <Link to="/forgetPassword">Forgot Password?</Link>
            </div>
            <br />
            <div className="formR">
              Dont have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>

        <div className="info-section">
          <h2>Track your trades on-the-go with easy dashboard access!</h2>
          <p>Your dashboard is just a few clicks away!</p>
          <img
            src={dashboardImage}
            alt="Dashboard Image"
            className="dashboard-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
