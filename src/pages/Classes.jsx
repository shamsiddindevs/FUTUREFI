import {useState} from "react";
import Footer from "../components/Footer";
import Post from "../components/Post";
import toast from "react-hot-toast";

const Classes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    grade: "",
    category: "",
    text_box_one: "",
    text_box_two: "",
    text_box_three: "",
    check_box: false,
  });

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mission.uz/en/api/v1/appeal/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Thank you for your feedback!");
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
      <div className="px-5 flex items-center justify-center my-10">
        <div className="w-full max-w-lg bg-white border border-yellow-200 rounded-lg shadow-lg p-8">
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
              <label className="font-semibold text-yellow-500">Name</label>
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
              <label className="font-semibold text-yellow-500">Email</label>
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
              <label className="font-semibold text-yellow-500">Age</label>
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
              <label className="font-semibold text-yellow-500">Grade</label>
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
              <label className="font-semibold text-yellow-500">Category</label>
              <input
                required
                type="number"
                name="category"
                value={1}
                onChange={handleInputChange}
                placeholder="We have only one category"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-yellow-400  w-full"
              />
            </div>

            {/* Text Box One Section */}
            <div>
              <label className="font-semibold text-yellow-500">
                Text Box One
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
              <label className="font-semibold text-yellow-500">
                Text Box Two
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
              <label className="font-semibold text-yellow-500">
                Text Box Three
              </label>
              <textarea
                name="text_box_three"
                value={formData.text_box_three}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="w-full p-4 rounded-lg border border-gray-300"></textarea>
            </div>

            {/* Check Box Section */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="check_box"
                checked={formData.check_box}
                onChange={handleInputChange}
                className="mr-2 checkbox  checkbox-warning "
              />
              <label className="font-semibold text-yellow-500">Check Box</label>
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
      <Post/>
      <Footer />
    </>
  );
};

export default Classes;
