import React from 'react'

function Avatar({ name }) {
  const initials = name ? name.split(' ').map(s => s[0]).slice(0,2).join('') : 'JD'
  return (
    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
      {initials}
    </div>
  )
}

export default function ProfileItem({ profile, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <Avatar name={profile.name} />
      <div className="flex-1">
        <div className="font-medium">{profile.name} <span className="text-gray-400 text-sm">{profile.gender === 'male' ? '♂' : '♀'}</span></div>
        <div className="text-sm text-gray-500">(optional) 5 profiles can be saved</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onEdit} className="p-2 rounded-full hover:bg-gray-100">
          ✎
        </button>
        <button onClick={onDelete} className="p-2 rounded-full hover:bg-gray-100 text-red-500">
          🗑
        </button>
      </div>
    </div>
  )
}
