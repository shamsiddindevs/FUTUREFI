import {useState, useEffect} from "react";
import axios from "axios";
import {getSwaggerData} from "../components/apiServer";
import {useParams} from "react-router-dom";
import cubs from "../assets/cubs.jpg";
import Quiz from "./Quest";

const Courses = () => {
  const [module, setModule] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    getSwaggerData(`modul/${id}/`).then((data) => {
      setModule(data);
    });
  }, [id]);

  useEffect(() => {
    if (module && module.videos.every((video) => !video.isPlaying)) {
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

  useEffect(() => {
    if (module) {
      const playingVideo = module.videos.find((video) => video.isPlaying);
      if (playingVideo) {
        axios
          .post("https://mission.uz/en/api/v1/add-view/", {
            video_id: playingVideo.id,
          })
          .then((response) => {
            console.log("Video view added:", response.data);
          })
          .catch((error) => {
            console.error("Error adding video view:", error);
          });
      }
    }
  }, [module]);

  return (
    <div className="px-2 pt-2 bg-gray-200 h-full mt-[88px]">
      <div className="flex flex-col md:flex-row gap-2">
        <ul className="relative w-full md:w-64 sm:block bg-white shadow-lg p-6 pt-32 rounded-lg overflow-auto h-[85vh]">
          <li>
            <h1
              className="absolute top-0 left-0 text-2xl text-white w-full h-32 flex items-center p-4 font-bold font-spaceGrotesk mb-6"
              style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) ), url(${cubs})`,
                backgroundSize: "cover",
              }}>
              {module ? module.name : "Kurs nomi"}
            </h1>
          </li>
          {module && (
            <li className="py-3">
              <div className="flex justify-between items-center">
                <span className="text-[#444] text-[16px] font-semibold font-spaceGrotesk">
                  {module.title}
                </span>
              </div>
              <div className="mt-3">
                {module.videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex justify-between items-center hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                    <div className="py-2 flex w-full justify-between items-center">
                      <span className="text-sm">
                        {video.id}. {video.name}
                      </span>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setShowQuiz(true)}
                  className="p-2">
                  Start Quiz Test
                </button>
              </div>
            </li>
          )}
        </ul>
        <div className="flex-1 h-[85vh] w-full max-w-[1320px] mx-auto shadow-md rounded-lg overflow-hidden">
          {showQuiz ? (
            <Quiz id={id} />
          ) : (
            module &&
            module.videos.map(
              (video) =>
                video.isPlaying &&
                video.video && (
                  <div key={video.id}>
                    <div className="flex-1 h-[75vh] w-full bg-white shadow-md rounded-lg overflow-hidden">
                      <video
                        controlsList="nodownload"
                        className="h-full w-full bg-black"
                        controls>
                        <source
                          src={video.video}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex items-center justify-between h-full py-1 px-2 bg-white rounded-lg mt-1">
                      <button
                        className="btn btn-primary btn-md"
                        onClick={() => playPrevVideo(video.id)}
                        disabled={
                          module.videos.findIndex((v) => v.id === video.id) ===
                          0
                        }>
                        Oldingi dars {""}
                      </button>
                      <h3 className="font-semibold text-sm md:text-md capitalize">
                        {video.id}. {video.name}
                      </h3>
                      {module.videos.findIndex((v) => v.id === video.id) ===
                      module.videos.length - 1 ? (
                        <button
                          onClick={() => setShowQuiz(true)}
                          className="btn btn-primary btn-md">
                          Start Quiz Test
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary btn-md"
                          onClick={() => playNextVideo(video.id)}>
                          Keyingi dars
                        </button>
                      )}
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Courses;
