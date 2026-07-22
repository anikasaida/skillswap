import HeroSlider from "../components/HeroSlider";
import PopularSkills from "../components/PopularSkills";

const Home = () => {
  const providers = [
    {
      id: 1,
      name: "John Smith",
      skill: "React Developer",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sophia",
      skill: "Cooking Expert",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David",
      skill: "Photography",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  const steps = [
    {
      id: 1,
      icon: "👤",
      title: "Create Account",
      desc: "Sign up for free and create your profile.",
    },
    {
      id: 2,
      icon: "📚",
      title: "Share Your Skills",
      desc: "Add the skills you want to teach or learn.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Connect & Learn",
      desc: "Find skilled people and start learning.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ayesha",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "SkillSwap is an amazing platform. I learned React within a few weeks.",
    },
    {
      id: 2,
      name: "Rahim",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      review:
        "Very easy to use and the instructors are very friendly.",
    },
    {
      id: 3,
      name: "Nusrat",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      review:
        "I shared my photography skills and met wonderful learners.",
    },
  ];

  return (
    <>
      <HeroSlider />

      <PopularSkills />

      {/* Top Providers */}
      <section className="max-w-7xl mx-auto py-16 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Rated Providers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="card bg-base-100 shadow-xl"
            >
              <figure className="pt-6">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </figure>

              <div className="card-body text-center">
                <h2 className="card-title justify-center">
                  {provider.name}
                </h2>

                <p>{provider.skill}</p>

                <p className="font-semibold text-yellow-500">
                  ⭐ {provider.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-5">
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

                <p className="mt-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto py-16 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-xl p-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />

                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>

              <p className="mt-5 italic">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;