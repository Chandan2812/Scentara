import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroVideo from "../assets/home2-banner-1-2.jpg";
import brandImage from "../assets/home2-image-3.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ingredient1 from "../assets/top-view-cinnamon-flowers-with-lemon-light-white-desk.jpg";
import ingredient2 from "../assets/soap-making-home-flat-lay.jpg";
import ingredient3 from "../assets/human-hands-working-it-yourself-project.jpg";
import bannerImage from "../assets/home2-bg-13.jpg";

const milestones = [
  {
    year: "2015",
    text: "Scentara was founded with a vision to redefine luxury perfumery.",
  },
  {
    year: "2017",
    text: "Launched our first signature scent — 'Eternal Bloom'.",
  },
  { year: "2019", text: "Awarded 'Fragrance Brand of the Year'." },
  { year: "2022", text: "Expanded to 20+ countries worldwide." },
];

const teamMembers = [
  {
    name: "Anjali Rao",
    role: "Master Perfumer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Crafting scents with passion and precision, Anjali brings decades of expertise to every bottle.",
  },
  {
    name: "Vikram Singh",
    role: "Fragrance Designer",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Vikram’s innovative blends are the heart of Scentara’s unique signature scents.",
  },
  {
    name: "Sara Mehta",
    role: "Quality Specialist",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Ensuring every scent meets the highest standards, Sara is the guardian of quality.",
  },
];

const craftsmanship = [
  {
    img: ingredient1,
    title: "Finest Natural Ingredients",
    desc: "We source rare florals, spices, and essential oils from around the world to ensure unmatched quality.",
  },
  {
    img: ingredient2,
    title: "Artisanal Blending",
    desc: "Every fragrance is hand-blended in small batches to preserve its character and depth.",
  },
  {
    img: ingredient3,
    title: "Elegant Bottling",
    desc: "Our bottles are designed to be as timeless and beautiful as the scents they hold.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once = animation plays only on first scroll
  }, []);

  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden font-body">
        {/* Background Image */}
        <img
          src={heroVideo}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Perfume background"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-6 md:px-12"
          data-aos="fade-up"
        >
          <h1
            className="text-5xl md:text-7xl font-brand text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the Essence of{" "}
            <span className="text-[var(--primary-color)]">Scentara</span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-handwriting"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Where fragrance becomes memory, and every note tells a story.
          </p>

          <button
            className="mt-8 px-6 py-3 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Explore Our Story
          </button>
        </div>
      </section>
      <section className="w-full py-12 bg-white font-body">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
          {/* Left - Image */}
          <div
            data-aos="fade-right"
            className="flex items-center justify-center"
          >
            <img src={brandImage} alt="Scentara Crafting" className="w-2/3 " />
          </div>

          {/* Right - Text */}
          <div data-aos="fade-up">
            <h2 className="text-7xl font-brand text-[var(--primary-color)] mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Scentara was born from a passion for the art of perfumery — a
              desire to capture emotions, memories, and elegance in every drop.
              Our fragrances are crafted with the finest natural ingredients,
              each telling its own unique tale.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe a fragrance is more than just a scent — it is a
              signature, a whisper of your personality, and a memory etched in
              time.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12  font-body">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-7xl font-brand text-center text-[var(--primary-color)] mb-12"
            data-aos="fade-up"
          >
            Our Journey
          </h2>

          <div className="relative border-l-4 border-[var(--primary-color)] pl-8 space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="absolute -left-14 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold">
                  {milestone.year}
                </div>
                <p className="text-2xl text-gray-700 mt-4 font-handwriting">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white font-body">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-4xl md:text-5xl font-brand text-[var(--primary-color)] mb-4"
            data-aos="fade-up"
          >
            The Art of Perfumery
          </h2>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Scentara, crafting a perfume is an art form — a delicate balance
            of creativity, science, and passion. Every note is chosen to evoke
            emotion and leave a lasting impression.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {craftsmanship.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white font-body">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-7xl font-brand text-[var(--primary-color)] mb-4"
            data-aos="fade-up"
          >
            Meet the Artisans
          </h2>
          <p
            className="text-gray-700 max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The talented creators who breathe life into every Scentara
            fragrance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map(({ name, role, photo, bio }, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-1">
                  {name}
                </h3>
                <p className="text-sm text-gray-500 italic mb-4">{role}</p>
                <p className="text-gray-600 text-center">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative w-full py-8 flex items-center justify-center font-body overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-brand mb-4">
            Ready to Find Your Signature Scent?
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Explore our exclusive collection and discover fragrances crafted
            just for you.
          </p>
          <button className="px-6 py-3 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition">
            Explore Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
