import { motion } from "framer-motion";

const principles = [
  { name: "Humanity", emoji: "🌍" },
  { name: "Impartiality", emoji: "⚖️" },
  { name: "Neutrality", emoji: "🕊️" },
  { name: "Independence", emoji: "🏛️" },
  { name: "Voluntary Service", emoji: "🤝" },
  { name: "Unity", emoji: "🔗" },
  { name: "Universality", emoji: "🌐" },
];

const Principles = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Foundation
          </span>
          <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
            7 Fundamental <span className="italic text-primary">Principles</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            The Kenya Red Cross Society is guided by the fundamental principles of the International Red Cross and Red Crescent Movement.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xl">{p.emoji}</span>
              <span className="font-semibold text-foreground">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
