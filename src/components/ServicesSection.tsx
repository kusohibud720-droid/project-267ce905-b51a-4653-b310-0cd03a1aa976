import { motion } from "framer-motion";

const services = [
  {
    emoji: "💍",
    title: "Свадьбы",
    description: "Торжественная регистрация, банкет, интерактивы для гостей. Индивидуальный сценарий для каждой пары.",
    price: "от 35 000 ₽",
  },
  {
    emoji: "🏢",
    title: "Корпоративы",
    description: "Новогодние вечера, тимбилдинг, юбилеи компании. Профессиональная организация от А до Я.",
    price: "от 25 000 ₽",
  },
  {
    emoji: "🎂",
    title: "Юбилеи",
    description: "Тёплые поздравления, трогательные моменты и весёлая программа для юбиляра и гостей.",
    price: "от 20 000 ₽",
  },
  {
    emoji: "🎓",
    title: "Выпускные",
    description: "Яркий и запоминающийся выпускной вечер с современной программой для молодёжи.",
    price: "от 18 000 ₽",
  },
  {
    emoji: "🎧",
    title: "DJ + Звук",
    description: "Профессиональное звуковое оборудование и DJ-сопровождение для любого формата мероприятия.",
    price: "от 15 000 ₽",
  },
  {
    emoji: "🎉",
    title: "Любой праздник",
    description: "День рождения, детский праздник, вечеринка — создам программу под ваш формат.",
    price: "от 15 000 ₽",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Услуги и цены
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Что я предлагаю
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-border group"
            >
              <span className="text-5xl block mb-5">{service.emoji}</span>
              <h3 className="text-2xl font-bold text-foreground mb-3 font-sans">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-primary font-bold text-xl">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
