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
  FaGraduationCap,
} from "react-icons/fa";
import { MdOutlineBusinessCenter} from "react-icons/md";
import {Banner} from "../components/Banner";
import { FaComputer, } from "react-icons/fa6";
import clas from "../assets/class1.jpg";
import { getSwaggerData } from "../components/apiServer";
import { AiOutlineBank, AiOutlineBook } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";


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
        const response = await getSwaggerData(`appeal-categories/`);
        setCategories(response);
      } catch (error) {
        setCategories([]); // Set categories to an empty array if there's an error
      }
    };

    fetchCategories();
  }, []);




   const [images, setimages] = useState([]);
   console.log(images);
   
  
    useEffect(() => {
      const fetchimages = async () => {
        try {
          const response = await getSwaggerData("carousel/");
          console.log(response);
  
          setimages(response);
        } catch (error) {
            setimages([]); // Set images to an empty array if there's an error
        }
      };
  
      fetchimages();

    }, []);

  

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "number" ? +value : value,
    }));
  };
  
  const BASE_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/en/api/v1/appeal/`, {
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
      toast.error("An error occurred while submitting feedback.");
    }
  };

  const courseData = [
    {
      icon: (
        <GiTakeMyMoney className="text-green-600 text-4xl mx-auto mb-4" />
      ),
      title: t("classTeach.data.5.title"),
      description:
      t("classTeach.data.0.description"),
      borderColor: "border-blue-200",
    },
    {
      icon: <FaGraduationCap className="text-orange-600 text-4xl mx-auto mb-4" />,
      title: t("classTeach.data.1.title"),
      description:
      t("classTeach.data.1.description"),
      borderColor: "border-orange-200",
    },
    {
      icon: <RiAccountCircleLine className="text-orange-600 text-4xl mx-auto mb-4" />,
      title: t("classTeach.data.4.title"),
      
      description:
      t("classTeach.data.2.description"),
      borderColor: "border-green-200",
    },
    {
      icon: <AiOutlineBook className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: t("classTeach.data.0.title"),
      
      description:
      t("classTeach.data.3.description"),
      borderColor: "border-blue-200",
    },
    {icon: <AiOutlineBank className="text-blue-600 text-4xl mx-auto mb-4" />,
      title: t("classTeach.data.3.title"),
      
      description:
      t("classTeach.data.4.description"),
      borderColor: "border-orange-200",
    },
    {
      icon: (
        <MdOutlineBusinessCenter className="text-green-600 text-4xl mx-auto mb-4" />
      ),
      title: t("classTeach.data.2.title"),
      description:
      t("classTeach.data.5.description"),
      borderColor: "border-green-200",
    },
  ];

  const howClass = [
    {icon: FaChalkboardTeacher, text: t("class.overview_ans.0")},
    {icon: FaDownload, text: t("class.overview_ans.1")},
    {
      icon: FaComments,
      text: t("class.overview_ans.2")
    },
    {icon: FaMobileAlt, text: t("class.overview_ans.3")},
    {icon: FaComputer, text: t("class.overview_ans.4")}
  ];

  return (
    <>
      <section className="pb-20">
        <div className=" px-5 text-center min-h-screen flex justify-center items-center flex-col gap-5 " style={{backgroundImage: `linear-gradient(rgba(133, 255, 184, 0.89), rgba(0, 0, 0, 0.87) ), url(${clas})`,backgroundSize:"cover"}}>
          <h1 className="text-[40px]  font-semibold lg:font-bold leading-[50px] lg:text-[60px] lg:leading-[65px] my-20  max-w-[1050px] text-yellow-300">
            {t("class.title")}
          </h1>
          <HashLink
            to="#contact"
            className="border border-yellow-500 border-spacing-2 font-bold  transition-colors  bg-yellow-500   hover:opacity-80  text-white  py-2.5 rounded-md px-8  text-xl">
           {t("class.button")}
          </HashLink>
        </div>

        <section className="py-20 bg-green-50">
          <div className="container mx-auto max-w-[1320px] px-5 ">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20  mb-40 ">
              {/* Offerings Section */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-green-600">
                  {t("class.overview")}
                </h2>
                <h1 className="text-4xl font-bold text-gray-800 mb-5">
                  {t("class.overview_title")}
                </h1>
                <p className="text-gray-600">
                  {t("class.overview_description")}
                </p>
              </div>
                <div className="flex-1 grid gap-6">
                  <h3 className="text-2xl font-semibold">{t("class.overview_how")}</h3>
                  {howClass?.map(
                    ({icon: Icon, text, bgColor = "bg-green-100"}, index) => (
                      <div
                        key={index}
                        className={`flex items-center bg-white p-4 rounded-lg`}>
                        <Icon
                          className={`text-green-600 text-5xl mr-4 p-2 ${bgColor} rounded-full`}
                        />
                        <span className="text-gray-800 font-medium">
                          {text}
                        </span>
                      </div>
                    )
                  )}
                </div>
            </div>

            {/* Courses Section */}
            <div className="space-y-6 ">
              <h2 className="text-lg font-semibold text-blue-600">
               {t("classTeach.sub")}
              </h2>
              <h1 className="text-4xl font-bold text-gray-800">
              {t("classTeach.title")}
              </h1>
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
                {courseData?.map((course, index) => (
                  <div
                    key={index}
                    className={`bg-white border ${course.borderColor} shadow-lg rounded-lg p-6 text-center`}>
                    {course.icon}
                    <h3 className="text-xl font-semibold text-gray-800 capitalize">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="py-28 bg-white">
          <Banner
            images={images && []}
            speed={10000}
          />
        </div>

        <div
          id="contact"
          className="px-5 flex items-center justify-center ">
          <div className="w-full max-w-lg bg-white border border-yellow-200 rounded-lg shadow-lg p-8 ">
            <div className="text-center mb-6 bg-yellow-500 rounded-lg px-5  py-3">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold  text-white ">
            {t("classContact.formTitle")}
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6">
              {/* Name Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                  {t("classContact.fields.name.label")}
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t("classContact.fields.name.placeholder")}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Email Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.email.label")}
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("classContact.fields.email.placeholder")}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Age Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.age.label")}
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  placeholder={t("classContact.fields.age.placeholder")}
                  onChange={handleInputChange}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Grade Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.schoolClass.label")}
                </label>
                <input
                  required
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  placeholder={t("classContact.fields.schoolClass.placeholder")}
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
                />
              </div>

              {/* Category Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.courseSelection.label")}
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
                    {t("classContact.fields.courseSelection.placeholder")}
                  </option>
                  {categories?.map((category) => (
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
                {t("classContact.fields.experience.label")}
                </label>
                <textarea
                  name="text_box_one"
                  value={formData.text_box_one}
                  onChange={handleInputChange}
                  placeholder= {t("classContact.fields.experience.placeholder")}
                  className="w-full p-4 rounded-lg border border-gray-300 "></textarea>
              </div>

              {/* Text Box Two Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.expectations.label")}
                </label>
                <textarea
                  name="text_box_two"
                  value={formData.text_box_two}
                  onChange={handleInputChange}
                  placeholder= {t("classContact.fields.expectations.placeholder")}
                  className="w-full p-4 rounded-lg border border-gray-300"></textarea>
              </div>

             

              {/* Text Box Three Section */}
              <div>
                <label className="font-normal block mb-3 text-yellow-500">
                {t("classContact.fields.additionalInfo.label")}
                </label>
                <textarea
                  name="text_box_three"
                  value={formData.text_box_three}
                  onChange={handleInputChange}
                  placeholder= {t("classContact.fields.additionalInfo.placeholder")}
                  className="w-full p-4 rounded-lg border border-gray-300"></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                   {t("classContact.submitButton")}
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
