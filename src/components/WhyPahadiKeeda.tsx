import { CalendarCheck, Compass, Route, UsersRound } from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Weekend Adventures", text: "Every weekend brings a new opportunity to explore." },
  { icon: Route, title: "Beautiful Trails", text: "Discover the mountains, forts and hidden landscapes of Maharashtra." },
  { icon: UsersRound, title: "Adventure Community", text: "Meet people who share your love for travel and the outdoors." },
  { icon: Compass, title: "Well Planned Treks", text: "Enjoy organized trekking experiences with proper coordination." },
];


export function WhyPahadiKeeda() {
  return <section className="bg-secondary py-section"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="eyebrow">The Pahadi way</p><h2 className="section-title">Why Trek With Pahadi Keeda?</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7 lg:p-8"><span className="grid h-12 w-12 place-items-center rounded-md bg-accent text-primary"><Icon size={23} strokeWidth={1.8} /></span><h3 className="mt-7 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>;
}