import "./Events.css";

function Events() {
  const events = [
    {
      name: "Cyber Security",
      day: "Monday",
      time: "4pm - 7pm",
      location: "Computer Lab F04",
      leader: "Webster Ifedha",
    },
    {
      name: "UI/UX",
      day: "Tuesday",
      time: "5pm - 8pm",
      location: "Computer Lab F04",
      leader: "Manase Gunga",
    },
    {
      name: "Web Development",
      day: "Wednesday",
      time: "6pm - 9pm",
      location: "Computer Lab F04",
      leader: "Carolyne Githenduka",
    },
    {
      name: "Mobile Apps Development",
      day: "Thursday",
      time: "4pm - 7pm",
      location: "Computer Lab F04",
      leader: "Stanley Amunze",
    },
    {
      name: "Cloud Engineering",
      day: "Friday",
      time: "3pm - 6pm",
      location: "Computer Lab F04",
      leader: "Paul Karanja",
    },
    {
      name: "Power Platform",
      day: "Saturday",
      time: "1pm - 4pm",
      location: "Computer Lab F04",
      leader: "Evyonn Mbithe",
    },
  ];

  return (
    <section className="events-page">
      <h2 className="events-title">MUTC Weekly Schedule</h2>
      <p className="events-description">
        MUTC offers weekly schedule activities,allowing members various
        opportunities to engage in specialized learning sessions from Monday to
        Saturday. members can expect a diverse range of learning opportunities
        and activities.
      </p>

      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-day-time">
              {event.day}, {event.time}
            </p>
            <p className="event-location">Location: {event.location}</p>
            <p className="event-leader">Led by: {event.leader}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
