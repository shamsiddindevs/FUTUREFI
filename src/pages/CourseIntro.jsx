import {useState} from "react";
import {Link} from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const CourseIntro = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Introduction to Personal Finance",
      professor: {
        name: "Benjamin Croitoru",
        university: "McGill University",
        faculty: "Desautels Faculty of Management",
        position: "Associate Professor, Finance",
        image: "https://picsum.photos/200/301",
      },
      videoDuration: "13 minute video",
      testInfo: "10 question test",
      expanded: false,
    },
    {
      id: 2,
      title: "Budgeting and Saving",
      professor: {
        name: "John Doe",
        university: "McGill University",
        faculty: "Desautels Faculty of Management",
        position: "Professor, Finance",
        image: "https://picsum.photos/200/300",
      },
      videoDuration: "20 minute video",
      testInfo: "15 question test",
      expanded: false,
    },
  ]);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) =>
        module.id === id ? {...module, expanded: !module.expanded} : module
      )
    );
  };

  return (
    <>
      <h1 style={{background:'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://picsum.photos/1200/300")',backgroundSize:"cover"}} className="text-4xl font-semibold py-20 text-center text-white ">
        Course Modules
      </h1>
      <div className="p-6 bg-gray-100 ">
        {modules.map((module) => (
          <div
            key={module.id}
            className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{module.title}</h2>
              <button
                className="text-yellow-500 font-bold"
                onClick={() => toggleModule(module.id)}>
                {module.expanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {module.expanded && (
              <div className="mt-4 flex gap-10 items-start flex-wrap ">
                <img
                  src={module.professor.image}
                  alt={module.professor.name}
                  className="w-96 h-48 rounded-xl object-cover"
                />
                <div>
                  <p>
                    <strong>Professor:</strong> {module.professor.name}
                  </p>
                  <p>
                    <strong>University:</strong> {module.professor.university}
                  </p>
                  <p>
                    <strong>Faculty:</strong> {module.professor.faculty}
                  </p>
                  <p>
                    <strong>Position:</strong> {module.professor.position}
                  </p>
                  <p>
                    <strong>Module Details:</strong>
                  </p>
                  <div className="info_group flex flex-wrap gap-4 items-center justify-between">
                    <ul>
                      <li>{module.videoDuration}</li>
                      <li>{module.testInfo}</li>
                    </ul>
                    <Link
                      to={"/courses"}
                      className=" btn btn-sm btn-primary  ">
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
