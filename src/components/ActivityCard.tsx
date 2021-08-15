// Interface
interface Activity {
  id: number;
  category: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}
interface ActivityCardProps {
  data: Activity;
}

export default function ActivityCard({ data }: ActivityCardProps) {
  return (
    <div className="ActivityCard card">
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
