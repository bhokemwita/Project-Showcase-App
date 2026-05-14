// import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Page Not Found</h1>
        <button onClick={() => navigate ('ProductPage')}>Products</button>
        <button onClick={() => navigate ('Contact-Us')}>Contact Us</button>
        <button onClick={() => navigate ('AdminPortal')}>Admin Portal</button>

    </div>
    
  )
}

export default NotFound