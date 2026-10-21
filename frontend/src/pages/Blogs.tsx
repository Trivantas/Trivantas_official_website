import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ChevronRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';

export { BLOG_POSTS, type BlogPost };

/* ─────────────────────────────────────────────
   Blog Card linking to /blogs/:id
   ───────────────────────────────────────────── */
const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    to={`/blogs/${post.id}`}
    className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary/40"
  >
    {/* Image wrapper */}
    <div className="h-48 w-full overflow-hidden bg-muted relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Category badges overlaid on top left of image */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-white border border-primary/20 backdrop-blur-md bg-opacity-95 shadow-sm">
          <Tag className="h-3 w-3" />
          {post.tag}
        </span>
      </div>
    </div>

    <div className="p-6 space-y-4 flex flex-col flex-grow">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border">
          {post.category}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:gap-2 transition-all">
          Read article <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </Link>
);

/* ─────────────────────────────────────────────
   Blogs listing page
   ───────────────────────────────────────────── */
const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trivantas Blog
          </h1>
          <p className="text-2xl text-secondary font-light mb-6">
            Insights &amp; Industry Updates
          </p>
          <div className="prose prose-lg prose-invert text-white/90 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Expert articles on industrial automation, filtration technology, sensor innovation,
              and specialized machinery — straight from our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">No posts yet. Check back soon!</div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
