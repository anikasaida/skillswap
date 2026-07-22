import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateSkill = () => {
  const navigate = useNavigate();

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

  const handleUpdate = (e) => {
    e.preventDefault();

    toast.success("Skill Updated Successfully!");

    navigate("/my-skills");
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-xl p-8">

        <h2 className="text-4xl font-bold text-center mb-8">
          Update Skill
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">

          <input
            type="text"
            name="skillName"
            placeholder="Skill Name"
            className="input input-bordered w-full"
            value={formData.skillName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered w-full"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full"
            value={formData.rating}
            onChange={handleChange}
          />

          <input
            type="number"
            name="slotsAvailable"
            placeholder="Available Slots"
            className="input input-bordered w-full"
            value={formData.slotsAvailable}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={formData.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-32"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-full">
            Update Skill
          </button>

        </form>

      </div>
    </div>
  );
};

export default UpdateSkill;