import {useState} from "react";
import {useEffect} from "react";

import {FaArrowRight, FaArrowDown} from "react-icons/fa";
import {getSwaggerData} from "../components/apiServer";
import {Link, useParams} from "react-router-dom";

const Courses = () => {
  const [module, setModule] = useState(null);
  console.log(module);
  
  const {id} = useParams() 
  console.log(id);
  
  useEffect(() => {
    getSwaggerData(`modul/${id}/`).then((data) => {
      setModule(data); // Assuming the API returns an array and we take the first element
      console.log(data);
    });
  }, [id]);

  const toggleModule = () => {
    setModule({
      ...module,
      expanded: !module?.expanded,
    });
  };

  useEffect(() => {
    if (
      module &&
      module.videos.every((video) => !video.isPlaying)
    ) {
      setModule({
        ...module,
        videos: module.videos.map((video, videoIndex) => ({
          ...video,
          isPlaying: videoIndex === 0,
        })),
      });
    }
  }, [module]);

  const playNextVideo = (currentVideoId) => {
    const currentVideoIndex = module.videos.findIndex(
      (video) => video.id === currentVideoId
    );
    const nextVideoIndex = (currentVideoIndex + 1) % module.videos.length;
    setModule({
      ...module,
      videos: module.videos.map((video, index) => ({
        ...video,
        isPlaying: index === nextVideoIndex,
      })),
    });
  };

  const playPrevVideo = (currentVideoId) => {
    const currentVideoIndex = module.videos.findIndex(
      (video) => video.id === currentVideoId
    );
    const prevVideoIndex =
      (currentVideoIndex - 1 + module.videos.length) % module.videos.length;
    setModule({
      ...module,
      videos: module.videos.map((video, index) => ({
        ...video,
        isPlaying: index === prevVideoIndex,
      })),
    });
  };

  return (
    <div className=" px-2 pt-2  bg-gray-200 h-full mt-[88px]">
      <div className="flex flex-col md:flex-row gap-2">
        <ul className="w-full md:w-64 sm:block  bg-white shadow-lg p-6 rounded-lg overflow-auto h-[85vh]">
          <li>
            {" "}
            <h1 className="text-2xl font-bold font-spaceGrotesk mb-6">
              Kurs tarkibi
            </h1>
          </li>
          {module && (
            <li className=" py-3">
              <div className="flex justify-between items-center">
                <span className="text-[#444] text-[16px] font-semibold  font-spaceGrotesk">
                  {module.title}
                </span>
                <button
                  onClick={toggleModule}
                  className="text-gray-500 text-sm">
                  {module.expanded ? <FaArrowDown /> : <FaArrowRight />}
                </button>
              </div>
              {module.expanded && (
                <div className="mt-3 ">
                  {module.videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex justify-between items-center hover:bg-slate-100 px-2 rounded-md cursor-pointer ">
                      <div className="py-2 flex w-full  justify-between items-center ">
                        <span className="text-sm">
                          {video.id}. {video.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          )}
        </ul>
        <div className="flex-1 h-[85vh] w-full max-w-[1320px] mx-auto  shadow-md rounded-lg overflow-hidden">
          {module &&
            module.videos.map(
              (video) =>
                video.isPlaying &&
                video.video && (
                  <div key={video.id}>
                    <div className="flex-1 h-[78vh] w-full bg-white shadow-md rounded-lg overflow-hidden">
                      <video
                        controlsList="nodownload"
                        className="h-full w-full bg-black "
                        controls>
                        <source
                          src={video.video}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex  items-center justify-between py-1 px-2  bg-white rounded-lg mt-1 ">
                      <button
                        className="btn btn-primary btn-sm "
                        onClick={() => playPrevVideo(video.id)}
                        disabled={
                          module.videos.findIndex((v) => v.id === video.id) ===
                          0
                        }>
                        Oldingi dars {""}
                      </button>
                      <h3 className="font-semibold text-md capitalize">
                        {video.id}. {video.name}
                      </h3>
                      {module.videos.findIndex((v) => v.id === video.id) ===
                      module.videos.length - 1 ? (
                        <Link
                          to={"/quest"}
                          className="btn btn-primary btn-sm ">
                          Start Quiz Test
                        </Link>
                      ) : (
                        <button
                          className="btn btn-primary btn-sm "
                          onClick={() => playNextVideo(video.id)}>
                          Keyingi dars
                        </button>
                      )}
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};
export default Courses;
