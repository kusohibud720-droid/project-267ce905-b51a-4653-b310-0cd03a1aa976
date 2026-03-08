import { motion } from "framer-motion";

const points = [
  {
    num: "1",
    text: "Мы слышим Вас, а не \"советуем как лучше\"!",
  },
  {
    num: "2",
    text: "Если Вы не знаете, чего хотите — вот тогда у нас огромный выбор как устроить ваш праздник!",
  },
  {
    num: "3",
    text: "Музыка настроена идеально. Звук объемный.",
  },
  {
    num: "4",
    text: "Даже тот, кто не любит праздники — остается впечатлен и удивлен!",
  },
  {
    num: "5",
    text: "(остальное расскажем при встрече, чтоб не подсмотрели конкуренты)",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
            Как мы работаем и за что нас любят наши клиенты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div className="space-y-4 flex flex-col justify-center">
            {points.map((point, i) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base">
                  {point.num}
                </span>
                <p className="text-base text-muted-foreground leading-relaxed pt-1">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-stretch"
          >
            <img
              src="https://imshowman.ru/public/images/preview.php?src=gallery/15.jpg&h=300"
              alt="Ведущий на мероприятии"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
