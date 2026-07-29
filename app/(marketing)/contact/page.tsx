"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useCreateLead } from "@/services/queries";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static content                                                    */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "Mon–Sat, 9am – 8pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["support@carblink.in", "We reply within 24 hours"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["4th Floor, DLF Cyber City", "Gurugram, Haryana 122002"],
  },
  {
    icon: Clock,
    title: "Support Hours",
    lines: ["Mon – Sat: 9:00am – 8:00pm", "Sunday: 10:00am – 4:00pm"],
  },
];

const TOPICS = [
  { value: "general", label: "General Enquiry" },
  { value: "booking", label: "Booking Support" },
  { value: "partner", label: "Become a Workshop Partner" },
  { value: "insurance", label: "Insurance Claim Help" },
  { value: "feedback", label: "Feedback" },
];

const FAQS = [
  {
    q: "How quickly will I get a response?",
    a: "Our team typically replies within 24 hours on business days. For urgent booking issues, calling our support line gets you a faster answer.",
  },
  {
    q: "I want to partner my workshop — who do I contact?",
    a: "Select 'Become a Workshop Partner' in the form below, or reach out directly to partnerships@carblink.in.",
  },
  {
    q: "Do you have offices outside Gurugram?",
    a: "Our head office is in Gurugram, but our support and operations team covers all 25+ cities we operate in.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0].value,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const { mutateAsync: createLead, isPending: isSubmitting } = useCreateLead();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await createLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        source: 'WEBSITE_CONTACT',
        message: `Topic: ${TOPICS.find(t => t.value === form.topic)?.label || form.topic} | Message: ${form.message}`,
      });
      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to send message. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-neutral-bg font-body text-neutral-text-dark antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-neutral-hero-bg pt-16 pb-28 md:pt-20 md:pb-36">
        {/* soft blue glow accents, consistent with homepage hero */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-orange/10 blur-3xl" />

        <Container className="relative z-10 text-center">
          <Badge variant="info" className="bg-white border border-primary-blue/20 text-primary-blue shadow-sm mx-auto">
            <MessageCircle className="w-3.5 h-3.5" />
            We&apos;re here to help
          </Badge>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mt-6 max-w-2xl mx-auto">
            Let&apos;s <span className="text-primary-blue">talk cars</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-neutral-text-muted leading-relaxed mt-5 max-w-xl mx-auto">
            Questions about a booking, a workshop partnership, or just
            feedback — our team is one message away.
          </p>
        </Container>
      </section>

      {/* ---------------- CONTACT INFO CARDS ---------------- */}
      <section className="-mt-14 pb-4 relative z-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
              <Card key={title} hoverable className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold mt-4 text-sm text-neutral-text-dark">
                  {title}
                </h3>
                <div className="mt-1.5 space-y-0.5">
                  {lines.map((l) => (
                    <p key={l} className="font-body text-sm text-neutral-text-muted">
                      {l}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- FORM + MAP ---------------- */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* form */}
          <div className="lg:col-span-3">
            <Card className="p-6 sm:p-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-text-dark">
                Send us a message
              </h2>
              <p className="font-body mt-1 text-sm text-neutral-text-muted">
                Fill in the form and our team will get back to you within
                24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center rounded-2xl border border-primary-blue/15 bg-primary-blue/5 px-6 py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10">
                    <CheckCircle2 className="h-7 w-7 text-primary-blue" />
                  </div>
                  <h3 className="font-heading font-bold mt-4 text-base text-neutral-text-dark">
                    Message sent!
                  </h3>
                  <p className="font-body mt-1 max-w-sm text-sm text-neutral-text-muted">
                    Thanks for reaching out — someone from our team will
                    reply to {form.email || "your email"} shortly.
                  </p>
                  <Button
                    variant="link"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        topic: TOPICS[0].value,
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Aditya Sharma"
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />

                  <Select
                    label="What's this about?"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    options={TOPICS}
                  />

                  <div className="flex flex-col gap-1.5 w-full text-left">
                    <label className="font-heading font-bold text-xs text-neutral-text-muted">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 bg-white border border-neutral-text-muted/30 rounded-xl font-body text-sm text-neutral-text-dark placeholder:text-neutral-text-muted/60 outline-none transition-colors focus:border-primary-blue focus:ring-1 focus:ring-primary-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting || !form.name || !form.phone || !form.email || !form.message}
                    className="sm:w-auto"
                    rightIcon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* map / office */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden p-0">
              <div className="flex h-56 items-center justify-center bg-neutral-hero-bg">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary-blue/60" />
                  <p className="font-body mt-2 text-sm text-neutral-text-muted">
                    Map preview
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-sm text-neutral-text-dark">
                  Car Blink Head Office
                </h3>
                <p className="font-body mt-1 text-sm text-neutral-text-muted">
                  4th Floor, DLF Cyber City, Gurugram, Haryana 122002
                </p>
                <p className="font-heading font-bold mt-4 text-sm text-neutral-text-dark">
                  Nearest Metro
                </p>
                <p className="font-body mt-1 text-sm text-neutral-text-muted">
                  Cyber City Rapid Metro Station — 5 min walk
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-white py-20 sm:py-24 border-t border-neutral-text-muted/10">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Badge variant="default">FAQs</Badge>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark mt-4">
              Before you write in
            </h2>
          </div>

          <div className="mt-10 divide-y divide-neutral-text-muted/10 rounded-2xl border border-neutral-text-muted/15 bg-neutral-bg">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-sm sm:text-base text-neutral-text-dark">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-primary-blue transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="font-body px-6 pb-5 text-sm leading-relaxed text-neutral-text-muted">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
