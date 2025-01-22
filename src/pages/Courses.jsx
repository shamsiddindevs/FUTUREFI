import {useState, useEffect, useRef} from "react";

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
import {HashLink} from "react-router-hash-link";

const Courses = () => {
  const videoRefs = useRef([]);
  const [swiper, setSwiper] = useState(null);
  const [module, setModule] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [allVideosFinished, setAllVideosFinished] = useState(false);
  const [swiperDirection, setSwiperDirection] = useState("vertical"); // State to manage Swiper direction

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

  useEffect(() => {
    const updateSwiperDirection = () => {
      if (window.innerWidth <= 768) {
        setSwiperDirection("horizontal"); // Mobile devices
      } else {
        setSwiperDirection("vertical"); // Laptops and larger screens
      }
    };

    updateSwiperDirection(); // Set initial direction
    window.addEventListener("resize", updateSwiperDirection); // Update on resize

    return () => {
      window.removeEventListener("resize", updateSwiperDirection); // Clean up
    };
  }, []);

  const handleVideoEnded = (index) => {
    if (index === module.videos.length - 1) {
      setAllVideosFinished(true);
    }
  };

  const playNextVideo = (currentVideoId) => {
    const currentVideoIndex = module.videos.findIndex(
      (video) => video.id === currentVideoId
    );
    const nextVideoIndex = currentVideoIndex + 1;

    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].pause();
    }

    if (nextVideoIndex < module.videos.length) {
      setModule({
        ...module,
        videos: module.videos.map((video, index) => ({
          ...video,
          isPlaying: index === nextVideoIndex,
        })),
      });
    } else {
      setAllVideosFinished(true);
    }
  };

  const playPrevVideo = (currentVideoId) => {
    const currentVideoIndex = module.videos.findIndex(
      (video) => video.id === currentVideoId
    );
    const prevVideoIndex = currentVideoIndex - 1;

    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].pause();
    }

    if (prevVideoIndex >= 0) {
      setModule({
        ...module,
        videos: module.videos.map((video, index) => ({
          ...video,
          isPlaying: index === prevVideoIndex,
        })),
      });
    }
  };

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
                  onClick={() => setShowQuiz(true)}
                  className="p-2">
                  {t("course.btn.startQuiz")}
                </button>
              </div>
            </li>
          )}
        </ul>
        <div className="flex-1 h-[85vh] w-full shadow-md rounded-lg overflow-auto">
          {showQuiz ? (
            <Quiz
              id={id}
              setShowQuiz={setShowQuiz}
              quiz={module.questions}
            />
          ) : (
            <div className="bg-white">
              <button
                className="link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
                onClick={() => {
                  const playingVideo = module.videos.find(
                    (video) => video.isPlaying
                  );
                  playPrevVideo(playingVideo.id);
                  swipperPrevVideo();
                }}>
                <FaAngleUp />
                {t("course.btn.prev")}
              </button>

              <Swiper
                direction={swiperDirection} // Dynamic Swiper direction
                slidesPerView={1}
                spaceBetween={30}
                speed={1000}
                modules={[Navigation]}
                className="h-[900px] xl:max-h-[1000px]"
                onSwiper={setSwiper}>
                {module &&
                  module.videos.map((video, index) => (
                    <SwiperSlide key={video.id}>
                      <div
                        className="text-center overflow-hidden"
                        id="videoContainer">
                        <div className="border-b-2 border-b-yellow-500">
                          <h3 className="inline-block text-xl font-bold capitalize text-center py-5 my-16">
                            {video.name}
                          </h3>
                        </div>
                        <div className="max-w-[1100px] mx-auto my-10">
                          <video
                          poster={cubs}
                            loading="lazy"
                            ref={(el) => (videoRefs.current[index] = el)}
                            controlsList="nodownload"
                            className="h-[500px] w-[90%] md:h-[600px] md:w-[90%] lg:h-[618px] lg:w-[1000px] mx-auto bg-black"
                            controls
                            onEnded={() => handleVideoEnded(index)}>
                            <source
                              src={video.video}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              <HashLink
                to="#video"
                className="link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
                onClick={() => {
                  if (allVideosFinished) {
                    setShowQuiz(true);
                  } else {
                    const playingVideo = module.videos.find(
                      (video) => video.isPlaying
                    );
                    playNextVideo(playingVideo.id);
                    swipperNextVideo();
                  }
                }}>
                {allVideosFinished
                  ? t("course.btn.startQuiz")
                  : t("course.btn.next")}
                <FaAngleDown />
              </HashLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { getSwaggerData } from "../components/apiServer";
// import { useParams } from "react-router-dom";
// import cubs from "../assets/cubs.jpg";
// import Quiz from "./Quest";
// import { t } from "i18next";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { HashLink } from "react-router-hash-link";

// const Courses = () => {
//   const videoRefs = useRef([]); // Array to hold references to all videos
//   const [swiper, setSwiper] = useState(null);
//   const [module, setModule] = useState(null);
//   const [showQuiz, setShowQuiz] = useState(false); // Manage quiz visibility
//   const [allVideosFinished, setAllVideosFinished] = useState(false); // Tracks if all videos are finished

//   const { id } = useParams();

//   useEffect(() => {
//     getSwaggerData(`modul/${id}/`).then((data) => {
//       setModule(data);
//     });
//   }, [id]);

//   useEffect(() => {
//     if (module && module.videos.every((video) => !video.isPlaying)) {
//       setModule({
//         ...module,
//         videos: module.videos.map((video, videoIndex) => ({
//           ...video,
//           isPlaying: videoIndex === 0,
//         })),
//       });
//     }
//   }, [module]);

//   const handleVideoEnded = (index) => {
//     if (index === module.videos.length - 1) {
//       // If the last video finishes, set allVideosFinished to true
//       setAllVideosFinished(true);
//     }
//   };

//   const playNextVideo = (currentVideoId) => {
//     const currentVideoIndex = module.videos.findIndex(
//       (video) => video.id === currentVideoId
//     );
//     const nextVideoIndex = currentVideoIndex + 1;

//     // Pause the current video
//     if (videoRefs.current[currentVideoIndex]) {
//       videoRefs.current[currentVideoIndex].pause();
//     }

//     if (nextVideoIndex < module.videos.length) {
//       setModule({
//         ...module,
//         videos: module.videos.map((video, index) => ({
//           ...video,
//           isPlaying: index === nextVideoIndex,
//         })),
//       });
//     } else {
//       setAllVideosFinished(true);
//     }
//   };

//   const playPrevVideo = (currentVideoId) => {
//     const currentVideoIndex = module.videos.findIndex(
//       (video) => video.id === currentVideoId
//     );
//     const prevVideoIndex = currentVideoIndex - 1;

//     // Pause the current video
//     if (videoRefs.current[currentVideoIndex]) {
//       videoRefs.current[currentVideoIndex].pause();
//     }

//     if (prevVideoIndex >= 0) {
//       setModule({
//         ...module,
//         videos: module.videos.map((video, index) => ({
//           ...video,
//           isPlaying: index === prevVideoIndex,
//         })),
//       });
//     }
//   };

//   const swipperNextVideo = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   const swipperPrevVideo = () => {
//     if (swiper) {
//       swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="px-2 pt-2 bg-gray-200 h-full mt-[88px]">
//       <div className="flex flex-col md:flex-row gap-2">
//         <ul className="relative w-full md:w-64 sm:block bg-white shadow-lg p-6 pt-32 rounded-lg overflow-auto h-[85vh]">
//           <li>
//             <h1
//               className="absolute top-0 left-0 text-2xl text-white w-full h-32 flex items-center p-4 font-bold font-spaceGrotesk mb-6"
//               style={{
//                 background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) ), url(${cubs})`,
//                 backgroundSize: "cover",
//               }}
//             >
//               {module ? module.name : "Kurs nomi"}
//             </h1>
//           </li>
//           {module && (
//             <li className="py-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-[#444] text-[16px] font-semibold font-spaceGrotesk">
//                   {module.title}
//                 </span>
//               </div>
//               <div className="mt-3">
//                 {module.videos.map((video) => (
//                   <div
//                     key={video.id}
//                     className="flex justify-between items-center hover:bg-slate-100 px-2 rounded-md cursor-pointer"
//                   >
//                     <div className="py-2 flex w-full justify-between items-center">
//                       <span className="text-sm">
//                         {video.id}. {video.name}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//                 <button onClick={() => setShowQuiz(true)} className="p-2">
//                   {t("course.btn.startQuiz")}
//                 </button>
//               </div>
//             </li>
//           )}
//         </ul>
//         <div className="flex-1 h-[85vh] w-full shadow-md rounded-lg overflow-auto">
//           {showQuiz ? (
//             <Quiz id={id} setShowQuiz={setShowQuiz} quiz={module.questions} />
//           ) : (
//             <div className="bg-white">
//               {/* Previous Video Button */}
//               <button
//                 className="link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
//                 onClick={() => {
//                   const playingVideo = module.videos.find((video) => video.isPlaying);
//                   playPrevVideo(playingVideo.id);
//                   swipperPrevVideo();
//                 }}
//               >
//                 <FaAngleUp />
//                 {t("course.btn.prev")}
//               </button>

//               {/* Swiper for Videos */}
//               <Swiper
//                 direction="vertical"
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 allowTouchMove={false}
//                 speed={1000}
//                 modules={[Navigation]}
//                 className="h-[900px] xl:max-h-[1000px]"
//                 onSwiper={setSwiper}
//               >
//                 {module &&
//                   module.videos.map((video, index) => (
//                     <SwiperSlide key={video.id}>
//                       <div className="text-center overflow-hidden" id="videoContainer">
//                         <div className="border-b-2 border-b-yellow-500">
//                           <h3 className="inline-block text-xl font-bold capitalize text-center py-5 my-16">
//                             {video.name}
//                           </h3>
//                         </div>
//                         <div className="max-w-[1100px] mx-auto my-10">
//                           <video
//                             ref={(el) => (videoRefs.current[index] = el)} // Add video to refs
//                             controlsList="nodownload"
//                             className="max-h-[618px] w-full bg-black"
//                             controls
//                             onEnded={() => handleVideoEnded(index)} // Handle video end
//                           >
//                             <source src={video.video} type="video/mp4" />
//                             Your browser does not support the video tag.
//                           </video>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//               </Swiper>

//               {/* Next/Quiz Button */}
//               <HashLink to='#video'
//                 className="link link-hover w-full text-white bg-gray-800 text-center py-3 flex flex-col gap-1 justify-center items-center"
//                 onClick={() => {
//                   if (allVideosFinished) {
//                     setShowQuiz(true); // Start Quiz
//                   } else {
//                     const playingVideo = module.videos.find((video) => video.isPlaying);
//                     playNextVideo(playingVideo.id);
//                     swipperNextVideo();
//                   }
//                 }}
//               >
//                 {allVideosFinished ? t("course.btn.startQuiz") : t("course.btn.next")}
//                 <FaAngleDown />
//               </HashLink>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;
