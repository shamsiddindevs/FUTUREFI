import {useState} from "react";
import axios from "axios";
import 'daisyui/dist/full.css'; // Ensure you have DaisyUI installed
import { toast } from 'react-hot-toast';

const Post = () => {
    const [formData, setFormData] = useState({
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: "2025-01-09T01:03:22.503Z",
        status: "placed",
        complete: true,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://petstore.swagger.io/v2/store/order",
                formData
            );
            console.log("Response:", response.data);
            toast.success('Successfully send !');
        } catch (error) {
            console.error("Error posting data:", error);
            toast.error('Error posting data');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-base-200 rounded-lg shadow-md max-w-sm mx-auto w-full my-10">
            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">ID</span>
                </label>
                <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="ID"
                    className="input input-bordered"
                />
            </div>
            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Pet ID</span>
                </label>
                <input
                    type="number"
                    name="petId"
                    value={formData.petId}
                    onChange={handleChange}
                    placeholder="Pet ID"
                    className="input input-bordered"
                />
            </div>
            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="input input-bordered"
                />
            </div>
            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Ship Date</span>
                </label>
                <input
                    type="datetime-local"
                    name="shipDate"
                    value={formData.shipDate}
                    onChange={handleChange}
                    placeholder="Ship Date"
                    className="input input-bordered"
                />
            </div>
            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Status</span>
                </label>
                <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    placeholder="Status"
                    className="input input-bordered"
                />
            </div>
            <div className="form-control mb-4">
                <label className="cursor-pointer label">
                    <span className="label-text">Complete</span>
                    <input
                        type="checkbox"
                        name="complete"
                        checked={formData.complete}
                        onChange={(e) => setFormData({...formData, complete: e.target.checked})}
                        className="checkbox checkbox-primary"
                    />
                </label>
            </div>
            <button
                className="btn btn-success w-full"
                type="submit">
                Submit Order
            </button>
        </form>
    );
};

export default Post;
