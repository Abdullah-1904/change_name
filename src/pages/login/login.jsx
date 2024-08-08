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
      <div>
        <div
          className="border bg-cover flex flex-col items-center min-h-dvh "
          style={{ backgroundImage: `url('background.jpg')` }}
        >
          {alert && (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-2 rounded fixed z-10"
              role="alert"
            >
              <strong className="font-bold mx-5">Incorrect Credentials!</strong>
              <span className="mx-2block sm:inline">
                Please Enter Correct Email or Password.
              </span>
            </div>
          )}

          <form action="" onSubmit={submit}>
            <div className="py-10 px-5 flex flex-col bg-white  bg-opacity-60 border border-green-100  mt-32 w-96 ">
              <label
                htmlFor=""
                className="flex justify-center text-3xl font-bold text-amber-400 mb-5"
              >
                Concave Agri
              </label>
              <label
                className="flex mb-2 justify-start text-xl font-semibold text-green-400"
                htmlFor=""
              >
                Welcome to Concave Farm!
              </label>
              <label
                className="flex text-xs text-black mb-5 justify-start"
                htmlFor=""
              >
                Please sign-in to access your account
              </label>
              <label
                className=" flex justify-start text-md mb-2 font-semibold"
                htmlFor=""
              >
                EMAIL
              </label>
              <input
                placeholder="  example@example.com"
                type="email"
                className="border rounded-2xl  mb-4 py-1"
                onChange={(a) => {
                  setEmail(a.target.value);
                }}
              />
              <div className="flex justify-between mt-2">
                <label
                  className="flex justify-start text-md mb-2 font-semibold"
                  htmlFor=""
                >
                  PASSWORD
                </label>
                <label className="flex justify-start text-xs" htmlFor="">
                  Forgot password?
                </label>
              </div>
              <input
                placeholder="  4x2Bd20"
                type="password"
                className="border rounded-2xl  mb-4 py-1"
                onChange={(a) => {
                  setPassword(a.target.value);
                }}
              />
              <button
                type="submit"
                className="border bg-sky-100  rounded-xl w-auto hover:bg-sky-200 py-2 mt-3"
              >
                SUBMIT
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
