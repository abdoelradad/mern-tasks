import { useState } from "react";
import PasswordInput from "../../ui/Inputs/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("");

    // sign up sign up api
  };

  return (
    <div className="mt-28 flex items-center justify-center">
      <div className="max-w-xs rounded-lg border bg-white px-7 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="mb-7 text-2xl">Register</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Create Account
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-indigo-600 underline">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
