import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { getSwaggerData } from "../components/apiServer";

const CourseIntro = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getSwaggerData("moduls/").then((data) => {
      setModules(data.map(module => ({ ...module, expanded: false })));
      console.log(data);
    });
  }, []);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) =>
        module.id === id ? { ...module, expanded: !module.expanded } : module
      )
    );
  };

  return (
    <>
      <h1
        style={{
          background:
            'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://picsum.photos/1200/300")',
          backgroundSize: "cover",
        }}
        className="text-4xl font-semibold py-20 text-center text-white "
      >
        Course Modules
      </h1>
      <div className="p-6 bg-gray-100 ">
        {modules.map((module) => (
          <div key={module.id} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{module.name}</h2>
              <button
                className="text-yellow-500 font-bold"
                onClick={() => toggleModule(module.id)}
              >
                {module.expanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {module.expanded && (
              <div className="mt-4 flex gap-10 items-start flex-wrap ">
                <img
                  src={module.image||"https://picsum.photos/200/300"}
                  alt={module.title}
                  className="w-96 h-48 rounded-xl object-cover"
                />
                <div>
                  <p>
                    <strong>Title:</strong> {module.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {module.description}
                  </p>
                  <p>
                    <strong>Videos:</strong> {module.videos_count}
                  </p>
                  <p>
                    <strong>Questions:</strong>{module.questions_count}
                  </p>
                  <p>
                    <strong>Rate:</strong>{module.rate}
                  </p>
                  <div className="info_group flex flex-wrap gap-4 items-center justify-between">
                    <Link to={"/courses"} className="btn btn-sm btn-primary">
                      Start Lesson
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseIntro;
