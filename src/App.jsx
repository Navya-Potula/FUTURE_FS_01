import React from "react";
import { useState } from "react";
import profile from "./assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import emailjs from "emailjs-com";
export default function App() {
  const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});
const handleContactChange = (e) => {
  setContactForm({
    ...contactForm,
    [e.target.name]: e.target.value,
  });
};
const handleContactSubmit = (e) => {
  e.preventDefault();

  if (!contactForm.name || !contactForm.email || !contactForm.message) {
    alert("Please fill all fields ❗");
    return;
  }

  emailjs.send(
    "service_qvtdr99",
    "template_2o4vtop",
    {
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message,
    },
    "4hcgpCxyFELXShx65"
  )
  .then(() => alert("Message Sent 🎉"))
  .catch(() => alert("Failed ❌"));

  setContactForm({
    name: "",
    email: "",
    message: "",
  });
};
 const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Responsive developer portfolio showcasing skills, projects and contact system.",
    github: "https://github.com/Navya-Potula/FUTURE_FS_01",
    live: "https://future-fs-01-amber.vercel.app/"
  },
  {
    title: "CRM System",
    desc: "Full-stack CRM system with login, orders, bookings and customer management.",
    github: "https://github.com/Navya-Potula/FUTURE_FS_02",
    live: "https://future-fs-02-dusky.vercel.app/"
  },
  {
    title: "Business Website Project",
    desc: "Professional website for real business with booking and customer interaction features.",
    github: "https://github.com/Navya-Potula/FUTURE_FS_03",
    live: " https://future-fs-03-iota-five.vercel.app/"
  }
];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 sticky top-0 bg-[#050816]/80 backdrop-blur-md z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">Navya.dev</h1>

       <div className="hidden md:flex gap-8 text-lg">
  <a href="#" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
    Home
  </a>

  <a href="#about" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
    About
  </a>

  <a href="#skills" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
    Skills
  </a>

  <a href="#projects" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
    Projects
  </a>

  <a href="#contact" className="hover:text-cyan-400 hover:scale-110 transition duration-300">
    Contact
  </a>
</div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 relative">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[150px] opacity-20 rounded-full top-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-cyan-400">Navya</span>
        </h1>

       <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "React Developer",
    2000,
    "Frontend Enthusiast",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-2xl md:text-4xl text-cyan-400 font-semibold mt-6 block"
/>

<p className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl leading-relaxed">
  Passionate about creating responsive, modern and user-friendly web applications with clean UI and interactive experiences.
</p>
        <div className="flex gap-5 mt-10 flex-wrap justify-center relative z-10">
        <a href="#projects"
  className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300">
  View Projects
</a>
<a
  href="resume.pdf"
  download
   className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
>
  Download Resume
</a>
        </div>
        <img
  src={profile}
  alt="profile"
    className="w-52 h-52 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 mt-10 object-cover hover:scale-105 transition duration-500"
/>

        <div className="mt-20 animate-bounce text-cyan-400 text-3xl">
          ↓
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-8">
  I am a passionate Full Stack Web Developer who enjoys creating
  responsive, user-friendly and visually appealing web applications.
  I love learning modern technologies and building real-world projects
  that improve problem-solving and development skills.
</p>

<p className="text-gray-400 mt-6 leading-8">
  Skilled in React, JavaScript, MongoDB and modern web technologies,
  with a strong focus on clean design and interactive user experiences.
</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] rounded-3xl shadow-2xl shadow-cyan-500/20">
          <div className="bg-[#0b1220] rounded-3xl p-10 h-full">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
                <p className="text-gray-400 mt-2">Years Learning</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-[#0b1220]">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-8 py-4 rounded-2xl bg-[#111827] border border-cyan-400/20 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/30 hover:shadow-xl transition duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-500 shadow-xl"
            >
              <div className="h-52 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.desc}</p>

                <div className="flex gap-3 mt-6">
  
  <a href={project.github} target="_blank" rel="noreferrer">
    <button className="bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
      Code
    </button>
  </a>

  <a href={project.live} target="_blank" rel="noreferrer">
    <button className="border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition">
      Live
    </button>
  </a>

</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#0b1220]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Contact Me
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Let's work together and create something amazing.
          </p>
          <div className="flex justify-center gap-6 mb-10 text-lg flex-wrap">
  <a
  href="mailto:navyapotula2@gmail.com"
  className="flex items-center gap-2 hover:text-cyan-400 transition"
>
  📧 Email Me
</a>

  <a
    href="https://github.com/Navya-Potula"
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/navya-potula-667b3a299/"
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>
</div>

          <form className="grid gap-6" onSubmit={handleContactSubmit}>
            <input
  type="text"
  name="name"
  required
  value={contactForm.name}
  onChange={handleContactChange}
  placeholder="Your Name"
/>

            <input 
  type="email"
  name="email"
  required
  value={contactForm.email}
  onChange={handleContactChange}
  placeholder="Your Email"
/>
<textarea
  rows="6"
  name="message"
  required
  value={contactForm.message}
  onChange={handleContactChange}
  placeholder="Your Message"
/>

            <button
  type="submit" 
  className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
>
  Send Message
</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
     <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
  Built with React & Tailwind CSS • © 2026 Navya Portfolio
</footer>
    </div>
  );
}
