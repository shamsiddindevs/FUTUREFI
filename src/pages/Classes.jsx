import {useState, useEffect} from "react";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {HashLink} from "react-router-hash-link";
import {
  FaChalkboardTeacher,
  FaDownload,
  FaComments,
  FaMobileAlt,
} from "react-icons/fa";
import {BiBarChartAlt, BiLineChart} from "react-icons/bi";
import {MdDesignServices} from "react-icons/md";
import { Banner } from "../components/Banner";

const Classes = () => {
  const {t} = useTranslation();

  const initialFormData = {
    name: "",
    email: "",
    age: "",
    grade: "",
    category: "",
    text_box_one: "",
    text_box_two: "",
    text_box_three: "",
    check_box: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://mission.uz/en/api/v1/appeal-categories/"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "number" ? +value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mission.uz/en/api/v1/appeal/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Please verify your email!", {
          style: {
            padding: "16px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
          },
        });
        setFormData(initialFormData); // Clear form data
        console.log(await response.json());
      } else {
        toast.console.warn("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting feedback.");
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

  return (
    <>
      <section className="pb-20" >
        <div className=" px-5 text-center min-h-screen flex justify-center items-center flex-col gap-5 bg-slate-200">
          <h1 className="text-[40px]  font-semibold lg:font-bold leading-[50px] lg:text-[60px] lg:leading-[65px] my-20  ">
            Welcome to FutureFi Network’s <br /> Online Classes
          </h1>
          <HashLink
            to="#contact"
            className="border border-yellow-500 border-spacing-2 font-bold  transition-colors  bg-yellow-500   hover:opacity-80  text-white  py-2.5 rounded-md px-8  text-xl">
            Sign Up
          </HashLink>
        </div>

        <section className="py-20 bg-green-50">
        <div className="container mx-auto max-w-[1320px] px-5 ">
         
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20  mb-40 ">
              {/* Offerings Section */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-green-600">
                  Overview
                </h2>
                <h1 className="text-4xl font-bold text-gray-800 mb-5">
                  Our classes
                </h1>
                <p className="text-gray-600">
                Our online classes, delivered via Zoom, offer a structured and interactive learning experience tailored to different skill levels. With unique content separate from our videos, each class series challenges and supports learners as they build their financial knowledge. Upon completion of a series, participants can continue expanding their skills by moving on to other classes or video sets.
                </p>
              </div>
              <div className=" flex-1 grid  lg:grid-cols-1  gap-6">
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <FaChalkboardTeacher className="text-green-600 text-5xl mr-4 p-2 bg-green-100 rounded-full " />
                  <span className="text-gray-800 font-medium">
                    500+ High Quality Lessons
                  </span>
                </div>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <FaDownload className="text-green-600 text-5xl mr-4 p-2 bg-green-100 rounded-full " />
                  <span className="text-gray-800 font-medium">
                    Downloadable Templates, Guides, and Resources
                  </span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg">
                  <FaComments className="text-green-600 text-5xl mr-4 p-2 bg-green-100 rounded-full " />
                  <span className="text-gray-800 font-medium">
                    Ask Instructors Anything With the Discussion Forum
                  </span>
                </div>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <FaMobileAlt className="text-green-600 text-5xl mr-4 p-2 bg-green-200 rounded-full " />
                  <span className="text-gray-800 font-medium">
                    Access on Any Device
                  </span>
                </div>
              </div>
            </div>

            {/* Courses Section */}
            <div className="space-y-6 ">
              <h2 className="text-lg font-semibold text-blue-600">
                Our courses
              </h2>
              <h1 className="text-4xl font-bold text-gray-800">
                What we teach
              </h1>
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
                <div className="bg-white border border-blue-200 shadow-lg rounded-lg p-10 text-center">
                  <BiBarChartAlt className="text-blue-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                  Personal Finance Advanced
                  </h3>
                  <p className="text-gray-600 mt-2">
                  Take your financial knowledge to the next level with more advanced topics. After this series, you will be equipped to master your finances and grow your wealth!
                  </p>
                </div>
                <div className="bg-white border border-orange-200 shadow-lg rounded-lg p-6 text-center">
                  <BiLineChart className="text-orange-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                  Corporate Finance Beginner 
                  </h3>
                  <p className="text-gray-600 mt-2">
                  Learn the fundamentals of corporate finance, including the time value of money, capital budgeting, and essential concepts to build a strong foundation in the <br /> finance world.
                  </p>
                </div>
                <div className="bg-white border border-green-200 shadow-lg rounded-lg p-6 text-center">
                  <MdDesignServices className="text-green-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Slide Design
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Design professional PowerPoint slides using custom themes
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <BiBarChartAlt className="text-blue-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Data Visualization
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Make professional charts, visuals, and dashboards
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <BiLineChart className="text-orange-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Financial Modelling
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Build industry-standard valuation models on Excel
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <MdDesignServices className="text-green-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Slide Design
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Design professional PowerPoint slides using custom themes
                  </p>
                </div>
              </div>
            </div>
          </div>
      
        </section>


        <div className="py-28 bg-white">
        <Banner images={images} speed={10000} />
        </div>
       
        <div
          id="contact"
          className="px-5 flex items-center justify-center ">
          <div className="w-full max-w-lg bg-white border border-yellow-200 rounded-lg shadow-lg p-8 ">
            <div className="text-center mb-6">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-yellow-500 text-white rounded-lg py-3">
                Tell Us What You Think
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6">
              {/* Name Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Email Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@example.com"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Age Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  placeholder="Age"
                  onChange={handleInputChange}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Grade Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Grade
                </label>
                <input
                  required
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  placeholder="Grade"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Category Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Class
                </label>
                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full">
                  <option
                    value=""
                    disabled>
                    Select a class
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Text Box One Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Briefly describe your experience with finance(if any).
                </label>
                <textarea
                  name="text_box_one"
                  value={formData.text_box_one}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full p-4 rounded-lg border border-gray-300 "></textarea>
              </div>

              {/* Text Box Two Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  What do you hope to learn from this class series?
                </label>
                <textarea
                  name="text_box_two"
                  value={formData.text_box_two}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full p-4 rounded-lg border border-gray-300"></textarea>
              </div>

              {/* Text Box Three Section */}
              <div>
                <label className="font-normal block mb-3 text-slate-500">
                  Attendance Policy: Participants who miss more than two
                  sessions without a valid excuse will not qualify for the
                  certificate. In such cases, the class series must be retaken
                  to earn certification.
                </label>
                {/* Check Box Section */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check_box"
                    checked={formData.check_box}
                    onChange={handleInputChange}
                    className="mr-2 checkbox  checkbox-warning "
                  />
                  <label className="font-normal block text-yellow-500">
                    I agree to participate actively and follow the class
                    guidelines.
                  </label>
                </div>
              </div>

              {/* Text Box Three Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  Is there anything else we should know?
                </label>
                <textarea
                  name="text_box_three"
                  value={formData.text_box_three}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full p-4 rounded-lg border border-gray-300"></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Classes;
