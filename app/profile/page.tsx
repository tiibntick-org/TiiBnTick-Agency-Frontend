'use client'

import { useState } from 'react'
import {
  Building2, Phone, Mail, MapPin, Settings, Users, Truck,
  MapPinned, CheckCircle2, Calendar, Hash, Globe, Edit3
} from 'lucide-react'
import { mockAgency, mockBranches, mockDeliverers, mockVehicles, mockHubs } from '@/lib/mock-data'
import EditAgencyForm from '@/components/forms/EditAgencyForm'

function InfoRow({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="w-7 h-7 rounded-md bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={13} className="text-gray-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-sm text-gray-800 mt-0.5">{value}</p>
      </div>
    </div>
  )
}

function SettingRow({ label, value, sub }: { label: string; value: string | boolean; sub?: string }) {
  const isBoolean = typeof value === 'boolean'
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      {isBoolean ? (
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${value ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${value ? 'bg-emerald-500' : 'bg-gray-400'}`} />
          {value ? 'Activé' : 'Désactivé'}
        </div>
      ) : (
        <span className="text-sm font-semibold text-gray-900">{value}</span>
      )}
    </div>
  )
}

export default function ProfilePage() {
  const [editFormOpen, setEditFormOpen] = useState(false)
  const activeDeliverers = mockDeliverers.filter(d => d.status !== 'INACTIVE' && d.status !== 'SUSPENDED').length
  const availableVehicles = mockVehicles.filter(v => v.status === 'AVAILABLE').length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Profil Agence</h1>
          <p className="text-sm text-gray-500 mt-0.5">Informations et paramètres de l&apos;agence</p>
        </div>
        <button
          onClick={() => setEditFormOpen(true)}
          className="inline-flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Edit3 size={14} />
          Modifier
        </button>
      </div>

      {/* Agency identity card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
            <Building2 size={28} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">{mockAgency.name}</h2>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">
                <CheckCircle2 size={12} />
                Active
              </span>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-medium">
                {mockAgency.type === 'ENTERPRISE' ? 'Entreprise' : mockAgency.type}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{mockAgency.legalName}</p>
            <p className="text-xs text-gray-400 mt-0.5">{mockAgency.id}</p>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-6 grid grid-cols-4 gap-4 pt-6 border-t border-gray-100">
          {[
            { label: 'Antennes', value: mockBranches.filter(b => b.status === 'OPEN').length, icon: MapPinned, suffix: `/ ${mockBranches.length}` },
            { label: 'Livreurs actifs', value: activeDeliverers, icon: Users, suffix: `/ ${mockDeliverers.length}` },
            { label: 'Véhicules dispo.', value: availableVehicles, icon: Truck, suffix: `/ ${mockVehicles.filter(v => v.status !== 'RETIRED').length}` },
            { label: 'Hubs relais', value: mockHubs.filter(h => h.status === 'OPEN' || h.status === 'FULL').length, icon: MapPin, suffix: `/ ${mockHubs.length}` },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mx-auto mb-2">
                <s.icon size={16} className="text-gray-400" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {s.value}
                <span className="text-sm font-normal text-gray-400">{s.suffix}</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Contact & Identity */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Informations légales & Contact</h3>
          <div>
            <InfoRow label="Raison sociale" value={mockAgency.legalName} icon={Building2} />
            <InfoRow label="N° RCCM" value={mockAgency.registrationNumber} icon={Hash} />
            <InfoRow label="Adresse du siège" value={`${mockAgency.address}, ${mockAgency.city}`} icon={MapPin} />
            <InfoRow label="Pays" value={mockAgency.country} icon={Globe} />
            <InfoRow label="Téléphone" value={mockAgency.phone} icon={Phone} />
            <InfoRow label="Email" value={mockAgency.email} icon={Mail} />
            <InfoRow
              label="Date de création"
              value={new Date(mockAgency.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              icon={Calendar}
            />
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Paramètres opérationnels</h3>
            <button onClick={() => setEditFormOpen(true)} className="text-xs text-orange-500 hover:text-orange-600 font-medium">Modifier</button>
          </div>
          <div>
            <SettingRow
              label="Devise par défaut"
              value={mockAgency.defaultCurrency}
              sub="Utilisée pour toutes les transactions"
            />
            <SettingRow
              label="Auto-assignation des missions"
              value={mockAgency.autoAssignMissions}
              sub="Assigner automatiquement les livreurs disponibles"
            />
            <SettingRow
              label="Association freelancer"
              value={mockAgency.allowFreelancerAssociation}
              sub="Autoriser l'association avec des freelancers TiiBnTick"
            />
            <SettingRow
              label="Max freelancers associés"
              value={`${mockAgency.maxAssociatedFreelancers} freelancers`}
              sub="Limite simultanée d'associations actives"
            />
            <SettingRow
              label="Rétention hub (délai)"
              value={`${mockAgency.hubRetentionDelayHours}h (${mockAgency.hubRetentionDelayHours / 24} jours)`}
              sub="Durée max avant retour agence"
            />
          </div>
        </div>
      </div>

      {/* Branches summary */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Antennes de l&apos;agence</h3>
          <a href="/branches" className="text-xs text-orange-500 hover:text-orange-600 font-medium">Gérer les antennes</a>
        </div>
        <div className="divide-y divide-gray-50">
          {mockBranches.map(branch => (
            <div key={branch.id} className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${branch.status === 'OPEN' ? 'bg-emerald-500' : 'bg-orange-400'}`} />
                <div>
                  <span className="text-sm text-gray-800">{branch.name}</span>
                  {branch.isHeadquarters && (
                    <span className="ml-2 text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-medium">Siège</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{branch.deliverersCount} livreur{branch.deliverersCount > 1 ? 's' : ''}</span>
                <span>{branch.status === 'OPEN' ? 'Ouverte' : 'Fermée temp.'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EditAgencyForm open={editFormOpen} onClose={() => setEditFormOpen(false)} />
    </div>
  )
}
