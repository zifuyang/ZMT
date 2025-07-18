import { Link } from 'react-router-dom';
import { vendors } from '../data/vendors';
import { useEffect, useState } from 'react';

const bannerUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=400&fit=crop';

const getInitialMode = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const HomePage = () => {
  const [dark, setDark] = useState(getInitialMode());

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className={dark ? 'dark' : ''}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-inner">
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <button
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDark((d) => !d)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 24,
                color: dark ? '#f3f4f6' : '#18181b',
                zIndex: 10,
              }}
            >
              {dark ? '🌙' : '☀️'}
            </button>
            <img
              src={bannerUrl}
              alt="Banner"
              className="hero-banner"
            />
            <h1 className="hero-title">
              Discover Amazing Vendors
            </h1>
            <p className="hero-subtitle">
              Connect with the best local vendors for your events, celebrations, and special occasions
            </p>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="vendors-section">
        <div className="vendors-header">
          <h2 className="vendors-title">
            Featured Vendors
          </h2>
          <p className="vendors-count">
            {vendors.length} vendors available
          </p>
        </div>
        <div className="vendor-grid">
          {vendors.slice(0, 20).map((vendor) => (
            <div key={vendor.id} style={{ position: 'relative' }}>
              <div className="card" style={{ overflow: 'hidden', transform: 'scale(1)', transition: 'transform 0.3s' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={vendor.images[0]}
                    alt={vendor.name}
                    style={{ width: '100%', height: '192px', objectFit: 'cover', transition: 'filter 0.3s' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span className="vendor-badge">
                      {vendor.category}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                    <span className="vendor-badge">
                      {vendor.location}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 className="vendor-name">
                    {vendor.name}
                  </h3>
                  <p className="vendor-tagline">
                    {vendor.tagline}
                  </p>
                  <div className="vendor-rating-row">
                    <div className="vendor-rating">
                      <span style={{ marginRight: '8px' }}>⭐</span>
                      <span>4.8 (120 reviews)</span>
                    </div>
                    <Link 
                      to={`/vendor/${vendor.id}`} 
                      className="btn-primary"
                      style={{ fontSize: '14px', padding: '8px 16px' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 