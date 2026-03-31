import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar, Clock, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: {
    slug: string;
    readTime: number;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      author: string;
      tags: string[];
      featured?: boolean;
    };
  };
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const { frontmatter, readTime } = article;
  
  return (
    <Link href={`/reviews/${article.slug}`} className="group">
      <article className={`card p-6 ${featured ? 'md:col-span-2' : ''}`}>
        {frontmatter.featured && (
          <div className="inline-block bg-gradient-to-r from-medical-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-md">
            Featured
          </div>
        )}
        
        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">
          {frontmatter.title}
        </h2>
        
        <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {frontmatter.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time>{format(new Date(frontmatter.date), 'MMM d, yyyy')}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
        
        {frontmatter.tags.length > 0 && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Tag className="w-4 h-4 text-slate-400" />
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-teal-50 text-teal-800 text-xs px-3 py-1 rounded-full border border-teal-100"
              >
                {tag}
              </span>
            ))}
            {frontmatter.tags.length > 3 && (
              <span className="text-slate-500 text-xs">+{frontmatter.tags.length - 3}</span>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}
