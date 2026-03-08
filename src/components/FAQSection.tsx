import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Какие мероприятия вы проводите?",
    answer:
      "Провожу свадьбы, корпоративы, юбилеи, выпускные, презентации и любые торжественные мероприятия в Москве и Подмосковье.",
  },
  {
    question: "Сколько стоят услуги ведущего?",
    answer:
      "Стоимость зависит от формата и продолжительности мероприятия. Оставьте заявку на сайте, и я подготовлю индивидуальное предложение.",
  },
  {
    question: "За сколько времени нужно бронировать дату?",
    answer:
      "Рекомендую бронировать дату за 2–3 месяца, особенно в сезон свадеб (май–сентябрь). Но всегда можно уточнить наличие свободных дат.",
  },
  {
    question: "Работаете ли вы за пределами Москвы?",
    answer:
      "Да, выезжаю в Подмосковье и другие регионы. Условия обсуждаются индивидуально.",
  },
  {
    question: "Можно ли посмотреть видео с мероприятий?",
    answer:
      "Конечно! На сайте есть раздел с видео, где вы можете увидеть фрагменты реальных мероприятий и оценить стиль ведения.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-24 bg-secondary/30">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Ответы на популярные вопросы о моих услугах
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border px-4 md:px-6"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
