"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import BlogCard from "./BlogCard";
import { BLOG_POSTS_LIST } from "../data/blogPostsList";

interface BlogPreviewProps {
  className?: string;
}

export default function BlogPreview({ className = "" }: BlogPreviewProps) {
  return (
    <Card className={`bg-white border border-neutral-text-muted/15 rounded-3xl p-6 shadow-md w-full flex flex-col justify-between ${className}`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-text-muted/15 mb-6">
          <h3 className="font-heading font-black text-xl text-primary-navy">
            From Our Blog
          </h3>
          <Link
            href="/blog"
            className="flex items-center gap-1 font-heading font-bold text-xs text-primary-blue hover:underline"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {BLOG_POSTS_LIST.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </Card>
  );
}
