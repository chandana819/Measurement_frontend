import React, { useState } from 'react'
import ProfileList from './ProfileList'
import ProfileForm from './ProfileForm'
import Modal from './Modal'

export default function MeasurementSettings({ profiles, onAdd, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [confirmationHtml, setConfirmationHtml] = useState(null)

  const handleAdd = () => {
    setEditing(null)
    setShowForm(true)
  }

  const handleEdit = (profile) => {
    setEditing(profile)
    setShowForm(true)
  }

  const handleSave = (data) => {
    if (editing) {
      onUpdate(editing.id, data)
    } else {
      onAdd(data)
    }
    setShowForm(false)
    setEditing(null)

    // Build a small HTML confirmation that will be displayed inside an iframe
    const profile = editing ? { id: editing.id, ...data } : { id: Date.now().toString(), ...data }
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Saved</title>
      <style>body{font-family:Arial,Helvetica,sans-serif;background:#f7fafc;color:#111;padding:24px} .card{background:#fff;border-radius:8px;padding:20px;max-width:520px;margin:40px auto;box-shadow:0 4px 14px rgba(0,0,0,0.08)} h2{color:#111;margin:0 0 8px} p{color:#4b5563} table{width:100%;margin-top:12px;border-collapse:collapse} td{padding:8px;border-top:1px solid #eee}</style>
      </head><body>
      <div class="card">
        <h2>Measurement Settings</h2>
        <p>Your profile has been saved successfully</p>
        <table>
          <tbody>
            <tr><td><strong>Name</strong></td><td>${escapeHtml(profile.name)}</td></tr>
            <tr><td><strong>Gender</strong></td><td>${escapeHtml(profile.gender)}</td></tr>
            <tr><td><strong>Height</strong></td><td>${escapeHtml(profile.height)}</td></tr>
            <tr><td><strong>Clothing Size</strong></td><td>${escapeHtml(profile.clothingSize)}</td></tr>
            <tr><td><strong>Body Size</strong></td><td>${escapeHtml(profile.bodySize)}</td></tr>
            <tr><td><strong>Note</strong></td><td>${escapeHtml(profile.note)}</td></tr>
          </tbody>
        </table>
      </div>
      </body></html>`

    setConfirmationHtml(html)
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left column: full width on small, ~5/12 on md+ */}
      <div className="col-span-12 md:col-span-5">
        <h2 className="text-2xl font-semibold mb-6">Measurement Settings</h2>
        <ProfileList
          profiles={profiles}
          onEdit={handleEdit}
          onRequestDelete={(p) => setConfirmDelete(p)}
        />

        <button onClick={handleAdd} className="mt-6 w-56 h-12 border-2 border-red-300 text-red-600 rounded-full flex items-center justify-center">
          + Add New
        </button>
      </div>

  {/* Right column: full width on small, ~7/12 on md+ */}
  <div className="col-span-12 md:col-span-7">
        {/* Right panel: form shown as a card/modal */}
        {showForm ? (
          <div className="card p-6">
            <ProfileForm initial={editing} onCancel={() => setShowForm(false)} onSave={handleSave} />
          </div>
        ) : (
          // Right side should be empty when nothing is selected/being added
          <div className="card p-6 min-h-[220px] bg-white/0 border-0 shadow-none" />
        )}
      </div>

      {/* Delete confirmation modal */}
  {confirmDelete && (
        <Modal onClose={() => setConfirmDelete(null)}>
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-3">Are you sure you want to delete "{confirmDelete.name}" measurement profile?</h3>
            <p className="text-sm text-gray-500 mb-6">All your data will be permanently removed kindly confirm</p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 rounded-full border" onClick={() => setConfirmDelete(null)}>Cancel</button>
              <button className="px-6 py-2 rounded-full border border-red-400 text-red-600" onClick={() => { onDelete(confirmDelete.id); setConfirmDelete(null); }}>Delete</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Confirmation iframe modal shown after save */}
      {confirmationHtml && (
        <Modal onClose={() => setConfirmationHtml(null)}>
          <div className="p-4">
            {/* iframe taller on md screens for better readability */}
            <iframe title="saved-confirmation" srcDoc={confirmationHtml} className="w-full h-72 md:h-96 border rounded" />
            <div className="mt-4 text-center">
              <button onClick={() => setConfirmationHtml(null)} className="btn-red">Back To Settings</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

// small helper to avoid injection in the iframe html
function escapeHtml(str){
  if(!str && str !== 0) return ''
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}
