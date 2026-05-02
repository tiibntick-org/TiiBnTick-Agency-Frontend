'use client'

import { useState } from 'react'
import { Eye, EyeOff, Loader2, Package, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (form.email === 'admin@rapidexpress.cm' && form.password === 'demo1234') {
        window.location.href = '/'
      } else {
        setError('Identifiants incorrects. Essayez admin@rapidexpress.cm / demo1234')
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-[480px] bg-gradient-to-br from-orange-500 to-orange-600 flex-col justify-between p-12 flex-shrink-0">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Package size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">TiiBnTick</p>
              <p className="text-orange-100 text-xs">Agency Platform</p>
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Gérez votre<br />agence de<br />livraison.
            </h1>
            <p className="text-orange-100 mt-4 text-sm leading-relaxed max-w-sm">
              Missions, livreurs, hubs relais, facturation — tout centralisé sur une seule plateforme.
              Tracé sur blockchain pour une confiance totale.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Missions gérées', value: '12 450+' },
            { label: 'Agences actives', value: '38' },
            { label: 'Taux de livraison', value: '96.4%' },
          ].map(s => (
            <div key={s.label} className="flex items-center justify-between border-t border-orange-400/40 pt-3">
              <span className="text-orange-100 text-sm">{s.label}</span>
              <span className="text-white font-bold">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <Package size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">TiiBnTick Agency</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Connexion antenne</h2>
            <p className="text-sm text-gray-500 mt-1">Accédez à votre espace de gestion agence</p>
          </div>

          {error && (
            <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                Email professionnel <span className="text-orange-500">*</span>
              </label>
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="contact@votre-agence.cm"
                className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mot de passe <span className="text-orange-500">*</span>
                </label>
                <button type="button" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                  Mot de passe oublié ?
                </button>
              </div>
              <div className="relative">
                <input
                  required
                  type={showPwd ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full h-11 px-3 pr-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setForm(p => ({ ...p, remember: !p.remember }))}
                className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${form.remember ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}
              >
                {form.remember && (
                  <svg viewBox="0 0 12 10" className="w-3 h-2.5 text-white" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-600">Se souvenir de moi sur cet appareil</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Connexion...</> : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">
              Pas encore d&apos;agence ?{' '}
              <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium">
                Créer votre agence
              </Link>
            </p>
          </div>

          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-lg p-3">
            <p className="text-xs text-orange-700 text-center">
              <strong>Démo :</strong> admin@rapidexpress.cm · demo1234
            </p>
          </div>

          <p className="text-center text-[11px] text-gray-400 mt-8">
            En vous connectant, vous acceptez les{' '}
            <span className="text-orange-500 cursor-pointer">CGU de TiiBnTick</span>{' '}
            et notre{' '}
            <span className="text-orange-500 cursor-pointer">Politique de confidentialité</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
