// pages/Landing.jsx
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow hero-glow-1" aria-hidden="true" />
        <div className="hero-glow hero-glow-2" aria-hidden="true" />
        <div className="hero-copy">
         
          <h1>123456789</h1>
         
          <div className="hero-actions">
            <Link className="button button-secondary" to="/products">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section feature-grid">
        <article className="feature-card">
          <h2>what we offer here!</h2>
    
        </article>
        <article className="feature-card">
          <h2>what we offer here!</h2>
        
        </article>
      </section>
    </>
  );
}