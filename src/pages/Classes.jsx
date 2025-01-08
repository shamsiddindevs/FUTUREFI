import { useState } from "react";
import Footer from "../components/Footer";

const Classes = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        grade: "",
        category: "",
        text_box_one: "",
        text_box_two: "",
        text_box_three: "",
        check_box: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your feedback!");
        console.log(formData);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center my-20">
                <div className="w-full max-w-lg bg-white border border-yellow-200 rounded-lg shadow-lg p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-yellow-500 text-white rounded-lg py-3">
                            Tell Us What You Think
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="p-3 border border-yellow-300 outline-yellow-500 rounded w-full"
                            />
                        </div>

                        {/* Email Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@example.com"
                                className="p-3 border border-yellow-300 outline-yellow-500 rounded w-full"
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
                                className="p-3 border border-yellow-300 outline-yellow-500 rounded w-full"
                            />
                        </div>

                        {/* Grade Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Grade</label>
                            <input
                                type="text"
                                name="grade"
                                value={formData.grade}
                                onChange={handleInputChange}
                                placeholder="Grade"
                                className="p-3 border border-yellow-300 outline-yellow-500 rounded w-full"
                            />
                        </div>

                        {/* Category Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Category</label>
                            <input
                                type="number"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                placeholder="Category"
                                className="p-3 border border-yellow-300 outline-yellow-500 rounded w-full"
                            />
                        </div>

                        {/* Text Box One Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Text Box One</label>
                            <textarea
                                name="text_box_one"
                                value={formData.text_box_one}
                                onChange={handleInputChange}
                                placeholder="Type here..."
                                className="w-full p-3 border border-yellow-300 outline-yellow-500 rounded"
                            ></textarea>
                        </div>

                        {/* Text Box Two Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Text Box Two</label>
                            <textarea
                                name="text_box_two"
                                value={formData.text_box_two}
                                onChange={handleInputChange}
                                placeholder="Type here..."
                                className="w-full p-3 border border-yellow-300 outline-yellow-500 rounded"
                            ></textarea>
                        </div>

                        {/* Text Box Three Section */}
                        <div>
                            <label className="font-semibold text-yellow-500">Text Box Three</label>
                            <textarea
                                name="text_box_three"
                                value={formData.text_box_three}
                                onChange={handleInputChange}
                                placeholder="Type here..."
                                className="w-full p-3 border border-yellow-300 outline-yellow-500 rounded"
                            ></textarea>
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
                                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Classes;
