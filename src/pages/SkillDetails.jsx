import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedSkill = data.find(
          (item) => item.skillId === Number(id)
        );
        setSkill(selectedSkill);
      });
  }, [id]);

  if (!skill) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">

        <figure className="lg:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl">
            {skill.skillName}
          </h2>

          <p><strong>Provider:</strong> {skill.providerName}</p>

          <p><strong>Email:</strong> {skill.providerEmail}</p>

          <p><strong>Category:</strong> {skill.category}</p>

          <p><strong>Rating:</strong> ⭐ {skill.rating}</p>

          <p><strong>Price:</strong> ${skill.price}</p>

          <p><strong>Available Slots:</strong> {skill.slotsAvailable}</p>

          <p className="mt-4">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;