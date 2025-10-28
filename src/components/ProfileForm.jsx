import React, { useState } from 'react'

export default function ProfileForm({ initial, onCancel, onSave }) {
  const [name, setName] = useState(initial?.name || '')
  const [gender, setGender] = useState(initial?.gender || 'male')
  // Start height empty so placeholder is shown; if editing an existing profile
  // use its value instead.
  const [height, setHeight] = useState(initial?.height || '')
  const [clothingSize, setClothingSize] = useState(initial?.clothingSize || 'Small')
  const [bodySize, setBodySize] = useState(initial?.bodySize || '')
  const [note, setNote] = useState(initial?.note || '')

  const submit = (e) => {
    e.preventDefault()
    onSave({ name, gender, height, clothingSize, bodySize, note })
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h3 className="text-xl font-semibold">{initial ? 'Edit Measurement' : 'Add new Measurement'}</h3>
      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div>
        <label className="block text-sm font-medium mb-1">Measurement Profile Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Enter profile name (e.g., Dad)" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Gender</label>
        <div className="flex gap-2">
          <button type="button" onClick={()=>setGender('male')} className={`px-3 py-1 rounded ${gender==='male' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♂ Male</button>
          <button type="button" onClick={()=>setGender('female')} className={`px-3 py-1 rounded ${gender==='female' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♀ Female</button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Height</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. 5'10 or 178 cm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Clothing Size</label>
        <select value={clothingSize} onChange={(e)=>setClothingSize(e.target.value)} className="w-full border rounded px-3 py-2">
          <option value="XS">XS</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Body Size</label>
        <input value={bodySize} onChange={(e)=>setBodySize(e.target.value)} placeholder="Chest/Bust, Arm, Waist, Hips, Thighs" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Custom Field <span className="text-gray-400 text-sm">(optional)</span></label>
        <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="w-full border rounded px-3 py-2 h-24" placeholder="Write something..."></textarea>
      </div>

      <div className="pt-4">
        <button type="submit" className="w-full btn-red">Save Measurement</button>
        <button type="button" onClick={onCancel} className="w-full mt-3 border rounded-full px-4 py-2">Cancel</button>
      </div>
    </form>
  )
}
