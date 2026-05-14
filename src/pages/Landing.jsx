import {useState, useEffect} from 'react'

function Landing() {
  const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
    
//     setShowSplash

//     // write code here 
//   });
  
  return (
      
        <div className="app-shell">
          <div className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`} aria-hidden={!showSplash}>
            <div className="splash-copy">
              <span>Commerce</span>
              <span>Admin</span>
            </div>
          </div>
          </div>
     
  )
}

export default Landing;