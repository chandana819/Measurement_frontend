import React from 'react'
import ProfileItem from './ProfileItem'

export default function ProfileList({ profiles, onEdit, onRequestDelete }) {
  return (
    <div>
      {profiles.map((p) => (
        <div key={p.id} className="flex items-center justify-between mb-4">
          <ProfileItem profile={p} onEdit={() => onEdit(p)} onDelete={() => onRequestDelete(p)} />
        </div>
      ))}
    </div>
  )
}
