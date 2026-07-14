import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPostData } from "../data/blogPostsList";

interface BlogCardProps {
  post: BlogPostData;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-3 text-left w-full group">
      {/* Blog Thumbnail */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-text-muted/10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-0.5">
        <Link href={`/blog/${post.slug}`} className="block">
          <h4 className="font-heading font-black text-sm text-primary-navy hover:text-secondary-blue transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h4>
        </Link>
        
        <span className="font-body text-xs text-neutral-text-muted">
          {post.date} &middot; {post.readTime}
        </span>
      </div>
    </div>
  );
}
