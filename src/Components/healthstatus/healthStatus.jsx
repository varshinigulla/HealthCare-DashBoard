import { healthData } from "../data/healthdata";
import { FaArrowRightLong } from "react-icons/fa6";
import "./healthstatus.css"

export const HealthStatus = () => {

  return (
    <div className="healthStatus">
      <div className="heading">
        <h3>DashBoard</h3>
        <pre>This Week <FaArrowRightLong/></pre>
      </div>
      <div className="health-section">
        <section className="anatomy-section">
          <img src={`${process.env.PUBLIC_URL}/Assests/Anatomy.jpg`} alt="Anatomy" className="anatomy-img" />
          {healthData.map(part => (
            <div key={part.id} className="anatomy-indicator" style={{ ...part.position,backgroundColor: part.color}}>
              <img src={part.icon} alt={`${part.title} icon`} className="part"/>
              <pre>{ part.status} {part.title}</pre>
            </div>
          ))}
        </section>
        <div className="health-status">
          {healthData.map(card => (
            <div key={card.id} className="cards">
              <div className="parts">
                <img src={card.icon} alt={`${card.title} icon`} className="card-icon" />
                <span className="card-title"> {card.title}</span>
              </div>
              <p>Date : {card.date}</p>
              <div className="rates">
                <pre className="s-rate"></pre>
                <pre className="rate" style={{backgroundColor: card.color}}></pre>
              </div>
            </div>
          ))}
          <pre>Details <FaArrowRightLong/></pre>
        </div>
      </div>
    </div>
  );
};
