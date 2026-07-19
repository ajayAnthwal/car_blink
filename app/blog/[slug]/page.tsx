import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS_LIST } from "@/features/blog/data/blogPostsList";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS_LIST.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-bg font-sans text-neutral-text-dark antialiased">
      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-text-muted/10">
          <div className="relative aspect-video w-full bg-neutral-text-muted/10" />
        </div>

        <h1 className="mt-8 text-3xl font-extrabold leading-tight text-primary-navy sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-5 text-sm text-neutral-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-text-dark/80">
          <p>
            Keeping your car in top shape does not have to be complicated. In
            this article we break down the essentials so you can drive with
            confidence and avoid costly surprises down the road.
          </p>
          <p>
            Whether you are a first-time car owner or a seasoned driver, the
            tips below will help you spot issues early and choose the right
            workshop when service is needed.
          </p>
          <p>
            Want a transparent, upfront quote for your next service? CarBlink
            connects you with verified workshops across 25+ cities so you always
            know the price before you commit.
          </p>
        </div>

        <div className="mt-10 border-t border-neutral-text-muted/15 pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-primary-blue hover:underline"
          >
            Get a free quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
