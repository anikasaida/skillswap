const reviews = [
  {
    id: 1,
    name: "Ayesha",
    comment:
      "SkillSwap helped me learn React from an amazing mentor.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahim",
    comment:
      "Very easy to use platform with great instructors.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Nusrat",
    comment:
      "I shared my photography skills and met wonderful learners.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 shadow-xl p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h3 className="font-bold">
                  {review.name}
                </h3>

                <p className="text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </p>
              </div>
            </div>

            <p className="mt-4">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;