import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-4 border-emerald-600 p-40 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-emerald-600">Login</h2>
          <p className="text-sm text-gray-400 3">
            Don't have an account?{" "}
            <span className="text-emerald-600 underline">Sign Up</span>
          </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-center bg-transparent border-2 border-emerald-600 text-sm rounded-full placeholder:text-gray-400 py-3 px-10"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-center bg-transparent border-2 border-emerald-600 text-sm rounded-full placeholder:text-gray-400 mt-3 py-3 px-10"
            type="password"
            placeholder="Enter Password"
          />
          <button
            className="mt-7 w-52 text-white outline-none border-none bg-emerald-600 text-sm rounded-full placeholder:text-white py-3 px-5"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
