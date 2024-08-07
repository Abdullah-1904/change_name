import {
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
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify">
        {" "}
        {/* this will make gap between sidebar and other content */}
        <div className="w-1/5 bg-red-50 mt-1">
          <div className="flex flex-row mb-5">
            <div className="flex justify-between ">
              <img className="w-16" src="crop.png" alt="" />
              <div className="flex flex-col ">
                <label htmlFor="" className="text-xl">
                  {" "}
                  FARM MANAGEMENT
                </label>
                <label htmlFor="" className="">
                  {" "}
                  System
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Gauge />
                </h1>
                <h1>Dashboard</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <LayoutList />
                </h1>
                <h1>Task</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Map />
                </h1>
                <h1>Farm locations</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Sprout />
                </h1>
                <h1>Planting</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Warehouse />
                </h1>
                <h1>Warehouse</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <PawPrint />
                </h1>
                <h1>LiveStock</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <HousePlus />
                </h1>
                <h1>Inventory</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Contact />
                </h1>
                <h1>Contact</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <Receipt />
                </h1>
                <h1>Financials</h1>
              </NavLink>
            </div>
            <div className="flex flex-row mb-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex flex-row mb-8 ${
                    isActive ? "bg-gray-200 font-bold" : ""
                  }`
                }
              >
                <h1 className="mx-3">
                  <UserRoundPenIcon />
                </h1>
                <h1>Manage Users</h1>
              </NavLink>
            </div>
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
