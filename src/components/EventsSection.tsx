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
    gradient: "from-rose/20 to-blush/10",
  },
  {
    emoji: "🌼",
    title: "Haldi Ceremony",
    subtitle: "Golden Glow",
    date: "10th May",
    time: "11:00 AM onwards",
    vibe: "Sunshine, yellow hues, floral freshness",
    gradient: "from-gold/15 to-peach/10",
  },
  {
    emoji: "🥁",
    title: "Baraat Celebration",
    subtitle: "The Grand Procession",
    date: "10th May",
    time: "8:00 PM onwards",
    vibe: "Royal entry, energy, tradition",
    gradient: "from-primary/15 to-rose/10",
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -12, boxShadow: "0 24px 64px hsl(340 60% 50% / 0.2)" }}
      className="glass rounded-3xl p-10 gold-border-strong transition-all duration-500 group cursor-default relative overflow-hidden"
    >
      {/* Gradient bg on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
      
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-blush/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
          <span className="text-4xl">{event.emoji}</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-1 font-medium">
          {event.title}
        </h3>
        <p className="font-script text-2xl text-gold mb-5">{event.subtitle}</p>
        
        <div className="ornamental-divider my-5">
          <span className="text-gold text-xs">✦</span>
        </div>

        <div className="space-y-2">
          <p className="font-body text-foreground font-semibold text-base">📅 {event.date}</p>
          <p className="font-body text-muted-foreground text-sm">🕗 {event.time}</p>
        </div>
        
        <div className="mt-5 inline-block px-4 py-1.5 rounded-full bg-blush/30 text-muted-foreground text-xs font-body tracking-wide">
          {event.vibe}
        </div>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  return (
    <section className="relative py-24 md:py-36 px-6 bg-ivory overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blush/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-peach/15 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">Save the Dates</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-2">Celebrations</h2>
          <div className="ornamental-divider mt-6">
            <span className="text-gold text-sm">❀</span>
          </div>
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
