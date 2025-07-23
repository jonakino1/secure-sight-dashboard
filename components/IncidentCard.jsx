export default function IncidentCard({ incident, onResolve }) {
  const time = `${incident.tsStart.slice(11, 16)} - ${incident.tsEnd.slice(11, 16)}`
  const color = {
    "Unauthorised Access": "bg-orange-500",
    "Gun Threat": "bg-red-600",
    "Face Recognised": "bg-blue-500"
  }[incident.type] || "bg-gray-500"

  return (
    <div className="flex gap-4 p-4 rounded-lg bg-[#122b3a] shadow mb-3">
      <img src={incident.thumbnailUrl} className="w-20 h-16 rounded-lg object-cover" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded text-xs text-white ${color}`}>{incident.type}</span>
          <button
            onClick={() => onResolve(incident.id)}
            className="text-green-400 text-sm hover:underline"
          >
            Resolve →
          </button>
        </div>
        <div className="text-sm mt-1">{incident.camera.location}</div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
    </div>
  )
}
