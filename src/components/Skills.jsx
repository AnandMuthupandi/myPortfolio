import React from "react";
import react from "../assets/images/react.png";
import angular from "../assets/images/angular.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import postman from "../assets/images/postman.png";
import swagger from "../assets/images/swagger.png";
import git from "../assets/images/git.png";
import graphql from "../assets/images/graphql.png";
import redux from "../assets/images/redux.png";
import sql from "../assets/images/sql.png";
import node from "../assets/images/node5.png";
import tailwind from "../assets/images/tailwind.png";
import bootstrap from "../assets/images/bootstrap.png";
import jest from "../assets/images/jest.png";
import d3 from "../assets/images/d3.png";

const Skills = () => {
  const skills = [
    react,
    angular,
    html5,
    css3,
    javascript,
    typescript,
    node,
    redux,
    sql,
    graphql,
    d3,
    jest,
    bootstrap,
    tailwind,
    postman,
    swagger,
    git,
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <div
            className="bg-white py-24 sm:py-32"
            style={{ borderRadius: "25px" }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {skills.map((content) => {
                  return (
                    <>
                      <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={content}
                        alt="Transistor"
                        width={158}
                        height={48}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
