import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {
  FaChevronUp,
  FaChevronDown,
  FaVideo,
  FaQuestion,
  
} from "react-icons/fa";
import {getSwaggerData} from "../components/apiServer";

const CourseIntro = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getSwaggerData("moduls/").then((data) => {
      setModules(data.map((module) => ({...module, expanded: false})));
      console.log(data);
    });
  }, []);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) =>
        module.id === id ? {...module, expanded: !module.expanded} : module
      )
    );
  };

  return (
    <>
      <section className="mt-[88px]"
        style={{
          background:
            'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("https://picsum.photos/1200/300")',
          backgroundSize: "cover",
        }}>
        <div className="container max-w-[1320px] mx-auto px-5 ">
          <h1 className="text-5xl  font-semibold mt-20 pt-32 pb-48  text-white ">
            Course Modules
          </h1>
        </div>
      </section>

      <section className="py-10 bg-slate-100">
        <div className="w-full max-w-[1320px] mx-auto px-5">
          <h2 className="text-4xl py-6 font-bold">Welcome back!</h2>
          <h3 className="text-4xl py-6 font-bold text-center">Course Modules</h3>
      
          <div className=" bg-gray-100">
            {modules.map((module) => (
              <div
                key={module.id}
                className="mb-8 bg-white p-6 rounded-lg shadow-lg ">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {module.name}
                  </h2>
                  <button
                    className="text-yellow-500 font-bold"
                    onClick={() => toggleModule(module.id)}>
                    {module.expanded ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {module.expanded && (
                  <div className="mt-4 flex gap-10 items-center flex-wrap ">
                    <img
                      loading="lazy"
                      src={module.image || "https://picsum.photos/200/300"}
                      alt={module.title}
                      className="h-80 rounded-xl object-cover"
                    />
                    <div className="flex flex-col gap-10">
                      <div>
                        <h2 className="card-title text-2xl font-bold mb-2">
                          {module.name}
                        </h2>
                        <p className="text-gray-600">{module.description}</p>
                      </div>

                      <div className="flex items-end justify-between gap-10">
                        <div className="flex flex-col gap-2">
                          <p className="flex items-center gap-2">
                            <FaVideo className="text-blue-500" />
                            <strong>Videos:</strong> {module.videos_count}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaQuestion className="text-green-500" />
                            <strong>Questions:</strong> {module.questions_count}
                          </p>
                        
                        </div>
                        <div className="info_group flex flex-wrap gap-4 items-center justify-between">
                          <Link
                            to={`/courses/${module.id}`}
                            className="btn btn-md btn-primary">
                            Start Lesson
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseIntro;
