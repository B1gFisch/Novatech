import "./stylesheet/services.style.css";

function ServicesPage() {
  return (
      <div className="services-container">
        <h1 className="services-title">Unsere Dienstleistungen</h1>
        <div className="services-content">
          <p className="services-intro">
            NovaTech Solutions bietet ein umfassendes Portfolio an IT-Dienstleistungen:
          </p>
          <ul className="services-list">
            <li>🔧 Beratung & Architektur für Cloud-Infrastrukturen (AWS, Azure, GCP)</li>
            <li>🌐 Entwicklung moderner Web- und Mobile-Anwendungen</li>
            <li>🔗 Integration von Unternehmenssystemen & APIs</li>
            <li>🛠️ Langfristiger Support und Wartung</li>
          </ul>
        </div>
      </div>
  );
}

export default ServicesPage;
