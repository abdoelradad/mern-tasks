import { Link } from "react-router-dom";
import PasswordInput from "../../ui/Inputs/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter password!");
      return;
    }

    setError("");

    // Login api call
  }

  return (
    <div className="mt-28 flex items-center justify-center">
      <div className="max-w-lg rounded-lg border bg-white px-7 py-10">
        <form onSubmit={handleLogin}>
          <h4 className="mb-7 text-2xl">Login</h4>

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="pb-1 text-xs text-red-500">{error}</p>}

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className="mt-4 text-center text-sm">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 underline"
            >
              Create an Account
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
