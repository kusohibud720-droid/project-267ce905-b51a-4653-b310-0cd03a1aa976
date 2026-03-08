import { motion } from "framer-motion";
import { getFeaturedVideo } from "@/lib/mockData";

const FeaturedVideoSection = () => {
  const featured = getFeaturedVideo();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Видео
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Посмотрите, как это было
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
            <iframe
              src={featured.url}
              title="Главное видео ведущего"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
