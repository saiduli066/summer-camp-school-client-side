/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaLaptop, FaLockOpen, FaUsers } from 'react-icons/fa';

const Body = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch("https://summer-camp-server-side-seven.vercel.app/popularClasses")
        .then(res=>res.json())
        .then(data=>setPopularClasses(data))
    },[])
    return (
      <div className="my-4 md:my-8 ">
        <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center my-4 px-4 md:my-8">
          <div className="flex items-center gap-3">
            <FaLaptop className="text-2xl text-green-400" />
            <h3 className="text-xl md:text-2xl">Online Tutoring</h3>
          </div>
          <div className="flex items-center gap-3">
            <FaBookOpen className="text-2xl text-green-400" />
            <h3 className="text-xl md:text-2xl">20+ courses</h3>
          </div>
          <div className="flex items-center gap-3">
            <FaLockOpen className="text-2xl text-green-400" />
            <h3 className="text-xl md:text-2xl">Lifetime Access</h3>
          </div>
          <div className="flex items-center gap-3">
            <FaUsers className="text-2xl text-green-400" />
            <h3 className="text-xl md:text-2xl">Activate Learning</h3>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-3xl md:font-[600] text-center">
            Choose your course
          </h2>
          <p className="font-normal px-4 md:px-8 py-4">
            Our courses are designed by experienced language instructors who
            incorporate effective teaching methodologies, interactive learning
            materials, and engaging activities. By choosing our courses, you can
            expect a comprehensive and structured curriculum that covers
            essential language components such as grammar, vocabulary,
            pronunciation, listening, speaking, reading, and writing.
          </p>
        </div>
        <h2 className="text-xl md:text-3xl md:font-[600] text-center">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-3 md:p-8">
          {popularClasses.map((popularClass) => (
            <div
              key={popularClass.id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img src={popularClass.image} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{popularClass.name} language</h2>
                <p>{popularClass.instructor}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Body;