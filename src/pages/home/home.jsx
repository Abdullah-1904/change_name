import {
  ChevronRight,
  Contact,
  Gauge,
  HousePlus,
  LayoutList,
  Map,
  PawPrint,
  Receipt,
  Sprout,
  UserRoundPen,
  UserRoundPenIcon,
  Warehouse,
} from "lucide-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify">
        {" "}
        {/* this will make gap between sidebar and other content */}
        <div className="w-1/6 bg-slate-50 mt-1  fixed h-full">
          <div className="flex flex-row mb-5">
            <div className="flex justify-between ">
              <img className="w-14" src="crop.png" alt="" />
              <div className="flex flex-col mt-2">
                <NavLink to={"/home"}>
                  <label htmlFor="" className="text-md">
                    {" "}
                    FARM MANAGEMENT
                  </label>
                  <label htmlFor="" className="">
                    {" "}
                    System
                  </label>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Gauge />
                </h1>
                <h1>Dashboard</h1>
              </div>
            </NavLink>
            <NavLink
              to="task"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <LayoutList />
                </h1>
                <h1>Task</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl " : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Map />
                </h1>
                <h1>Farm locations</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl " : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Sprout />
                </h1>
                <h1>Planting</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Warehouse />
                </h1>
                <h1>Warehouse</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <PawPrint />
                </h1>
                <h1>LiveStock</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <HousePlus />
                </h1>
                <h1>Inventory</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl " : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Contact />
                </h1>
                <h1>Contact</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl" : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <Receipt />
                </h1>
                <h1>Financials</h1>
              </div>
            </NavLink>
            <NavLink
              to="xx"
              className={({ isActive }) =>
                `flex flex-row  ${
                  isActive ? "bg-lime-300 font-bold rounded-s-2xl " : ""
                }`
              }
            >
              <div className="flex flex-row my-3">
                <h1 className="mx-3">
                  <UserRoundPenIcon />
                </h1>
                <h1>Manage Users</h1>
              </div>
            </NavLink>
            <div className="fixed bottom-2  ml-2 ">
              <Link to="xx">
                <div className="flex flex-row">
                  <div>
                    <img src="user.jpg" alt="" className="w-10 rounded-3xl " />
                  </div>
                  <div className="flex flex-row">
                    <div className="ml-10 mt-1">user email</div>
                    <div className="ml-16 mt-1">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* == below navbar ends */}
          </div>
        </div>
        <div className="ml-2">
          <Outlet />
          {/* above outlet will display the remaining content that is needed to be rendered in this */}
        </div>
      </div>
    </div>
  );
};

export default Home;
