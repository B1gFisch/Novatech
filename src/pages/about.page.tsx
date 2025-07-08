import React from 'react';
import './stylesheet/about.style.css';

function AboutPage() {
  return (
      <div className="cv-container">
        <section className="about-section">
          <h3>Unser Unternehmen</h3>
          <p>
            NovaTech Solutions steht für Innovation, Qualität und Verlässlichkeit.
            Seit unserer Gründung unterstützen wir Kunden auf ihrem Weg zur digitalen Transformation.
          </p>
        </section>
        <section className="experience-section">
          <h3>Unsere Mission</h3>
          <p>
            Wir entwickeln skalierbare Softwarelösungen und helfen Unternehmen, effizienter, sicherer und nachhaltiger zu arbeiten.
          </p>
        </section>
        <section className="skills-section">
          <h3>Unsere Kernkompetenzen</h3>
          <ul>
            <li>Cloud-Migration & -Architektur</li>
            <li>Enterprise Softwareentwicklung</li>
            <li>Cybersecurity & Datenschutz</li>
            <li>DevOps & CI/CD</li>
          </ul>
        </section>
      </div>
  );
}

export default AboutPage;
