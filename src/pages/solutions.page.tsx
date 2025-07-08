import "./stylesheet/solutions.style.css";
import Book from "../components/book/book.component";

function SolutionsPage() {
  const projects = [
    {
      imageSrc: require("../images/solution1.jpg"),
      title: "Versicherungsplattform",
      description:
          "Entwicklung einer skalierbaren Cloud-Lösung zur Schadensmeldung für eine große Versicherung.",
    },
    {
      imageSrc: require("../images/solution2.jpg"),
      title: "E-Commerce Optimierung",
      description:
          "Modernisierung des Frontends und Einführung von Headless CMS für ein wachsendes Retail-Unternehmen.",
    },
    {
      imageSrc: require("../images/solution3.jpg"),
      title: "FinTech-App",
      description:
          "Entwicklung einer sicheren Mobile-Banking-App inkl. Zwei-Faktor-Authentifizierung.",
    },
  ];

  return (
      <div className="solutions-container">
        <h1 className="solutions-title">Unsere Lösungen</h1>
        <div className="solutions-grid">
          {projects.map((p, i) => (
              <Book
                  key={i}
                  title={p.title}
                  imageSrc={p.imageSrc}
                  description={p.description}
              />
          ))}
        </div>
      </div>
  );
}

export default SolutionsPage;
