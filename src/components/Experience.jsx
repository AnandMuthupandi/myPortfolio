import React from "react";
import Stacks from "./common/Stacks";
import { Expereinces } from "./mapping/ExperiencesMapping";

const Experience = () => {
  return (
    <section id="experience" className="py-10 relative">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Work Experience</p>

        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap padding-50">
          <div className="-my-6" style={{ padding: "50px" }}>
            {Expereinces.map((experience) => (
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-cyan-500 mb-1 sm:mb-0 float-left absolute">
                  {experience.projectName}
                </div>

                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-8 mb-3 sm:mb-0 text-white-600 bg-cyan-600 rounded-full">
                    {experience.duration}
                  </time>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <h2 className="text-1xl font-semibold float-left absolute">
                    {experience.position}
                  </h2>
                  <br></br>
                  <br></br>
                  <div
                    className="text-gray-400 text-left"
                    style={{ padding: "25px" }}
                  >
                    <p>{experience.description1}</p>
                    <p>{experience.description2}</p>
                    <br></br>
                    <Stacks techs={experience.stacks} />

                    <ul class="list-disc" style={{ padding: "10px 50px" }}>
                      {experience.taskList.map((task) => (
                        <li>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
