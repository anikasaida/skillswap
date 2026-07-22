import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={skill.image}
          alt={skill.skillName}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{skill.skillName}</h2>

        <p>⭐ {skill.rating}</p>

        <p className="font-semibold">${skill.price}</p>

        <div className="card-actions justify-end">
          <Link
            to={`/skill/${skill.skillId}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;