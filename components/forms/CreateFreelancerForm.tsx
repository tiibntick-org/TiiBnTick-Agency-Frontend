'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, UserPlus, Info } from 'lucide-react'
import Drawer from './Drawer'

const cls = {
  input: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition',
  label: 'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5',
  section: 'pt-5 border-t border-gray-100 space-y-4 first:border-0 first:pt-0',
  sectionTitle: 'text-sm font-semibold text-gray-800 mb-3',
}

interface Props { open: boolean; onClose: () => void }

const initialState = {
  freelancerName: '', phone: '', email: '',
  commissionRate: '10',
}

export default function CreateFreelancerForm({ open, onClose }: Props) {
  const [form, setForm] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mode, setMode] = useState<'search' | 'manual'>('search')
  const [searchQuery, setSearchQuery] = useState('')

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false); setSuccess(true)
      setTimeout(() => { setSuccess(false); setForm(initialState); onClose() }, 1200)
    }, 900)
  }

  const commissionPct = parseInt(form.commissionRate) || 0

  return (
    <Drawer open={open} onClose={onClose} title="Associer un freelancer" description="Associer un freelancer TiiBnTick pour renforts en pic de charge">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* Mode */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button type="button" onClick={() => setMode('search')}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === 'search' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
              Rechercher sur TiiBnTick
            </button>
            <button type="button" onClick={() => setMode('manual')}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === 'manual' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
              Saisie manuelle
            </button>
          </div>

          {mode === 'search' ? (
            <div className={cls.section}>
              <p className={cls.sectionTitle}>Recherche sur TiiBnTick Freelancer</p>
              <div>
                <label className={cls.label}>Nom ou numéro de téléphone</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un freelancer enregistré..."
                  className={cls.input}
                />
              </div>
              {searchQuery.length > 2 && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {[
                    { name: 'Éric Ndzana', phone: '+237 690 55 66 77', missions: 48, rating: 4.7 },
                    { name: 'Isabelle Tchoffo', phone: '+237 675 88 99 00', missions: 32, rating: 4.5 },
                  ].filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase())).map((f, i) => (
                    <button key={i} type="button"
                      onClick={() => { update('freelancerName', f.name); update('phone', f.phone); setMode('manual') }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-0 text-left">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-gray-600">
                          {f.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{f.name}</p>
                        <p className="text-xs text-gray-500">{f.phone} · {f.missions} missions · ★ {f.rating}</p>
                      </div>
                      <UserPlus size={15} className="text-orange-400 flex-shrink-0" />
                    </button>
                  ))}
                  {[
                    { name: 'Éric Ndzana' },
                    { name: 'Isabelle Tchoffo' },
                  ].filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <div className="px-4 py-6 text-center">
                      <p className="text-sm text-gray-400">Aucun freelancer trouvé</p>
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-lg p-3">
                <Info size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">La recherche interroge le module TiiBnTick Freelancer. Seuls les freelancers disponibles et vérifiés s'affichent.</p>
              </div>
            </div>
          ) : (
            <>
              <div className={cls.section}>
                <p className={cls.sectionTitle}>Informations du freelancer</p>
                <div>
                  <label className={cls.label}>Nom complet <span className="text-orange-500">*</span></label>
                  <input required type="text" value={form.freelancerName} onChange={e => update('freelancerName', e.target.value)}
                    placeholder="ex: Éric Ndzana" className={cls.input} />
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
                      placeholder="email@domain.cm" className={cls.input} />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Commission */}
          <div className={cls.section}>
            <p className={cls.sectionTitle}>Commission</p>
            <div>
              <label className={cls.label}>Taux de commission (%) <span className="text-orange-500">*</span></label>
              <div className="flex items-center gap-3">
                <input required type="range" min="5" max="30" step="0.5"
                  value={form.commissionRate}
                  onChange={e => update('commissionRate', e.target.value)}
                  className="flex-1 accent-orange-500" />
                <div className="w-16 h-10 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-orange-600">{commissionPct}%</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Recommandé : 8% – 15%. Commission appliquée sur chaque livraison effectuée.</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
            <p className="text-xs text-orange-700">L'association débutera en statut <strong>EN ATTENTE</strong> jusqu'à confirmation du freelancer dans son application TiiBnTick.</p>
          </div>

        </div>

        <div className="flex-shrink-0 border-t border-gray-200 px-6 py-4 flex justify-end gap-3 bg-white">
          <button type="button" onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            Annuler
          </button>
          <button type="submit" disabled={submitting || success}
            className={`px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 min-w-36 justify-center ${success ? 'bg-emerald-500' : 'bg-orange-500 hover:bg-orange-600'} disabled:opacity-70`}>
            {submitting ? <><Loader2 size={14} className="animate-spin" /> Association...</>
              : success ? <><CheckCircle2 size={14} /> Associé !</>
              : 'Envoyer la demande'}
          </button>
        </div>
      </form>
    </Drawer>
  )
}
