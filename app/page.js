import Navbar from '@/components/Navbar'
import IncidentPlayer from '@/components/IncidentPlayer'
import IncidentList from '@/components/IncidentList'

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <IncidentPlayer />
        <IncidentList />
      </div>
    </div>
  )
}
