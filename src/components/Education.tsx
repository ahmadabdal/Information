import React from "react";
import { EDUCATION } from "../../constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {EDUCATION.map((edu) => (
          <div
            key={edu.university}
            className="bg-slate-800/50 p-8 rounded-lg shadow-none"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-100">
                  {edu.university}
                </h3>
                <p className="text-slate-400">{edu.location}</p>
              </div>
              <p className="text-lg font-medium text-cyan-400">{edu.dates}</p>
            </div>

            <p className="text-lg text-slate-300 mb-6">
              {edu.degree} in {edu.major}
              {edu.gpa && (
                <span className="text-slate-400 text-base ml-2">
                  • GPA: {edu.gpa}
                </span>
              )}
            </p>

            {/* {edu.coursework && edu.coursework.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-200 mb-3">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
