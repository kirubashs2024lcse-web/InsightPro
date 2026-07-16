import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>InsightPro</h1>
        <p className="subtitle">AI Business Analytics Dashboard</p>

        <h2>Welcome Back 👋</h2>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <div className="forgot-password">
           <a href="#">Forgot Password?</a>
        </div>

        <button>Login</button>

        <p className="signup-text">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;