import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import skillsData from "../data/skills.json";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const selectedSkill = skillsData.find(
      (item) => item.skillId === Number(id)
    );

    setSkill(selectedSkill);
  }, [id]);

  if (!skill) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleBook = () => {
    toast.success("Session Booked Successfully!");
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-2xl">

          <figure className="lg:w-1/2">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="card-body lg:w-1/2">

            <div className="badge badge-primary mb-3">
              {skill.category}
            </div>

            <h2 className="text-4xl font-bold">
              {skill.skillName}
            </h2>

            <p className="text-gray-500">
              {skill.description}
            </p>

            <div className="divider"></div>

            <div className="space-y-3">

              <p>
                👨‍🏫 <span className="font-bold">Provider:</span>{" "}
                {skill.providerName}
              </p>

              <p>
                📧 <span className="font-bold">Email:</span>{" "}
                {skill.providerEmail}
              </p>

              <p>
                ⭐ <span className="font-bold">Rating:</span>{" "}
                {skill.rating}
              </p>

              <p>
                💲 <span className="font-bold">Price:</span> ${skill.price}
              </p>

              <p>
                👥 <span className="font-bold">Available Slots:</span>{" "}
                {skill.slotsAvailable}
              </p>

            </div>

            <div className="card-actions mt-8">
              <button
                onClick={handleBook}
                className="btn btn-primary w-full"
              >
                Book Session
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;