import { useState } from 'react';

const Classes = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        satisfaction: 0,
        rating: 0,
        feedback: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (value) => {
        setFormData((prev) => ({ ...prev, rating: value }));
    };

    const handleSatisfactionChange = (value) => {
        setFormData((prev) => ({ ...prev, satisfaction: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center my-20">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold bg-yellow-500 text-white rounded-lg py-3">
                        Tell Us What You Think
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Section */}
                    <div className="flex flex-col space-y-4">
                        <label className="font-semibold text-yellow-700">Full Name</label>
                        <div className="flex space-x-4">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="p-3 border border-gray-300 rounded w-1/2" />
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="p-3 border border-gray-300 rounded w-1/2" />
                        </div>
                    </div>

                    {/* Email Section */}
                    <div>
                        <label className="font-semibold text-yellow-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="example@example.com" className="p-3 border border-gray-300 rounded w-full" />
                    </div>

                    {/* Satisfaction Section */}
                    <div>
                        <label className="font-semibold text-yellow-700">Overall Satisfaction</label>
                        <div className="flex space-x-2 mt-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span
                                    key={value}
                                    onClick={() => handleSatisfactionChange(value)}
                                    className={`cursor-pointer text-2xl ${formData.satisfaction >= value ? 'text-yellow-400' : 'text-gray-300'}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Rating Section */}
                    <div>
                        <label className="font-semibold text-yellow-700">
                            How Would You Rate Our Course?
                        </label>
                        <div className="flex space-x-4 mt-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={index + 1}
                                        checked={formData.rating === index + 1}
                                        onChange={() => handleRatingChange(index + 1)}
                                    />
                                    <span>{index + 1}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div>
                        <label className="font-semibold text-yellow-700">How Can We Improve To Course You Better?</label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleInputChange}
                            placeholder="Type here..."
                            className="w-full p-3 border border-gray-300 rounded"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Classes;
