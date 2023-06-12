import React from 'react';
import { Helmet } from 'react-helmet-async';

const StudentDashboard = () => {
    return (
      <div>
        <Helmet>
          <title>Student Dashboard - Lingui</title>
        </Helmet>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className='bg-gray-100'>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>CLasses</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              <tr>
                <th>1</th>
                <td> Ganderton</td>
                <td>student@g.com</td>
                <td>english</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default StudentDashboard;