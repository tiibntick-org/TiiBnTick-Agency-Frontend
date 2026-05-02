'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Drawer from './Drawer'
import { mockAgency } from '@/lib/mock-data'

const cls = {
  input: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition',
  select: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white transition cursor-pointer',
  label: 'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5',
  section: 'pt-5 border-t border-gray-100 space-y-4 first:border-0 first:pt-0',
  sectionTitle: 'text-sm font-semibold text-gray-800 mb-3',
}

interface Props { open: boolean; onClose: () => void }

export default function EditAgencyForm({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: mockAgency.name,
    legalName: mockAgency.legalName,
    registrationNumber: mockAgency.registrationNumber,
    phone: mockAgency.phone,
    email: mockAgency.email,
    address: mockAgency.address,
    city: mockAgency.city,
    country: mockAgency.country,
    defaultCurrency: mockAgency.defaultCurrency,
    autoAssignMissions: mockAgency.autoAssignMissions,
    allowFreelancerAssociation: mockAgency.allowFreelancerAssociation,
    maxAssociatedFreelancers: String(mockAgency.maxAssociatedFreelancers),
    hubRetentionDelayHours: String(mockAgency.hubRetentionDelayHours),
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const update = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false); setSuccess(true)
      setTimeout(() => { setSuccess(false); onClose() }, 1200)
    }, 900)
  }

  return (
    <Drawer open={open} onClose={onClose} title="Modifier le profil agence" description="Mettre à jour les informations de Rapid Express Douala">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* Identité */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Identité & Légal</p>
            <div>
              <label className={cls.label}>Nom commercial <span className="text-orange-500">*</span></label>
              <input required type="text" value={form.name} onChange={e => update('name', e.target.value)}
                className={cls.input} />
            </div>
            <div>
              <label className={cls.label}>Raison sociale <span className="text-orange-500">*</span></label>
              <input required type="text" value={form.legalName} onChange={e => update('legalName', e.target.value)}
                className={cls.input} />
            </div>
            <div>
              <label className={cls.label}>N° RCCM</label>
              <input type="text" value={form.registrationNumber} onChange={e => update('registrationNumber', e.target.value)}
                placeholder="RC/DLA/XXXX/B/XXXX" className={cls.input} />
            </div>
          </div>

          {/* Contact */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Contact</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={cls.label}>Téléphone <span className="text-orange-500">*</span></label>
                <input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                  placeholder="+237 2XX XX XX XX" className={cls.input} />
              </div>
              <div>
                <label className={cls.label}>Email <span className="text-orange-500">*</span></label>
                <input required type="email" value={form.email} onChange={e => update('email', e.target.value)}
                  className={cls.input} />
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Localisation</p>
            <div>
              <label className={cls.label}>Adresse du siège <span className="text-orange-500">*</span></label>
              <input required type="text" value={form.address} onChange={e => update('address', e.target.value)}
                className={cls.input} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={cls.label}>Ville <span className="text-orange-500">*</span></label>
                <input required type="text" value={form.city} onChange={e => update('city', e.target.value)}
                  className={cls.input} />
              </div>
              <div>
                <label className={cls.label}>Pays <span className="text-orange-500">*</span></label>
                <input required type="text" value={form.country} onChange={e => update('country', e.target.value)}
                  className={cls.input} />
              </div>
            </div>
          </div>

          {/* Paramètres opérationnels */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Paramètres opérationnels</p>
            <div>
              <label className={cls.label}>Devise par défaut</label>
              <select value={form.defaultCurrency} onChange={e => update('defaultCurrency', e.target.value)} className={`${cls.select} w-40`}>
                <option value="XAF">XAF — Franc CFA</option>
                <option value="EUR">EUR — Euro</option>
                <option value="USD">USD — Dollar</option>
                <option value="NGN">NGN — Naira</option>
              </select>
            </div>

            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => update('autoAssignMissions', !form.autoAssignMissions)}>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${form.autoAssignMissions ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
                {form.autoAssignMissions && <CheckCircle2 size={13} className="text-white" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Auto-assignation des missions</p>
                <p className="text-xs text-gray-500">Assigner automatiquement les livreurs disponibles</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => update('allowFreelancerAssociation', !form.allowFreelancerAssociation)}>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${form.allowFreelancerAssociation ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
                {form.allowFreelancerAssociation && <CheckCircle2 size={13} className="text-white" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Association de freelancers</p>
                <p className="text-xs text-gray-500">Autoriser l&apos;association avec des freelancers TiiBnTick</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={cls.label}>Max freelancers associés</label>
                <input type="number" min="0" max="100" value={form.maxAssociatedFreelancers}
                  onChange={e => update('maxAssociatedFreelancers', e.target.value)} className={cls.input} />
              </div>
              <div>
                <label className={cls.label}>Rétention hub (heures)</label>
                <input type="number" min="24" step="24" value={form.hubRetentionDelayHours}
                  onChange={e => update('hubRetentionDelayHours', e.target.value)} className={cls.input} />
                <p className="text-xs text-gray-400 mt-1">
                  = {Math.round(Number(form.hubRetentionDelayHours) / 24)} jour{Number(form.hubRetentionDelayHours) / 24 > 1 ? 's' : ''} avant retour agence
                </p>
              </div>
            </div>
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
