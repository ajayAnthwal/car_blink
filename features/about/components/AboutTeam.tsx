import React from "react";
import { Linkedin, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import { ABOUT_TEAM } from "../data/aboutContent";

export default function AboutTeam() {
  return (
    <section className="py-20 md:py-28 bg-neutral-bg">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="info" className="mb-4">
            Leadership
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight mb-3">
            The people behind CarBlink
          </h2>
          <p className="font-body text-neutral-text-muted max-w-md">
            A small team obsessed with making car servicing fair and simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_TEAM.map((member) => (
            <Card
              key={member.name}
              hoverable
              className="flex flex-col items-center text-center bg-white border border-neutral-text-muted/15 rounded-2xl p-6"
            >
              <Avatar alt={member.name} size="lg" className="w-16 h-16 text-base mb-4" />
              <h3 className="font-heading font-bold text-sm text-neutral-text-dark">
                {member.name}
              </h3>
              <p className="font-body text-xs text-neutral-text-muted mt-0.5 mb-4">
                {member.role}
              </p>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wide text-success border border-success/20">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified
                </span>
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-text-muted outline-none transition-colors hover:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
