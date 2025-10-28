import React from 'react'
import ProfileItem from './ProfileItem'

export default function ProfileList({ profiles, onEdit, onRequestDelete }) {
  return (
    <div className="space-y-4">
      {profiles.map((p) => (
        <div key={p.id} className="flex items-center justify-between">
          <ProfileItem profile={p} onEdit={() => onEdit(p)} onDelete={() => onRequestDelete(p)} />
        </div>
      ))}
    </div>
  )
}
