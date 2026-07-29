import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { fetchApi } from "@/lib/apiClient";

export const revalidate = 60; // ISR revalidate

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post = null;

  try {
    const response = await fetchApi<any>(`/blogs/${params.slug}`);
    if (response?.data) {
      post = response.data;
    }
  } catch (err) {
    console.error("Failed to fetch blog:", err);
  }

  if (!post || post.status !== 'PUBLISHED') {
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
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            5 min read
          </span>
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-text-dark/80">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
