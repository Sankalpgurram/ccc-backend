import "./index.css";

function Hero() {
  return (
    <>
      <nav className="navbar">
        <h2>SRM College</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Mission</li>
          <li>Testimonials</li>
        </ul>
      </nav>

      <section className="hero">
        <div>
          <h1>Welcome to SRM College</h1>
          <p>Building future leaders through quality education.</p>
          <button>Learn More</button>
        </div>

        <img
          src="https://images.seeklogo.com/logo-png/38/1/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png"
          alt="College"
        />
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          SRM College provides quality education and excellent career
          opportunities.
        </p>
      </section>

      <section className="mission">
        <h2>Mission & Vision</h2>
        <p>
          Our mission is to provide quality education. Our vision is to become
          a globally recognized institution.
        </p>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>

        <div className="cards">
          <div className="card">
            <p>Great campus and faculty.</p>
            <h4>- Rahul</h4>
          </div>

          <div className="card">
            <p>Excellent placement opportunities.</p>
            <h4>- Priya</h4>
          </div>

          <div className="card">
            <p>Wonderful learning experience.</p>
            <h4>- Arjun</h4>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 SRM College</p>
      </footer>
    </>
  );
}

export default Hero;