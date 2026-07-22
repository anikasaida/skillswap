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

const TopProviders = () => {
  return (
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

              <p>⭐ {provider.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProviders;