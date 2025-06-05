import "./AppointmentCard.css"
export const Appointmentcard = ({ title, time, icon }) => {
  return (
    <section className="card">
      <div className="card-icon">
        <pre className="title">{title}</pre>
        <img src={icon} alt="parts" className="icon" />
      </div>
      <p className="time">{time}</p>
    </section>
  );
}
