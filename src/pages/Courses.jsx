import  {useState} from "react";
import {FaArrowRight, FaArrowDown, FaPlayCircle} from "react-icons/fa";

const Courses = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "01 Module",
      expanded: false,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/301",
        "https://picsum.photos/200/302",
        "https://picsum.photos/200/303",
        "https://picsum.photos/200/304",
        "https://picsum.photos/200/305",
        "https://picsum.photos/200/306",
        "https://picsum.photos/200/307",
        "https://picsum.photos/200/308",
        "https://picsum.photos/200/309",
      ],
      currentImage: 0,
      details: {
        description: "Introduction to Personal Finance",
        professor: "Benjamin Croitoru",
        university: "McGill University",
        duration: "13 minute video",
        test: "10 question test",
      },
    },
  ]);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) => {
        if (module.id === id) {
          return {...module, expanded: !module.expanded};
        }
        return module;
      })
    );
  };

  const nextImage = (id) => {
    setModules(
      modules.map((module) => {
        if (
          module.id === id &&
          module.currentImage < module.images.length - 1
        ) {
          return {...module, currentImage: module.currentImage + 1};
        }
        return module;
      })
    );
  };

  const prevImage = (id) => {
    setModules(
      modules.map((module) => {
        if (module.id === id && module.currentImage > 0) {
          return {...module, currentImage: module.currentImage - 1};
        }
        return module;
      })
    );
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Kurs tarkibi</h1>
      <ul className="bg-white shadow-lg p-6 rounded-lg">
        {modules.map((module) => (
          <li
            key={module.id}
            className="border-b py-3">
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-bold">{module.title}</span>
              <button
                onClick={() => toggleModule(module.id)}
                className="text-orange-500">
                {module.expanded ? <FaArrowDown /> : <FaArrowRight />}
              </button>
            </div>
            {module.expanded && module.details && (
              <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <p>
                  <strong>{module.details.description}</strong>
                </p>
                <p>
                  <strong>Professor:</strong> {module.details.professor}
                </p>
                <p>
                  <strong>University:</strong> {module.details.university}
                </p>
                <p>
                  <strong>Module Details:</strong>
                </p>
                <ul>
                  <li>
                    <FaPlayCircle className="inline text-red-500 mr-2" />{" "}
                    {module.details.duration}
                  </li>
                  <li>
                    <FaPlayCircle className="inline text-red-500 mr-2" />{" "}
                    {module.details.test}
                  </li>
                </ul>
                <div className="mt-4">
                  <img
                    src={module.images[module.currentImage]}
                    alt={`Slide ${module.currentImage + 1}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="mt-4 flex justify-between">
                    {module.currentImage > 0 ? (
                      <button
                        onClick={() => prevImage(module.id)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                        Previous
                      </button>
                    ):(<span></span>)}
                    {module.currentImage < module.images.length - 1 ?(
                      <button
                        onClick={() => nextImage(module.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Next
                      </button>):(<span></span>)
                    }
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
