import React from 'react'

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>

      {/* content container: full width on small screens, constrained on larger */}
      <div className="relative z-50 w-full max-w-lg mx-auto h-full sm:h-auto">
        <div className="bg-white rounded-lg shadow p-4 h-full sm:h-auto overflow-auto">{children}</div>
      </div>
    </div>
  )
}
