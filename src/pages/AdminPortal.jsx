import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

// Sub-components for admin portal
const AdminDashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <div className="stats">
      <div className="stat">
        <span className="stat-number">1,234</span>
        <span className="stat-label">Users</span>
      </div>
      <div className="stat">
        <span className="stat-number">567</span>
        <span className="stat-label">Orders</span>
      </div>
      <div className="stat">
        <span className="stat-number">$45.2K</span>
        <span className="stat-label">Revenue</span>
      </div>
    </div>
  </div>
);

const AdminUsers = () => (
  <div>
    <h2>User Management</h2>
    <ul className="services-list">
      <li>Alice Johnson - alice@example.com</li>
      <li>Bob Smith - bob@example.com</li>
      <li>Carol Davis - carol@example.com</li>
      <li>David Wilson - david@example.com</li>
    </ul>
  </div>
);

const AdminProducts = () => (
  <div>
    <h2>Product Management</h2>
    <ul className="services-list">
      <li>Blue Theme Package - $49.99</li>
      <li>Cyan UI Kit - $29.99</li>
      <li>Ocean Animation Pack - $89.99</li>
    </ul>
  </div>
);

const AdminPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  // Check for existing session
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'authenticated') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo authentication
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsLoggedIn(true);
      localStorage.setItem('adminToken', 'authenticated');
      setActiveTab('dashboard');
    } else {
      alert('Invalid credentials!\nUse: admin / admin123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminToken');
    setCredentials({ username: '', password: '' });
    navigate('/admin');
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  if (!isLoggedIn) {
    return (
      <div className="page-container">
        <div className="page-card">
          <h1>🔐 Admin Portal</h1>
          <p>Please login to access the administration dashboard.</p>
          <form className="contact-form" onSubmit={handleLogin}>
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={credentials.username}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={credentials.password}
              onChange={handleChange}
              required 
            />
            <button type="submit">Login</button>
          </form>
          <div style={{ 
            marginTop: '1rem', 
            padding: '0.8rem', 
            background: '#e0f2fe', 
            borderRadius: '8px',
            fontSize: '0.85rem'
          }}>
            <strong>Demo Credentials:</strong><br />
            Username: admin<br />
            Password: admin123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-card" style={{ maxWidth: '900px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1>👑 Admin Dashboard</h1>
          <button onClick={handleLogout} className="back-home-btn" style={{ padding: '0.5rem 1.2rem' }}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>

        {/* Admin Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '2rem',
          borderBottom: '1px solid #bae6fd',
          paddingBottom: '0.5rem'
        }}>
          <button 
            onClick={() => setActiveTab('dashboard')}
            style={{
              padding: '0.5rem 1rem',
              background: activeTab === 'dashboard' ? '#0891b2' : 'transparent',
              color: activeTab === 'dashboard' ? 'white' : '#0c4a6e',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            📊 Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            style={{
              padding: '0.5rem 1rem',
              background: activeTab === 'users' ? '#0891b2' : 'transparent',
              color: activeTab === 'users' ? 'white' : '#0c4a6e',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            👥 Users
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            style={{
              padding: '0.5rem 1rem',
              background: activeTab === 'products' ? '#0891b2' : 'transparent',
              color: activeTab === 'products' ? 'white' : '#0c4a6e',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            📦 Products
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'users' && <AdminUsers />}
        {activeTab === 'products' && <AdminProducts />}

        <div className="cta-section" style={{ marginTop: '2rem' }}>
          <Link to="/" className="back-home-btn">← Return to Website</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;