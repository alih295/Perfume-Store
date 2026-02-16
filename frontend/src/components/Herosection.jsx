import { motion } from "motion/react";

function Herosection() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      < motion.video initial={{ y:100 ,  opacity:0}} animate={{y:0 , opacity:1}}
      transition={{duration:'0.5'}}
        autoPlay
        muted
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src="/videos/spray.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10">
        <motion.h1
       whileHover={{
    textShadow: "0px 0px 20px #EAB308, 0px 0px 20px #EAB308  ",
    webkitTextStroke:'2px',
    webkitTextStrokeColor:'black'
  }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55,  ease: "easeInOut" }}
          className="font-[heading] font-semibold text-8xl text-yellow-600 text-center"
        >
          MB FRAGRANCE
        </motion.h1>

        <motion.p  
        
        initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.5, ease: "easeInOut" }} className="text-4xl capitalize text-center text-yellow-500 font-[simple]  mt-4">
          Fragrance that melts hearts
        </motion.p>
      </div>
    </div>
  );
}

export default Herosection;
