/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Anime from 'react-anime';
import { FaBookOpen, FaLaptop, FaLockOpen, FaRegStar, FaStar, FaUsers } from 'react-icons/fa';
import Rating from 'react-rating';

const Body = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch("https://summer-camp-server-side-seven.vercel.app/popularClasses")
        .then(res=>res.json())
        .then(data=>setPopularClasses(data))
    }, [])
    
    const [popularTeachers, setPopularTeachers] = useState([]);
    useEffect(() => {
        fetch("https://summer-camp-server-side-seven.vercel.app/popularTeachers")
        .then(res=>res.json())
        .then(data=>setPopularTeachers(data))
    },[])


    return (
      <div className="my-6 md:my-20">
        {/*
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 justify-items-center my-4 px-4 md:my-8">
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
           */}
        
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 justify-items-center my-4 px-4 md:my-8">
          <Anime
            easing="easeOutElastic"
            opacity={[0, 1]}
            translateY={[-30, 0]}
            delay={300}
          >
            <div className="flex items-center gap-3">
              <FaLaptop className="text-2xl text-green-400" />
              <h3 className="text-xl md:text-2xl">Online Tutoring</h3>
            </div>
          </Anime>

          <Anime
            easing="easeOutElastic"
            opacity={[0, 1]}
            translateY={[-30, 0]}
            delay={500}
          >
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-2xl text-green-400" />
              <h3 className="text-xl md:text-2xl">20+ courses</h3>
            </div>
          </Anime>

          <Anime
            easing="easeOutElastic"
            opacity={[0, 1]}
            translateY={[-30, 0]}
            delay={700}
          >
            <div className="flex items-center gap-3">
              <FaLockOpen className="text-2xl text-green-400" />
              <h3 className="text-xl md:text-2xl">Lifetime Access</h3>
            </div>
          </Anime>

          <Anime
            easing="easeOutElastic"
            opacity={[0, 1]}
            translateY={[-30, 0]}
            delay={900}
          >
            <div className="flex items-center gap-3">
              <FaUsers className="text-2xl text-green-400" />
              <h3 className="text-xl md:text-2xl">Activate Learning</h3>
            </div>
          </Anime>
        </div>

        <div>
          <h2 className="text-3xl font-[600] text-center my-4 md:my-10">
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
        {/* popular classes */}
        <h2 className="text-3xl font-[600] text-center my-4 md:my-10">
          Popular Courses
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2  md:gap-4 p-3 ">
          {popularClasses.map((popularClass) => (
            <div
              key={popularClass.id}
              className="card w-80 md:w-96 bg-base-100 mx-auto shadow-xl"
            >
              <figure className="px-4 pt-4">
                <img src={popularClass.image} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{popularClass.name} language</h2>
                <p>
                  <span className="font-[500]">Instructor</span>:
                  {popularClass.instructor}
                </p>

                <div className="card-actions items-center ">
                  <div className="flex items-center">
                    <Rating
                      placeholderRating={popularClass.classRatings}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-orange-400" />}
                      fullSymbol={<FaStar />}
                    ></Rating>
                    <span>{popularClass.classRatings}</span>
                  </div>
                  <div>
                    <button className="btn btn-primary">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* popular teachers */}
        <h2 className="text-3xl font-[600] text-center my-4 md:my-10">
          Popular Teachers
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2  md:gap-4 p-3 ">
          {popularTeachers.map((popularTeacher) => (
            <div
              key={popularTeacher.id}
              className="card w-80 md:w-96 bg-base-100 mx-auto shadow-xl"
            >
              <figure className="px-4 pt-4">
                <img
                  src={popularTeacher.image}
                  alt=""
                  className="object-contain w-full h-[295px] rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{popularTeacher.name}</h2>
                <p>
                  <span className="font-[500]">Subject:</span>
                  {popularTeacher.class}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Body;