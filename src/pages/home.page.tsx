import "./stylesheet/homePage.style.css";
// @ts-ignore
import nova_home from "../images/novatech-home.png";

function HomePage() {
  return (
      <div className="page_container">
        <div className="content_container">
          <div className="image_container">
            <img src={nova_home} alt="NovaTech Logo" className="round-image" />
            <div className="text_container">
              Willkommen bei <strong>NovaTech Solutions</strong> – Ihrem Partner für moderne Softwarelösungen, Cloud-Strategien und nachhaltige Digitalisierung.
            </div>
          </div>
        </div>
      </div>
  );
}


export default HomePage;