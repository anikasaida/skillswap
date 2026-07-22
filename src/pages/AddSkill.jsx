import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const AddSkill = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    skillName: "",
    category: "",
    price: "",
    rating: "",
    slotsAvailable: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSkill = {
      ...formData,
      providerName: user?.displayName,
      providerEmail: user?.email,
    };

    console.log(newSkill);

    toast.success("Skill Added Successfully!");

    setFormData({
      skillName: "",
      category: "",
      price: "",
      rating: "",
      slotsAvailable: "",
      image: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-xl p-8">

        <h2 className="text-4xl font-bold text-center mb-8">
          Add New Skill
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="skillName"
            placeholder="Skill Name"
            className="input input-bordered w-full"
            value={formData.skillName}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            className="select select-bordered w-full"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Programming</option>
            <option>Design</option>
            <option>Photography</option>
            <option>Cooking</option>
            <option>Language</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full"
            value={formData.rating}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="slotsAvailable"
            placeholder="Available Slots"
            className="input input-bordered w-full"
            value={formData.slotsAvailable}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            value={user?.displayName || ""}
            className="input input-bordered w-full"
            readOnly
          />

          <input
            type="email"
            value={user?.email || ""}
            className="input input-bordered w-full"
            readOnly
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full h-32"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Add Skill
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddSkill;