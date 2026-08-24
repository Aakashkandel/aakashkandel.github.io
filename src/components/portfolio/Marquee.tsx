const items = [
  'Odoo',
  'Python',
  'Owl Framework',
  'FastAPI',
  'PostgreSQL',
  'QWeb',
  'ERP',
  'React',
  'MERN',
  'Laravel',
  'TypeScript',
  'XML-RPC',
];

const Group = () => (
  <div className="flex shrink-0 items-center gap-10 pr-10">
    {items.map((item) => (
      <span
        key={item}
        className="flex items-center gap-10 text-base sm:text-lg font-display font-semibold text-muted-foreground"
      >
        {item}
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/20 py-5">
      <div className="flex w-max animate-marquee">
        <Group />
        <Group />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default Marquee;
