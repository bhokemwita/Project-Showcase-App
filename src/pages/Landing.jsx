import { useState, useEffect } from 'react'
import ProductPage from './ProductPage';

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
    <ProductPage />
    </>
  );
}