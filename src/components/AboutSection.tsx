import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutPhoto}
              alt="Ведущий"
              className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover object-[20%_top]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Обо мне
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Более 10 лет создаю незабываемые праздники
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Привет! Меня зовут Игорь, и я — профессиональный ведущий мероприятий.
                За годы работы я провёл более 500 мероприятий разного формата.
              </p>
              <p>
                Мой стиль — это сочетание элегантности и искреннего юмора.
                Я не использую шаблонных конкурсов и пошлых шуток. Каждый праздник — это индивидуальный сценарий, созданный специально для вас.
              </p>
              <p>
                Работаю с живыми музыкантами, DJ и звукорежиссёрами. Обеспечиваю полное техническое сопровождение мероприятия.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "мероприятий" },
                { num: "10+", label: "лет опыта" },
                { num: "100%", label: "довольных" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
