import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NAV, DEFAULT_ARTICLE } from './nav.js';

const modules = import.meta.glob(
  ['../hardware/**/*.md', '../concepts/**/*.md'],
  { query: '?raw', import: 'default' }
);

function pathToModuleKey(path) {
  return '..' + path;
}

function NavSection({ section, activeArticle, onSelect }) {
  const isActive = section.articles.some(a => a.path === activeArticle);
  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setOpen(true);
  }, [isActive]);

  return (
    <div className="nav-section">
      <button
        className={`nav-section-btn${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {section.label}
        <span className={`chevron${open ? ' open' : ''}`}>▶</span>
      </button>
      {open && (
        <div className="nav-articles">
          {section.articles.map(article => (
            <button
              key={article.path}
              className={`nav-article-btn${activeArticle === article.path ? ' active' : ''}`}
              onClick={() => onSelect(article)}
              title={article.label}
            >
              {article.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar({ activeArticle, onSelect, open }) {
  return (
    <nav className={`sidebar${open ? ' open' : ''}`}>
      {NAV.map(group => (
        <div key={group.label} className="nav-group">
          <div className="nav-group-label">{group.label}</div>
          {group.sections.map(section => (
            <NavSection
              key={section.label}
              section={section}
              activeArticle={activeArticle}
              onSelect={onSelect}
            />
          ))}
        </div>
      ))}
    </nav>
  );
}

function ArticleView({ article }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setContent(null);
    setError(null);
    const key = pathToModuleKey(article.path);
    const loader = modules[key];
    if (!loader) {
      setError(`Article not found: ${article.path}`);
      return;
    }
    loader()
      .then(raw => setContent(raw))
      .catch(() => setError('Failed to load article.'));
  }, [article.path]);

  if (error) return <div className="article-error">{error}</div>;
  if (!content) return <div className="article-loading">Loading…</div>;

  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default function App() {
  const [activeArticle, setActiveArticle] = useState(DEFAULT_ARTICLE);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelect = useCallback((article) => {
    setActiveArticle(article);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <header className="header">
        <a className="header-logo" href="https://oasis-x.io">
          oasis<span> knowledge</span>
        </a>
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </header>
      <div className="body">
        <Sidebar
          activeArticle={activeArticle.path}
          onSelect={handleSelect}
          open={sidebarOpen}
        />
        <main className="content-area">
          <ArticleView article={activeArticle} />
        </main>
      </div>
    </div>
  );
}
