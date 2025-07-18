import { useParams, Link } from 'react-router-dom';
import { vendors } from '../data/vendors';
import { useState } from 'react';

const VendorPage = () => {
  const { vendorId } = useParams();
  const vendor = vendors.find((v) => v.id === vendorId);
  const [imgIdx, setImgIdx] = useState(0);

  if (!vendor) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Vendor Not Found</h1>
        <Link to="/" className="btn-secondary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', padding: '40px 16px', maxWidth: '768px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ position: 'relative', width: '100%', height: '256px', marginBottom: '16px' }}>
          <img
            src={vendor.images[imgIdx]}
            alt={vendor.name}
            style={{ width: '100%', height: '256px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          />
          {vendor.images.length > 1 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
              <button
                className="btn-secondary"
                style={{ padding: '4px 12px' }}
                onClick={() => setImgIdx((imgIdx - 1 + vendor.images.length) % vendor.images.length)}
                aria-label="Previous image"
              >&#8592;</button>
              <button
                className="btn-secondary"
                style={{ padding: '4px 12px' }}
                onClick={() => setImgIdx((imgIdx + 1) % vendor.images.length)}
                aria-label="Next image"
              >&#8594;</button>
            </div>
          )}
        </div>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>{vendor.name}</h1>
        <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '8px' }}>{vendor.tagline}</p>
      </div>
      
      {/* Bio Section */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{ color: '#374151', marginBottom: '8px' }}>{vendor.bio}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
          <img src={vendor.ownerImage} alt={vendor.ownerName} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #bfdbfe' }} />
          <div>
            <p style={{ fontWeight: '600' }}>{vendor.ownerName}</p>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>{vendor.ownerBio}</p>
          </div>
        </div>
      </div>
      
      {/* Package Section */}
      <div style={{ marginBottom: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {vendor.packages.map((pkg) => (
          <div key={pkg.id} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>{pkg.title}</h3>
            <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '8px' }}>{pkg.description}</p>
            <p style={{ color: '#1d4ed8', fontWeight: '600', marginBottom: '8px' }}>{pkg.priceRange}</p>
            <ul style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px', listStyleType: 'disc', paddingLeft: '16px' }}>
              {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button 
              className="btn-primary" 
              style={{ marginTop: 'auto', cursor: 'not-allowed' }} 
              title="Coming Soon – Will redirect to payment platform." 
              disabled
            >
              Choose Package
            </button>
          </div>
        ))}
      </div>
      
      {/* Booking Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        <button
          className="btn-primary"
          style={{ flex: 1, cursor: 'not-allowed' }}
          title="Coming Soon – Will redirect to QiCard/SuperQi app."
          disabled
        >
          Book Now (Domestic)
        </button>
        <button
          className="btn-secondary"
          style={{ flex: 1, cursor: 'not-allowed' }}
          title="Coming Soon – Will support international payments."
          disabled
        >
          Book Now (International)
        </button>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Link to="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default VendorPage; 