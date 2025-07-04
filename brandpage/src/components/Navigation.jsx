import React from 'react'

function Navigation() {
  return (
    <div>
        <header className='header'>
            <nav className='container'>
              <div className="logo">
                <img src="img/brand_logo.png" alt="logo" />
              </div>

              <ul>
                <li href="">Menu</li>
                <li href="">Location</li>
                <li href="">About</li>
                <li href="">Contact</li>
              </ul>

              <button>Login</button>
            </nav>
          </header>
    </div>
  )
}

export default Navigation