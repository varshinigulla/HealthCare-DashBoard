import { appointments } from "../data/appointments";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import "./Calendar.css"

export const Calendar = () => {


  const [times,setTime] = useState(null);
  const [appointment,setAppointment] = useState(1);

  return (
    <div className="calendar-details">
      <div className="calendar-view">
        <p className="calendar-heading">{appointments.month} <pre><FaLongArrowAltLeft /> <FaLongArrowAltRight /></pre></p>
        <div className="calendar">
          {appointments.slots.map((data,index) => (
            <div key={index} className="slots">
              <span className="slots-day">{data.day}</span>
              <h3>{data.date}</h3>
              {
                data.time.map(time => (
                  <p className={times===time?"slot-time":"slots-time"} onClick={() => setTime(time)}>{time}</p>
                ))
              }
            </div>
          ))
          }
        </div>
      </div>
      <div className="appointment">
        {appointments.details.map((app) => (
          <div key={app.id} className={appointment===app.id?"app-bg-color appointment-card":"appointment-card"} onClick={() => setAppointment(app.id)}>
            <div className="appointment-title">
              <span className={appointment===app.id?"appo-title":"app-title"}>{app.title}</span>
              <img src={app.icon} alt={`${app.title} icon`} />
            </div>
            <p className={appointment===app.id?"appo-time":"app-time"}>{app.time}</p>
            <h6 className={appointment===app.id?"appo-name":"app-name"}>{app.name}</h6>
          </div>
        ))}
      </div>  
    </div>
  );
}