import {useState, useEffect} from 'react'

function Landing() {
  const [showSplash, setShowSplash] = useState(true);

 useEffect(() => {
    // Splash on every load for 4 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
      
        <div className="app-shell">
          <div className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`} aria-hidden={!showSplash}>
            <div className="splash-copy">
              <span>MESSAGE</span>
              <span>HERE</span>
            </div>
          </div>
          </div>
     
  )
}

export default Landing;

