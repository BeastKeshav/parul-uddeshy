import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    emoji: "🎶",
    title: "Sangeet Soirée",
    subtitle: "Musical Night",
    date: "9th May",
    time: "8:00 PM onwards",
    vibe: "Music, dance, joy, celebration",
  },
  {
    emoji: "🌼",
    title: "Haldi Ceremony",
    subtitle: "Golden Glow",
    date: "10th May",
    time: "11:00 AM onwards",
    vibe: "Sunshine, yellow hues, floral freshness",
  },
  {
    emoji: "🥁",
    title: "Baraat Celebration",
    subtitle: "The Grand Procession",
    date: "10th May",
    time: "8:00 PM onwards",
    vibe: "Royal entry, energy, tradition",
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 20px 60px hsl(340 80% 88% / 0.3)" }}
      className="glass rounded-2xl p-8 gold-border transition-all duration-500 group cursor-default"
    >
      <div className="text-5xl mb-4">{event.emoji}</div>
      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
        {event.title}
      </h3>
      <p className="text-gold font-heading text-lg italic mb-4">{event.subtitle}</p>
      <div className="w-12 h-px bg-gold mx-auto my-4 group-hover:w-20 transition-all duration-500" />
      <p className="font-body text-foreground font-medium text-base mb-1">📅 {event.date}</p>
      <p className="font-body text-muted-foreground text-sm mb-3">🕗 {event.time}</p>
      <p className="font-body text-muted-foreground text-xs italic">{event.vibe}</p>
    </motion.div>
  );
};

const EventsSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-4">Save the Dates</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Celebrations</h2>
          <div className="w-24 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
