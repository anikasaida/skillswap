import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-[500px]"
    >
      <SwiperSlide>
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black/60"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">
                Learn New Skills
              </h1>

              <p className="py-6 max-w-xl">
                Join thousands of learners and discover amazing local
                skill-sharing opportunities.
              </p>

              <button className="btn btn-primary">
                Explore Skills
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black/60"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">
                Share Your Knowledge
              </h1>

              <p className="py-6 max-w-xl">
                Become an instructor and help your community grow.
              </p>

              <button className="btn btn-secondary">
                Become a Tutor
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black/60"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">
                Connect With Experts
              </h1>

              <p className="py-6 max-w-xl">
                Build connections and exchange valuable skills near you.
              </p>

              <button className="btn btn-accent">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;