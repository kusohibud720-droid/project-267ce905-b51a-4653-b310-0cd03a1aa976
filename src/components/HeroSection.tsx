import { motion } from "framer-motion";
import heroImage from "@/assets/hero-host.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end sm:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ведущий мероприятий"
          className="w-full h-full object-cover object-[75%_top]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      </div>

      <div className="container relative z-10 py-16 pb-20 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-primary-foreground"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl mb-2 md:mb-4 font-light tracking-widest uppercase opacity-90"
          >
            Профессиональный ведущий
          </motion.p>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight">
            Ваш праздник —{" "}
            <span className="text-primary">моя работа</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-5 md:mb-10 opacity-90 leading-relaxed max-w-xl">
            Свадьбы, корпоративы, юбилеи и любые мероприятия. Создаю атмосферу, которую запомнят все гости.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Оставить заявку
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
