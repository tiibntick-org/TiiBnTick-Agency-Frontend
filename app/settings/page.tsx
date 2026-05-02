'use client'

import { useState } from 'react'
import { Bell, Shield, Globe, Zap, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${value ? 'bg-orange-500' : 'bg-gray-200 dark:bg-slate-600'}`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${value ? 'translate-x-4' : 'translate-x-0'}`}
      />
    </button>
  )
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  const [notifSettings, setNotifSettings] = useState({
    sms: true, email: true, push: true, whatsapp: false,
  })
  const [autoSettings, setAutoSettings] = useState({
    autoAssign: true, reroute: false, hubAlerts: true,
  })
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: true, auditLog: true,
  })

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Paramètres</h1>
        <p className="text-sm text-gray-500 mt-0.5">Configuration système de l&apos;agence</p>
      </div>

      {/* Dark mode section */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
            {theme === 'dark' ? <Moon size={17} className="text-orange-500" /> : <Sun size={17} className="text-orange-500" />}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Apparence</h3>
            <p className="text-xs text-gray-400">Choisir le thème d&apos;affichage de la plateforme</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light' as const, label: 'Clair', icon: Sun, desc: 'Interface lumineuse' },
            { id: 'dark'  as const, label: 'Sombre', icon: Moon, desc: 'Bleu nuit — reposant' },
            { id: 'system' as const, label: 'Système', icon: Monitor, desc: 'Suit votre OS' },
          ].map(opt => {
            const active = opt.id === 'system' ? false : theme === opt.id
            return (
              <button
                key={opt.id}
                onClick={() => {
                  if (opt.id === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                    setTheme(prefersDark ? 'dark' : 'light')
                  } else {
                    setTheme(opt.id)
                  }
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  active ? 'border-orange-400 bg-orange-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <opt.icon size={20} className={active ? 'text-orange-500' : 'text-gray-400'} />
                <div className="text-center">
                  <p className={`text-sm font-semibold ${active ? 'text-orange-700' : 'text-gray-700'}`}>{opt.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{opt.desc}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
              <Bell size={17} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
              <p className="text-xs text-gray-400">Alertes SMS, email, push et WhatsApp</p>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { key: 'sms' as const, label: 'SMS' },
              { key: 'email' as const, label: 'Email' },
              { key: 'push' as const, label: 'Push App' },
              { key: 'whatsapp' as const, label: 'WhatsApp' },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-700">{item.label}</span>
                <Toggle value={notifSettings[item.key]} onChange={v => setNotifSettings(p => ({ ...p, [item.key]: v }))} />
              </div>
            ))}
          </div>
        </div>

        {/* Automatisation */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
              <Zap size={17} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Automatisation</h3>
              <p className="text-xs text-gray-400">Règles d&apos;assignation et dispatch automatique</p>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { key: 'autoAssign' as const, label: 'Auto-assignation des missions' },
              { key: 'reroute' as const, label: 'Reroutage automatique' },
              { key: 'hubAlerts' as const, label: 'Alertes hub plein' },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-700">{item.label}</span>
                <Toggle value={autoSettings[item.key]} onChange={v => setAutoSettings(p => ({ ...p, [item.key]: v }))} />
              </div>
            ))}
          </div>
        </div>

        {/* Sécurité */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
              <Shield size={17} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Sécurité & Accès</h3>
              <p className="text-xs text-gray-400">Rôles, permissions et authentification</p>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { key: 'twoFactor' as const, label: 'Authentification 2FA' },
              { key: 'auditLog' as const, label: "Journal d'audit" },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-700">{item.label}</span>
                <Toggle value={securitySettings[item.key]} onChange={v => setSecuritySettings(p => ({ ...p, [item.key]: v }))} />
              </div>
            ))}
          </div>
        </div>

        {/* Régionalisation */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
              <Globe size={17} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Régionalisation</h3>
              <p className="text-xs text-gray-400">Langue, devise et fuseau horaire</p>
            </div>
          </div>
          <div className="space-y-3 pt-1">
            {[
              { label: 'Langue', value: 'Français (FR)' },
              { label: 'Devise', value: 'XAF — Franc CFA' },
              { label: 'Fuseau horaire', value: 'Africa/Douala (UTC+1)' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
            <p className="text-xs text-gray-400 pt-1">Modification régionale disponible sur demande au support TiiBnTick.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
