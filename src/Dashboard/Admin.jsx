import React from "react";
import { Helmet } from "react-helmet-async";

const Admin = () => {
  return (
    <div>
      <Helmet>
        <title>Student Dashboard - Lingui</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-gray-100">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr>
              <th>1</th>
              <td> Ganderton</td>
              <td>student@g.com</td>
              <td>student</td>
              <td>
                <button className=" px-7 py-1 md:m-1 mb-1 rounded-lg text-white bg-sky-500 hover:bg-sky-600">
                  make admin
                </button>
                <button className=" px-4 py-1 rounded-lg text-white bg-sky-500 hover:bg-sky-600">
                  make instructor
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
