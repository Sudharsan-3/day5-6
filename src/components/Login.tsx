import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const adminData = { email: "admin@gmail.com", password: "admin@123" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password!");
      return;
    }

    if (email === adminData.email && password === adminData.password) {
      console.log("Hi Admin");
      navigate("/adminpage");
    } else {
      console.log("You are not an admin");
      navigate("/userPage");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-1 to-indigo-500 text-white">
      <div className="w-full max-w-md bg-white text-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">Enter E-mail</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />

          <label className="font-semibold">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            required
          />

          <div className="flex justify-between text-blue-500 text-sm mt-2">
            <p className="hover:underline cursor-pointer">Forgot Password?</p>
            <p className="hover:underline cursor-pointer">Create Account</p>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

