import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/auth";
import useLogin from "../../containers/Login/hooks/useLogin";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and password are required");
      return;
    }

    try {
      await auth.login(email, password);

      navigate("/");
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white-500 to-blue-400">
      <div className="max-w-md w-full p-6 bg-blue shadow-lg rounded-md">
        <h2 className="text-2xl text-center font-bold">Nutech Integrasi Test - Terrizqo AS </h2>
        <p className="text-xl text-center mb-6 m-2">Welcome Back!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
            Masuk
          </button>
          <h4>Note* </h4>
          <div>
            <h6>Email: test@test.com </h6>
            <h6>Password: test123</h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
