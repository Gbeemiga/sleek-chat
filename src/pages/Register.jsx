import React from "react";

const Register = () => {
  return (
    <body className="registerContainer min-h-screen w-screen flex lg:items-center lg:justify-center bg-slate-500 ">
      <div className="registerWrapper  flex lg:flex-col lg:items-center lg:justify-center bg-slate-700 lg:w-[30%] lg:h-80 p-8 rounded-xl shadow-lg shadow-slate-800/70 color text-white  ">
        <span className="logo recursive-black text-4xl linear bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 ">SLEEK CHAT</span>
        <span className="title ubuntu-med text-xl ">REGISTER</span>
        <form className="flex lg:flex-col lg:items-center " >
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="file" />
        </form>
        <p className="login">Already have an account? Login</p>
      </div>
    </body>
  );
};

export default Register;
