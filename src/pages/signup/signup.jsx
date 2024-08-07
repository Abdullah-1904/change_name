import React from "react";

const Signup = () => {



  return (
    <div>
      <div
        className="border bg-cover flex flex-col items-center min-h-dvh "
        style={{ backgroundImage: `url('background.jpg')` }}
      >
        <form action="">
          <div className="pb-4 flex flex-col bg-gradient-to-r from-transparent to-slate-50 mt-32 lg:w-80 px-10">
            <label
              htmlFor=""
              className="flex justify-center text-2xl text-white mb-5"
            >
              Concave Agri
            </label>
            <label
              className="flex text-base text-black mb-2 justify-start"
              htmlFor=""
            >
              Welcome to Concave Farming!
            </label>
            <label
              className="flex text-xs text-black mb-5 justify-start"
              htmlFor=""
            >
              Please sign-in to access your account
            </label>
            <label
              className=" flex justify-start text-xs mb-2 font-semibold"
              htmlFor=""
            >
              EMAIL
            </label>
            <input type="email" className="border rounded-md mb-4" />
            <div className="flex justify-between">
              <label
                className="flex justify-start text-xs mb-2 font-semibold"
                htmlFor=""
              >
                PASSWORD
              </label>
              <label className="flex justify-start text-xs" htmlFor="">
                Forgot password?
              </label>
            </div>
            <input type="password" className="border rounded-md mb-4" />
            <button className="border border-black rounded-md bg-transparent w-auto">
              Submit
            </button>
          </div>
        </form>
        {/* <img src="background.jpg" className="w-full h-svh" alt="" /> */}
      </div>
    </div>
  );
};

export default Signup;
