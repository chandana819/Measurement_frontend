import React from 'react'

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>
      <div className="relative z-50 w-full max-w-lg mx-4">
        <div className="bg-white rounded-lg shadow p-4">{children}</div>
      </div>
    </div>
  )
}
