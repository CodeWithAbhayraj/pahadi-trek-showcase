import { Instagram, Mail, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL } from "./InstagramCTA";

const contacts = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pahadi__keeda",
    href: "https://www.instagram.com/pahadi__keeda",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9309177898",
    href: "https://wa.me/919309177898",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@pahadi__keeda.com",
    href: "mailto:hello@pahadi__keeda.com",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-background py-section"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          
          <div>
            <p className="eyebrow">Let's head out</p>

            <h2 className="section-title">
              Ready For Your Next Adventure?
            </h2>

            <p className="section-copy">
              Have questions about an upcoming trek? Get in touch with the
              Pahadi Keeda team.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {contacts.map(
              ({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-5 py-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary">
                    <Icon size={20} />
                  </span>

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </span>

                    <span className="mt-1 block font-semibold text-foreground group-hover:text-primary">
                      {value}
                    </span>
                  </span>

                  <span className="ml-auto text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}