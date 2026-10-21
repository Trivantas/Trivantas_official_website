import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Tag,
  ChevronRight,
  Calendar,
  Clock,
  Share2,
  Check,
  Copy,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPostById, getRelatedBlogPosts, BlogPost } from '@/data/blogs';
import { toast } from 'sonner';

const renderHeading = (heading: string) => {
  const parts = heading.split('. ');
  if (parts.length > 1 && !isNaN(Number(parts[0]))) {
    return (
      <>
        <span className="text-primary font-extrabold">{parts[0]}.</span> {parts.slice(1).join('. ')}
      </>
    );
  }
  return heading;
};

const renderTitle = (title: string) => {
  const targetWords = [
    'Ultrasonic Level Sensors',
    'Fuel Level Transmitters',
    'Industrial Water, Oil & Coolant Recycling',
  ];
  for (const word of targetWords) {
    if (title.includes(word)) {
      const parts = title.split(word);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{word}</span>
          {parts[1]}
        </>
      );
    }
  }
  return title;
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = id ? getBlogPostById(id) : undefined;
  const relatedPosts = post ? getRelatedBlogPosts(post.id, 2) : [];

  const handleShare = async () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        toast.success('Link copied to clipboard!');
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full text-center py-16">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground mb-3">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8 text-base">
            The blog article you are looking for does not exist or may have been moved.
          </p>
          <Button
            onClick={() => navigate('/blogs')}
            className="bg-primary hover:bg-primary/90 text-white font-medium rounded-xl px-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover font-semibold transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform text-primary" />
            Back to Blogs
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Tag className="h-3 w-3" />
              {post.tag}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white border border-primary/20">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground ml-2">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {renderTitle(post.title)}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Share toolbar */}
        <div className="flex items-center justify-between py-3 mb-8 border-y border-border">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span>Published on {post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/5 border border-border/60"
            title="Share this article"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 text-primary" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* Featured Image */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-border aspect-video max-h-[420px] w-full bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sections */}
        <div className="prose-custom space-y-8">
          {post.sections.map((sec, i) => (
            <div key={i} className="space-y-3">
              {sec.heading && (
                <h2 className="text-xl md:text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
                  {renderHeading(sec.heading)}
                </h2>
              )}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {sec.body}
                {sec.citation && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {sec.citation}
                  </span>
                )}
              </p>
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-2 mt-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground">
                        {b.label && (
                          <span className="font-semibold text-foreground">{b.label}: </span>
                        )}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border-l-4 border-l-primary border border-border shadow-md">
            <h2 className="text-xl font-bold mb-4 text-primary">Conclusion</h2>
            {post.conclusion.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Back button */}
        <div className="mt-12 text-center border-t border-border pt-10">
          <Link to="/blogs">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-8 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all blogs
            </Button>
          </Link>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              More Articles from Trivantas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/blogs/${rPost.id}`}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="text-primary font-semibold">{rPost.category}</span>
                      <span>•</span>
                      <span>{rPost.readTime}</span>
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-primary mt-4 group-hover:translate-x-1 transition-transform">
                    Read article <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
