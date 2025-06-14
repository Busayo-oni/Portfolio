import { motion } from 'framer-motion'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const skills = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'JavaScript', img: javascript },
  { name: 'React', img: react },
  { name: 'Tailwind', img: tailwind },
]

const Skill = () => {
  return (
    <motion.div
      className='px-5 py-10 text-gray-400 bg-black'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-center text-gray-700 md:text-left'>
          My <br /> Tech <br /> Stack
        </h2>

        {/* Tech Icons */}
        <div className='grid w-full grid-cols-3 gap-6 sm:grid-cols-5 md:w-auto justify-items-center'>
          {skills.map(({ name, img }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              className='flex flex-col items-center w-[80px] md:w-[100px] transition-transform'
            >
              <img src={img} alt={name} className='w-[60px] md:w-[80px]' />
              <p className='mt-2 text-sm'>{name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Skill
