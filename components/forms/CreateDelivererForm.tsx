'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Drawer from './Drawer'
import { mockBranches } from '@/lib/mock-data'

const cls = {
  input: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition',
  select: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white transition cursor-pointer',
  label: 'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5',
  section: 'pt-5 border-t border-gray-100 space-y-4 first:border-0 first:pt-0',
  sectionTitle: 'text-sm font-semibold text-gray-800 mb-3',
}

interface Props { open: boolean; onClose: () => void }

const initialState = {
  fullName: '', phone: '', email: '',
  type: 'PERMANENT', branchId: '', status: 'AVAILABLE',
}

export default function CreateDelivererForm({ open, onClose }: Props) {
  const [form, setForm] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      setTimeout(() => { setSuccess(false); setForm(initialState); onClose() }, 1200)
    }, 900)
  }

  const delivererTypes = [
    { value: 'PERMANENT', label: 'Permanent', desc: 'Employé à temps plein' },
    { value: 'PART_TIME', label: 'Temps partiel', desc: 'Employé à temps partiel' },
    { value: 'FREELANCER_ASSOCIATED', label: 'Freelancer', desc: 'Freelancer associé via TiiBnTick' },
  ]

  return (
    <Drawer open={open} onClose={onClose} title="Enregistrer un livreur" description="Nouveau livreur rattaché à l'agence">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* Identité */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Informations personnelles</p>
            <div>
              <label className={cls.label}>Nom complet <span className="text-orange-500">*</span></label>
              <input required type="text" value={form.fullName} onChange={e => update('fullName', e.target.value)}
                placeholder="ex: Bertrand Eloundou" className={cls.input} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={cls.label}>Téléphone <span className="text-orange-500">*</span></label>
                <input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                  placeholder="+237 6XX XX XX XX" className={cls.input} />
              </div>
              <div>
                <label className={cls.label}>Email</label>
                <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                  placeholder="prénom.nom@agence.cm" className={cls.input} />
              </div>
            </div>
          </div>

          {/* Type de livreur */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Type de contrat</p>
            <div className="space-y-2">
              {delivererTypes.map(t => (
                <label key={t.value}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    form.type === t.value ? 'border-orange-300 bg-orange-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input type="radio" name="type" value={t.value} checked={form.type === t.value}
                    onChange={e => update('type', e.target.value)} className="mt-0.5 accent-orange-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{t.label}</p>
                    <p className="text-xs text-gray-500">{t.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Affectation */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Affectation</p>
            <div>
              <label className={cls.label}>Antenne de rattachement</label>
              <select value={form.branchId} onChange={e => update('branchId', e.target.value)} className={cls.select}>
                <option value="">Sélectionner une antenne (optionnel)</option>
                {mockBranches.filter(b => b.status === 'OPEN').map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Note info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-600">
              Un contrat de travail pourra être créé séparément depuis l'onglet <strong>Contrats</strong> une fois le livreur enregistré.
            </p>
          </div>

        </div>

        <div className="flex-shrink-0 border-t border-gray-200 px-6 py-4 flex justify-end gap-3 bg-white">
          <button type="button" onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            Annuler
          </button>
          <button type="submit" disabled={submitting || success}
            className={`px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 min-w-36 justify-center ${success ? 'bg-emerald-500' : 'bg-orange-500 hover:bg-orange-600'} disabled:opacity-70`}>
            {submitting ? <><Loader2 size={14} className="animate-spin" /> Enregistrement...</>
              : success ? <><CheckCircle2 size={14} /> Enregistré !</>
              : 'Enregistrer'}
          </button>
        </div>
      </form>
    </Drawer>
  )
}
