import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState(false);

  const navi = useNavigate();
  const submit = (e) => {
    e.preventDefault(); // new thing i leaned. This will prevent my page to refresh untill the below statements are executed
    if (email === "a@gmail.com" && password === "123") {
      navi("/home");
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };
  return (
    <div>
      {alert && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold mx-5">Incorrect Credentials!</strong>
          <span className="mx-2block sm:inline">
            Please Enter Correct Email or Password.
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}

      <div>
        <div
          className="border bg-cover flex flex-col items-center min-h-dvh "
          style={{ backgroundImage: `url('background.jpg')` }}
        >
          <form action="" onSubmit={submit}>
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
              <input
                type="email"
                className="border rounded-md mb-4"
                onChange={(a) => {
                  setEmail(a.target.value);
                }}
              />
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
              <input
                type="password"
                className="border rounded-md mb-4"
                onChange={(a) => {
                  setPassword(a.target.value);
                }}
              />
              <button
                type="submit"
                className="border border-black rounded-md bg-transparent w-auto"
              >
                Submit
              </button>
            </div>
          </form>
          {/* <img src="background.jpg" className="w-full h-svh" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
