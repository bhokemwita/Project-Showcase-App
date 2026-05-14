
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function Landing() {


  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`}
        aria-hidden={!showSplash}
      >
        <div className="splash-copy">
          <span>Welcome</span>
        </div>
      </div>

          <div className="hero-actions">
            <Link className="button button-secondary" to="/products">
              Explore Products
            </Link>
          </div>

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