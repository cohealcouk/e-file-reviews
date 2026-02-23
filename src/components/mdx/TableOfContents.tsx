import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileOpen(false);
  };

  // Mobile TOC
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <div className="mobile-toc">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="btn-medical p-3 rounded-full shadow-clinical-lg"
        >
          {isMobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="absolute right-4 top-4 bg-white border border-slate-200 rounded-lg shadow-clinical-lg w-64 max-h-96 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900">Quick Navigation</h4>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`toc-link ${activeId === heading.id ? 'active' : ''}`}
                    >
                      {heading.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop TOC
  return (
    <div className="toc-sidebar hidden lg:block">
      <h3 className="toc-title">Table of Contents</h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`toc-link ${activeId === heading.id ? 'active' : ''} ${
              heading.level === 3 ? 'pl-4' : ''
            }`}
          >
            {heading.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
