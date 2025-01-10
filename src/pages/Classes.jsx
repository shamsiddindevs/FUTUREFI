import {useState, useEffect} from "react";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import bitcoin from "../assets/money.jpg";
import cubs from "../assets/hero.png";
import {useTranslation} from "react-i18next";

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

  return (
    <>
      <section className="mt-[88px] pb-10">
        <div>
          {/* Practice using real-life scenarios */}
          <div className="pb-20">
            <div className="container mx-auto max-w-[1320px] px-5 ">
              <div className="flex flex-col md:flex-row justify-between items-center  lg:gap-6 gap-10  ">
                {/* Left Section */}

                {/* Right Section (Image) */}
                <div className="order-2 md:order-1 flex-1  flex justify-start lg:p-10 ">
                  <img
                  loading="lazy" 
                    src={bitcoin}
                    alt="money finance "
                  />
                </div>

                <div className="order-1 md:order-2  flex-1  ">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    {t("financial_literacy.title")}
                  </h1>
                  <p className="text-md lg:text-lg text-gray-700">
                    {t("financial_literacy.info")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* End of Practice using real-life scenarios */}

          {/* Learn from the best */}
          <div className="pb-20">
            <div className="container mx-auto max-w-[1320px] px-5 ">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  lg:gap-6 gap-10  ">
                {/* Left Section */}
                <div className="  ">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    {" "}
                    {t("understanding_finance.title")}
                  </h1>
                  <p className="text-md lg:text-lg text-gray-700">
                    {t("understanding_finance.info")}
                  </p>
                </div>

                {/* Right Section (Image) */}
                <div className=" flex md:justify-end lg:p-10 ">
                  <img
                  loading="lazy" 
                    src={cubs}
                    alt="cubs money"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 flex items-center justify-center ">
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
                  Category
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
                    Select a category
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
