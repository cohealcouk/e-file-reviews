import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar, Clock, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: {
    slug: string;
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
  const { frontmatter } = article;
  
  return (
    <Link href={`/reviews/${article.slug}`} className="group">
      <article className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-300 border border-slate-100 overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
        <div className="p-6">
          {frontmatter.featured && (
            <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Featured
            </div>
          )}
          
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
            {frontmatter.title}
          </h2>
          
          <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
            {frontmatter.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time>{format(new Date(frontmatter.date), 'MMM d, yyyy')}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
          
          {frontmatter.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400" />
              {frontmatter.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {frontmatter.tags.length > 3 && (
                <span className="text-slate-500 text-xs">+{frontmatter.tags.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
