import { appointments } from "../data/appointments";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Calendar.css"

export const Calendar = () => {

  return (
    <div className="calendar-details">
      <div className="calendar-view">
        <p className="calendar-heading">{appointments.month} <pre><FaLongArrowAltLeft /> <FaLongArrowAltRight /></pre></p>
        <div className="calendar">
          {appointments.slots.map((data,index) => (
            <div key={index} className="slots">
              <span className="slots-day">{data.day}</span>
              <h3 className="slots-date">{data.date}</h3>
              {
                data.time.map((time,i) => (
                  <p className="slots-time">{time}</p>
                ))
              }
            </div>
          ))
          }
        </div>
      </div>
      <div className="appointment">
        {appointments.details.map((app, i) => (
          <div className="appointment-card">
            <div className="appointment-title">
              <h5>{app.title}</h5>
              <img src={app.icon} alt={`${app.title} icon`} />
            </div>
            <p>{app.time}</p>
            <h6>{app.name}</h6>
          </div>
        ))}
      </div>  
    </div>
  );
}