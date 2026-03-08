import { motion } from "framer-motion";
import { getVideos } from "@/lib/mockData";

const VideoGallerySection = () => {
  const videos = getVideos();

  return (
    <section className="py-12 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Видеогалерея
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Видео с мероприятий
          </h2>
        </motion.div>

        <div className="space-y-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 font-sans">
                {video.title}
              </h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-foreground/5">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
