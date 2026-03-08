import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна и Дмитрий",
    type: "Свадьба",
    text: "Александр сделал нашу свадьбу незабываемой! Все гости были в восторге от программы. Ни одной минуты скуки!",
  },
  {
    name: "Елена Петрова",
    type: "Юбилей",
    text: "Отмечали юбилей мамы. Александр нашёл подход ко всем — и к молодёжи, и к старшему поколению. Очень тактичный и весёлый!",
  },
  {
    name: "ООО «ТехноСтар»",
    type: "Корпоратив",
    text: "Проводили новогодний корпоратив на 200 человек. Всё было организовано идеально — звук, свет, программа. Рекомендуем!",
  },
  {
    name: "Ирина Козлова",
    type: "Выпускной",
    text: "Выпускной получился ярким и современным. Дети были в восторге! Спасибо за энергию и профессионализм!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-12 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Отзывы
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Что говорят клиенты
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {reviews.map((review, i) => (
                <CarouselItem key={i}>
                  <div className="bg-card rounded-2xl p-5 sm:p-10 shadow-sm border border-border text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={20} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                      «{review.text}»
                    </p>
                    <p className="font-bold text-foreground text-lg">{review.name}</p>
                    <p className="text-primary text-sm font-semibold mt-1">{review.type}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
