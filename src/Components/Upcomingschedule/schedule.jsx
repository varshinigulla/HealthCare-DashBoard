import { Appointmentcard } from "../AppointmentCard/Appointmentcard";
import { schedule } from "../data/schedules";
import "./schedule.css"

export const UpcomingSchedule = () => {
  return (
    <div className="upcomingSchedule">
      <h4>The Upcoming Schedule</h4>
      {schedule.map((data, i) => (
        <div key={i}>
          <h5>{data.day}</h5>
          <div className="scheduleList">
            {data.appointments.map((data, i) => (
              <Appointmentcard
                key={i}
                title={data.title}
                time={data.time}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
