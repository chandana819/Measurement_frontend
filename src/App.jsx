import React, { useState } from 'react'
import MeasurementSettings from './components/MeasurementSettings'
import sampleProfiles from './data/sampleProfiles'

export default function App() {
  const [profiles, setProfiles] = useState(sampleProfiles)

  const addProfile = (profile) => {
    setProfiles((p) => [{ id: Date.now().toString(), ...profile }, ...p])
  }

  const updateProfile = (id, updates) => {
    setProfiles((p) => p.map((item) => (item.id === id ? { ...item, ...updates } : item)))
  }

  const deleteProfile = (id) => {
    setProfiles((p) => p.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <MeasurementSettings
          profiles={profiles}
          onAdd={addProfile}
          onUpdate={updateProfile}
          onDelete={deleteProfile}
        />
      </div>
    </div>
  )
}
