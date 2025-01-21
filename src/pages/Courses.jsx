import {useState, useEffect, useRef} from "react";
import axios from "axios";
import {getSwaggerData} from "../components/apiServer";
import {useParams} from "react-router-dom";
import cubs from "../assets/cubs.jpg";
import Quiz from "./Quest";
import {t} from "i18next";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Courses = () => {
  const videoRef = useRef(null)

  const [swiper, setSwiper] = useState(null);

  const [module, setModule] = useState(null);
  const [showQuiz, setShowQuiz] = useState(
    localStorage.getItem("showQuiz") && false
  );

  function handleShowQuiz(type) {
    setShowQuiz(type);
    localStorage.setItem("showQuiz", type);
  }

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
    const currentVideo = module.videos.find(
      (video) => video.id === currentVideoId
    );
   console.log(currentVideo);
   
    
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

  const swipperNextVideo = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const swipperPrevVideo = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

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
                  onClick={() => handleShowQuiz(true)}
                  className="p-2">
                  {t("course.btn.startQuiz")}
                </button>
              </div>
            </li>
          )}
        </ul>
        <div className="flex-1 h-[85vh] w-full  shadow-md rounded-lg overflow-auto">
          {showQuiz ? (
            <Quiz
              id={id}
              setShowQuiz={handleShowQuiz}
              quiz={module.questions}
            />
          ) : (
            <div className="bg-white">
              {/* btn prew */}
              <div className="text-center ">
                {module &&
                  module.videos.map(
                    (video) =>
                      video.isPlaying &&
                      video.video && (
                        <button
                          key={video.id}
                          className=".swiper-button-prev link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
                          onClick={() => {
                            playPrevVideo(video.id);
                            swipperPrevVideo();
                          }}
                          disabled={
                            module.videos.findIndex(
                              (v) => v.id === video.id
                            ) === 0
                          }>
                          <span>
                            <FaAngleUp />
                          </span>
                          {t("course.btn.prev")}
                        </button>
                      )
                  )}
              </div>
              {/* swipper */}
              <Swiper
                direction="vertical"
                id="videoContainer"
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                allowTouchMove={false}
                speed={1000}
                modules={[Navigation]}
                className="h-[900px] xl:max-h-[1000px]"
                onSwiper={setSwiper}>
                {module &&
                  module.videos.map(
                    (video) =>
                      video.video && (
                        <SwiperSlide key={video.id}>
                          
                          <div
                            key={video.id}
                            className=" text-center overflow-hidden "
                            id="videoContainer">
                            <div className="border-b-2 border-b-yellow-500">
                              <h3 className=" inline-block  text-xl font-bold md:text-2xl lg:text-4xl capitalize text-center py-5 my-16 relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-yellow-500 before:bottom-0 before:left-0 mx-auto ">
                                {video.name}
                              </h3>
                            </div>
                            <div className="max-w-[1100px]  mx-auto my-10">
                              <video
                                ref={videoRef}
                                controlsList="nodownload"
                                className="max-h-[618px] w-full bg-black"
                                controls>
                                <source
                                  src={video.video}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                  )}
              </Swiper>

              

              {/* btn next */}
              <div className="bg-white rounded-lg ">
                {module &&
                  module.videos.map(
                    (video) =>
                      video.isPlaying &&
                      video.video && (
                        <div key={video.id}>
                          {module.videos.findIndex((v) => v.id === video.id) ===
                          module.videos.length - 1 ? (
                            <button
                              onClick={() => setShowQuiz(true)}
                              className="link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center">
                              {t("course.btn.startQuiz")}
                            </button>
                          ) : (
                            <a
                              href="#videoContainer"
                              className=" link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
                              onClick={() => {playNextVideo(video.id); swipperNextVideo()}}>
                              {t("course.btn.next")}
                              <span>
                                <FaAngleDown />
                              </span>
                            </a>
                          )}
                        </div>
                      )
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Courses;
