import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { navItems, searchIndex, siteProfile } from '../data/site.js';
import { navigateTo } from '../utils/router.js';

function NavLink({ item, onNavigate }) {
  const hasChildren = Boolean(item.children?.length);

  return (
    <div className="nav-item">
      <button className="nav-link" onClick={() => onNavigate(item.path)}>
        <span>{item.label}</span>
        {hasChildren && <ChevronDown size={15} />}
      </button>
      {hasChildren && (
        <div className="submenu">
          {item.children.map((child) => (
            <button key={child.path} onClick={() => onNavigate(child.path)}>
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return [];
    return searchIndex.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(keyword));
  }, [query]);

  const onNavigate = (path) => {
    setMobileOpen(false);
    setQuery('');
    navigateTo(path);
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('/my-profile')}>
        <span className="brand-mark">Z</span>
        <span>
          <strong>{siteProfile.name}</strong>
          <small>{siteProfile.subtitle}</small>
        </span>
      </button>

      <button className="mobile-toggle" onClick={() => setMobileOpen((value) => !value)}>
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`header-actions ${mobileOpen ? 'open' : ''}`}>
        <nav className="nav-bar">
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} onNavigate={onNavigate} />
          ))}
        </nav>

        <div className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索此网站" />
          {results.length > 0 && (
            <div className="search-results">
              {results.map((item) => (
                <button key={item.path} onClick={() => onNavigate(item.path)}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
