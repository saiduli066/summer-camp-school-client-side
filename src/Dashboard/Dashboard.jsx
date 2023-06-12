/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChalkboardTeacher, FaHome, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div>
      <Helmet>
        <title>Dashboard - Lingui</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-[80%] mx-auto">
          <Outlet></Outlet>
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side w-[80%!important]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link className="text-xl" to="admin">
                <FaHome className="text-blue-500" />
                Admin
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="student">
                <FaUser className="text-blue-500" />
                Student
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="instructor">
                <FaChalkboardTeacher className="text-blue-500" />
                Instructor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;