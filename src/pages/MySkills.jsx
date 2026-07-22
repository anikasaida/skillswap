import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import skillsData from "../data/skills.json";

const MySkills = () => {
  const { user } = useAuth();

  const mySkills = skillsData.filter(
    (skill) => skill.providerEmail === user?.email
  );

  const handleDelete = (skillName) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${skillName}"?`
    );

    if (confirmDelete) {
      toast.success("Skill Deleted Successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-5">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          My Skills
        </h2>

        {mySkills.length === 0 ? (
          <div className="bg-base-100 shadow-xl rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-2">
              No Skills Added Yet
            </h2>

            <p className="text-gray-500">
              You haven't added any skills yet.
            </p>

            <Link
              to="/add-skill"
              className="btn btn-primary mt-6"
            >
              Add New Skill
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto bg-base-100 shadow-xl rounded-xl">

            <table className="table">

              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Skill</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Slots</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {mySkills.map((skill, index) => (
                  <tr key={skill.skillId}>

                    <td>{index + 1}</td>

                    <td>{skill.skillName}</td>

                    <td>{skill.category}</td>

                    <td>${skill.price}</td>

                    <td>⭐ {skill.rating}</td>

                    <td>{skill.slotsAvailable}</td>

                    <td className="space-x-2">

                      <Link
                        to={`/update-skill/${skill.skillId}`}
                        className="btn btn-sm btn-primary"
                      >
                        Update
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(skill.skillName)
                        }
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
};

export default MySkills;