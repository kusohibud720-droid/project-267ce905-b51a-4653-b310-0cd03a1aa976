import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-host.jpg";
import hostPortrait from "@/assets/host-portrait-confetti.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Фон мероприятия"
          className="w-full h-full object-cover object-[75%_center]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="flex items-center justify-between gap-8">
          {/* Text content - left side */}
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
              className="text-lg md:text-xl mb-4 font-light tracking-widest uppercase opacity-90"
            >
              Профессиональный ведущий
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ваш праздник —{" "}
              <span className="text-primary">моя работа</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed max-w-xl">
              Свадьбы, корпоративы, юбилеи и любые мероприятия. Создаю атмосферу, которую запомнят все гости.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Оставить заявку
            </motion.a>
          </motion.div>

          {/* Portrait photo - right side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block flex-shrink-0"
          >
            <img
              src={hostPortrait}
              alt="Ведущий мероприятий"
              className="h-[70vh] max-h-[700px] w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
