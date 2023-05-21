import "../../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Otis's Booking App</span>
        <div className="navItems">
          <button className="navButton">
            <span>Register</span>
            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
            </svg>
          </button>
          
          <button className="navButton">
            <span>Login</span>
            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;