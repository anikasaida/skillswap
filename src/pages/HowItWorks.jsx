const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Register and create your free SkillSwap account.",
    icon: "👤",
  },
  {
    id: 2,
    title: "Add Your Skill",
    description: "Share your skills and become a provider.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Connect with providers and learn new skills.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="card bg-base-100 shadow-xl text-center p-8"
          >
            <div className="text-6xl">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {step.title}
            </h3>

            <p className="mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;