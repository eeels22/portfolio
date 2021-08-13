export default function ActivityCard({ activity }) {
  return (
    <div>
      <h3>{activity.title}</h3>
      <p>{activity.location}</p>
      <p>
        {activity.startDate} to {activity.endDate}
      </p>
      <p>{activity.description}</p>
      <span>{activity.category}</span>
    </div>
  );
}
