import { useState } from "react";
import SkillCard from "../components/SkillCard";
import skillsData from "../data/skills.json";

const AllSkills = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchSearch =
      skill.skillName.toLowerCase().includes(search.toLowerCase()) ||
      skill.providerName.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || skill.category === category;

    return matchSearch && matchCategory;
  });

  const sortedSkills = [...filteredSkills];

  switch (sortBy) {
    case "priceLow":
      sortedSkills.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      sortedSkills.sort((a, b) => b.price - a.price);
      break;

    case "ratingHigh":
      sortedSkills.sort((a, b) => b.rating - a.rating);
      break;

    case "ratingLow":
      sortedSkills.sort((a, b) => a.rating - b.rating);
      break;

    default:
      break;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Skills
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search by Skill or Provider..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered lg:w-56"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="select select-bordered lg:w-64"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="ratingHigh">Rating: High → Low</option>
          <option value="ratingLow">Rating: Low → High</option>
        </select>

      </div>

      {sortedSkills.length === 0 ? (
        <p className="text-center text-lg font-semibold">
          No Skills Found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedSkills.map((skill) => (
            <SkillCard
              key={skill.skillId}
              skill={skill}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSkills;