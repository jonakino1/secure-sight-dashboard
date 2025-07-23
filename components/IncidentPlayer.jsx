
export default function IncidentPlayer() {
  return (
    <div className="flex flex-col w-2/3 p-6">
      <div className="text-sm text-gray-400 mb-2">11/7/2025 - 03:12:37</div>
      <div className="bg-black rounded-xl overflow-hidden mb-4">
        <img src="/thumbnails/incident1.jpg" className="w-full" alt="incident" />
      </div>
      <div className="flex gap-2">
        <img src="/thumbnails/incident2.jpg" className="w-1/4 rounded-lg" />
        <img src="/thumbnails/incident3.jpg" className="w-1/4 rounded-lg" />
      </div>
    </div>
  )
}
