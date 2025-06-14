import { motion } from "framer-motion";
import proj1 from "../assets/pro1.png";
import proj2 from "../assets/pro2.png";
import proj3 from "../assets/pro3.png";
import proj4 from "../assets/pro4.png";
import proj5 from "../assets/pro5.png";
import proj6 from "../assets/pro6.png";
import proj7 from "../assets/pro7.png";
import proj8 from "../assets/pro8.png";
import proj9 from "../assets/pro9.png";

const projects = [
  { img: proj1, link: "https://longevity-oracle.onrender.com/" },
  { img: proj2, link: "https://sociel.onrender.com/" },
  { img: proj3, link: "https://mastermind-daycare.onrender.com/" },
  { img: proj4, link: "https://losheyi-hub.netlify.app/" },
  { img: proj5, link: "https://maiz-hub.netlify.app/" },
  { img: proj6, link: "https://9jasport.netlify.app/" },
  { img: proj7, link: "https://alwafa-web.netlify.app/" },
  { img: proj8, link: "https://com-hub.netlify.app/" },
  { img: proj9, link: "https://dabang.netlify.app/" },
];

const Work = () => {
  return (
    <motion.div
      className="max-w-[1200px] mx-auto p-5"
      id="work"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="pb-8">
        <p className="mb-3 text-4xl font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
              shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
              h-[200px] bg-cover relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={proj.img} alt={`project ${index + 1}`} className="object-cover w-full h-full" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300">
              <span className="text-2xl font-bold tracking-wider text-white">Project</span>
              <div className="pt-8 text-center">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
