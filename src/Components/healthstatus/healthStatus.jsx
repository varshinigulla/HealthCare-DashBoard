import { healthData } from "../data/healthdata";
import { FaArrowRightLong } from "react-icons/fa6";
import "./healthstatus.css"

export const HealthStatus = () => {

  return (
    <div className="healthStatus">
      <div className="heading">
        <h4>DashBoard</h4>
        <pre>This Week <FaArrowRightLong/></pre>
      </div>
      <div className="health-section">
        <section className="anatomy-section">
          <img src={`${process.env.PUBLIC_URL}/Assests/Anatomy.jpg`} alt="Anatomy" className="anatomy-img" />
          {healthData.map(part => (
            <div key={part.id} className="anatomy-indicator" style={{ ...part.position,backgroundColor: part.color}}>
              <img src={part.icon} alt="parts" className="part"/>
              <pre>{ part.status} {part.title}</pre>
            </div>
          ))}
        </section>
        <div className="health-status">
          {healthData.map(card => (
            <div key={card.id} className="cards">
              <div className="parts">
                <img src={card.icon} alt="parts" className="card-icon" />
                <h4> {card.title}</h4>
              </div>
              <p>Date : {card.date}</p>
              <div className="rate" style={{backgroundColor: card.color}}></div>
            </div>
          ))}
          <pre>Details <FaArrowRightLong/></pre>
        </div>
      </div>
    </div>
  );
};
