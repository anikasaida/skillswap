import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <figure className="h-56 overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </figure>

      <div className="card-body">

        <div className="flex justify-between items-center">
          <span className="badge badge-primary">
            {skill.category}
          </span>

          <span className="badge badge-warning">
            ⭐ {skill.rating}
          </span>
        </div>

        <h2 className="card-title text-2xl mt-2">
          {skill.skillName}
        </h2>

        <p className="text-gray-500 line-clamp-2">
          {skill.description}
        </p>

        <div className="divider my-2"></div>

        <div className="space-y-1 text-sm">

          <p>
            👨‍🏫 <span className="font-semibold">Provider:</span>{" "}
            {skill.providerName}
          </p>

          <p>
            💲 <span className="font-semibold">Price:</span> $
            {skill.price}
          </p>

          <p>
            👥 <span className="font-semibold">Slots:</span>{" "}
            {skill.slotsAvailable}
          </p>

        </div>

        <div className="card-actions mt-4">

          <Link
            to={`/skill/${skill.skillId}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default SkillCard;