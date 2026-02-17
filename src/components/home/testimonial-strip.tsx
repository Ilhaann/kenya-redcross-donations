const testimonials = [
  {
    quote:
      "When the floods took everything, Red Cross was there the next morning with food and blankets. I will never forget that.",
    name: "Grace Achieng",
    location: "Kisumu County",
    initials: "GA",
  },
  {
    quote:
      "I donate monthly through M-Pesa. It's so easy, and knowing a child eats because of me keeps me going.",
    name: "James Mwangi",
    location: "Nairobi",
    initials: "JM",
  },
  {
    quote:
      "The school meals programme changed everything for our community. Attendance went up 40% in one term.",
    name: "Teacher Sarah Kiprop",
    location: "Turkana County",
    initials: "SK",
  },
]

export function TestimonialStrip() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground text-balance">
          Voices of Impact
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
          Real stories from the people we serve and those who give.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-sm italic leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
