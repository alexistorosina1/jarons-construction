import "./About.css";
export default function About() {
  return (
    <>
      <div className="about-container">
        <h1>About JARONS Construction</h1>
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            The journey of JARONS Construction began two decades ago when our
            founder came to this country from Ecuador to pursue the American
            dream. After spending ten years mastering the trade and working
            hands-on in the construction industry, he founded this company to
            bring his own vision of excellence to life.
            <br />
            <br />
            What started a decade ago as a small, family-owned operation has
            grown into a trusted name in construction. Today, we maintain that
            same deep commitment to quality work, family values, and personal
            service that defined us from day one.
          </p>
        </section>

        <section className="mission-values">
          <div className="our-mission">
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional construction services that exceed our
              clients' expectations through quality workmanship, transparent
              communication, and unwavering integrity.
            </p>
          </div>

          <div className="our-values">
            <h3>Our Values</h3>
            <ul>
              <li>Quality over quantity</li>
              <li>Honest and transparent pricing</li>
              <li>Safety first, always</li>
              <li>Environmental responsibility</li>
              <li>Community involvement</li>
            </ul>
          </div>
        </section>

        <section className="stats-section">
          <h3>By The Numbers</h3>
          <div className="stats-container">
            <div className="experience-stat">
              <h2>15+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="projects-stat">
              <h2>500+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="satisfaction-stat">
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
