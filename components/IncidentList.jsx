// components/IncidentList.js

'use client'
import { useEffect, useState } from 'react'
import IncidentCard from './IncidentCard'

export default function IncidentList() {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    fetch('/api/incidents?resolved=false')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => setIncidents(data))
      .catch((err) => {
        console.error('Fetch error:', err)
      })
  }, [])

  const handleResolve = async (id) => {
    setIncidents((prev) => prev.filter((i) => i.id !== id))
    await fetch(`/api/incidents/${id}`, { method: 'PATCH' })
  }

  return (
    <div className="w-1/3 p-6 bg-[#0e2332] border-l border-gray-800 overflow-y-auto h-[calc(100vh-64px)]">
      <div className="text-lg font-semibold mb-4">🚨 {incidents.length} Unresolved Incidents</div>
      {incidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} onResolve={handleResolve} />
      ))}
    </div>
  )
}
