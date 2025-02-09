import "./Register.css";
import logo from "/log.png";
import info from "/aouthImages/information-button.png";
import dashboard from "/aouthImages/demo-dashboard.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../api/authApi/register";
import bg from "/aouthImages/bg-login-top.png";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "11111111",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };

      if (updatedData.password !== updatedData.password_confirmation) {
        setError("Passwords do not match.");
      } else {
        setError("");
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedPassword = formData.password.trim();
    const trimmedPasswordConfirmation = formData.password_confirmation.trim();

    if (trimmedPassword !== trimmedPasswordConfirmation) {
      setError("Passwords do not match.");
      return;
    } else {
      setError("");
    }

    if (!formData.agreeToTerms) {
      setError("You must agree to the privacy policy.");
      return;
    }

    try {
      const response = await signUp(
        formData.username,
        formData.email,
        formData.password,

      );

      if (response) {
        if (response.token) {
          localStorage.setItem("userToken", response.token);
        }

        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="RegisterD">
      <section className="containerRegister">
        <div className="img-top">
          <img src={bg} alt="Background Image" />
        </div>

        <div className="form-section">
          <div className="logo" style={{ width:"5rem" }}>
            <img src={logo} alt="Logo" />
          </div>
          <div className="divider"></div>

          <form onSubmit={handleSubmit}>


          <div className="input-row">
              <div className="input-field">
                <label htmlFor="username"><span>*</span> Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose your username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label htmlFor="email"><span>*</span> E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>




            <div className="input-row">
              <div className="input-field">
                <label htmlFor="password"><span>*</span> Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="confirm-password"><span>*</span> Confirm Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Re-type password"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                /> I agree to the processing of personal data according to <span>Privacy Policy</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToName"
                  checked={formData.agreeToName}
                  onChange={handleInputChange}
                /> I acknowledge my name is correct and corresponds to the government-issued identification
              </label>
            </div>

            <div className="info-box">
              <img
                src={info}
                alt="Icon"
                className="info-icon"
              />
              <span className="info-text">
                Once registered, your name and country cannot be modified. Please double-check this information before proceeding.
              </span>
            </div>

            <button type="submit" className="register-btn">Register</button>

            <div className="login">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </form>
        </div>

        <div className="info-section">
          <h2>Take a free tour of our dashboard and unlock its potential!</h2>
          <p>
            Get access to an exclusive tour of our platform within 10 seconds, by simply submitting the following information.
          </p>
          <img
            src={dashboard}
            alt="Dashboard Image"
            className="dashboard-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
