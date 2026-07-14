export interface BlogPostData {
  title: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const BLOG_POSTS_LIST: BlogPostData[] = [
  {
    title: "5 Signs Your Car Needs Immediate Service",
    date: "May 20, 2024",
    readTime: "5 min read",
    image: "/images/blog-1.png",
    slug: "5-signs-your-car-needs-immediate-service",
  },
  {
    title: "How to Choose the Right Car Workshop",
    date: "May 18, 2024",
    readTime: "4 min read",
    image: "/images/blog-2.png",
    slug: "how-to-choose-the-right-car-workshop",
  },
  {
    title: "Save Money on Car Maintenance: Expert Tips",
    date: "May 15, 2024",
    readTime: "6 min read",
    image: "/images/blog-3.png",
    slug: "save-money-on-car-maintenance-expert-tips",
  },
];
