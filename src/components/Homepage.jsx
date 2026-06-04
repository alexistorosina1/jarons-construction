import "./Homepage.css";
import HomepageData from "../data/homepage-data.js";
import Navbar from "./Navbar.jsx";

export default function Homepage() {
  return (
    <>
      <section className="section-1-container">
        <div className="section-1-wrapper">
          <h1>Building Dreams Into Reality</h1>
          <p>
            With over 15 years of experience, JARONS Construction delivers
            <br /> exceptional quality and craftsmanship in every project.
          </p>
          <button>Get a free Quote</button>
        </div>
      </section>

      <section className="section-2-container">
        <h2>Why Choose Us?</h2>
        <div className="card-wrapper">
          {HomepageData.map((item) => (
            <div key={item.id} className="section-2-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        {/* <h2>Why Choose JARONS Construction?</h2> */}
      </section>

      <section className="section-3-container">
        <h2>Ready to start your project?</h2>
        <p>Contact us today for a free consultation and quote.</p>
        <button>Contact Us</button>
      </section>
    </>
  );
}
