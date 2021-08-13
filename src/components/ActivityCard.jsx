export default function ActivityCard({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.location}</p>
      <p>
        {data.startDate} to {data.endDate}
      </p>
      <p>{data.description}</p>
      <span>{data.category}</span>
    </div>
  );
}
