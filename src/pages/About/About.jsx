import HeroImg from "@/assets/images/shankar.jpg";
import Footer from "@/components/Footer"; // ✅ Import Footer component
import Skills from "@/pages/Skills/Skills"; // ✅ Import Skills component
import React from "react";
import Experience from "@/pages/Experience/Experience"; // ✅ Import Experience component
import Projects from "@/pages/Projects/Projects"; // ✅ Import Projects component
import Education from "@/pages/Education/Education"; // ✅ Import Education component
import Contact from "@/pages/Contact/Contact"; // ✅ Import Contact component

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image Section */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b from-zinc-300 to-transparent aspect-76/59 relative rounded-2xl p-px">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-xl block transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ring-1 ring-zinc-100/20"
                  alt="yatish profile"
                  width={1000}
                  height={929}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="relative space-y-4">
              <p className="text-white">
                👨‍💻 <strong>AI & ML Specialist</strong> | 📊 <strong>Data Analyst</strong> | 🎓 <strong>3rd Year B.Tech Student at SVCET</strong>
              </p>
              <p className="text-white">
                Hi, I’m <strong>Shankar Reddy</strong>, a passionate developer driven by the potential of Artificial Intelligence to solve complex real-world problems.
              </p>
              <p className="text-white">
                My core expertise lies in <strong>Machine Learning</strong> and <strong>Natural Language Processing (NLP)</strong>. I enjoy working with large datasets to uncover trends and building intelligent applications using <strong>Generative AI</strong> and <strong>LLMs</strong>.
              </p>
              <p className="text-white">
                ✍️ Beyond the code, I am deeply interested in <strong>Public Health Tech</strong> and <strong>Agricultural AI</strong>, finding ways to use technology for social good.<br />
                I am also a Full-Stack enthusiast, comfortable building robust web apps with <strong>React</strong> and deploying them on the cloud.
              </p>
              <p className="text-white">
                I’m constantly seeking opportunities to learn, grow, and contribute to the AI revolution.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "Turning raw data into actionable insights and ideas into intelligent reality."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ Footer Section */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />

        <Footer />
      </section>
    </>
  );
}
