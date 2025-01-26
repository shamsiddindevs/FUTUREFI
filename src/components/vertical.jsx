import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Navigation module
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import axios from "axios";

const VerticalSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/apiServer/carousel");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative w-[400px] h-[500px]">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
            loading="lazy"
              src={item.image} // Update this to match your API response key
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10"
        aria-label="Previous Slide"
      >
        <FaArrowUp />
      </button>
      <button
        className="custom-next absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10"
        aria-label="Next Slide"
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default VerticalSlider;
