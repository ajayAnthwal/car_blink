import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import BlogCard from "@/features/blog/components/BlogCard";
import { fetchApi } from "@/lib/apiClient";

export const revalidate = 60; // ISR revalidate

export default async function BlogPage() {
  let blogs = [];

  try {
    const data = await fetchApi<any>('/blogs?status=PUBLISHED');
    if (data?.data?.blogs) {
      blogs = data.data.blogs.map((b: any) => ({
        title: b.title,
        date: b.publishedAt ? new Date(b.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : new Date(b.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "5 min read", // You can calculate this based on b.content length
        image: b.featuredImage || "/images/blog-1.png",
        slug: b.slug,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <div className="min-h-screen bg-neutral-bg font-sans text-neutral-text-dark antialiased">
      <section className="relative overflow-hidden bg-primary-navy">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary-blue ring-1 ring-white/10">
            Car Blink Blog
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Tips, guides & <span className="text-primary-blue">car care</span>{" "}
            advice
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Practical articles to help you keep your car running smoothly and
            save money on every service.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.length > 0 ? blogs.map((post: any) => (
              <Card key={post.slug} hoverable className="p-4">
                <BlogCard post={post} />
              </Card>
            )) : (
              <p className="text-slate-500 col-span-3 text-center py-10">No blogs found.</p>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm text-primary-blue hover:underline"
            >
              Back to home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
