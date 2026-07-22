import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.skillId}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;