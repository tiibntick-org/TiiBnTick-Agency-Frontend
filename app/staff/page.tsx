'use client'

import { useState } from 'react'
import {
  Users, Plus, Star, FileText, DollarSign, UserPlus,
} from 'lucide-react'
import { mockDeliverers, mockContracts, mockCommissions, mockFreelancers } from '@/lib/mock-data'
import type { DelivererStatus, ContractStatus, CommissionStatus, AssociationStatus, Contract, CommissionRecord, FreelancerAssociation } from '@/lib/types'
import CreateDelivererForm from '@/components/forms/CreateDelivererForm'
import CreateContractForm from '@/components/forms/CreateContractForm'
import CreateFreelancerForm from '@/components/forms/CreateFreelancerForm'
import ContractDetailDrawer from '@/components/ContractDetailDrawer'
import CommissionDetailDrawer from '@/components/CommissionDetailDrawer'
import FreelancerDetailDrawer from '@/components/FreelancerDetailDrawer'

// ── Badges ─────────────────────────────────────────────────
function DelivererStatusDot({ status }: { status: DelivererStatus }) {
  const map = {
    AVAILABLE: { dot: 'bg-emerald-500', label: 'Disponible' },
    ON_MISSION: { dot: 'bg-blue-500', label: 'En mission' },
    OFFLINE: { dot: 'bg-gray-300', label: 'Hors ligne' },
    SUSPENDED: { dot: 'bg-red-500', label: 'Suspendu' },
    INACTIVE: { dot: 'bg-gray-200', label: 'Inactif' },
  }
  const cfg = map[status]
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
      <span className="text-xs text-gray-600">{cfg.label}</span>
    </div>
  )
}

function ContractStatusBadge({ status }: { status: ContractStatus }) {
  const map = {
    ACTIVE: 'bg-emerald-50 text-emerald-700',
    SIGNED: 'bg-blue-50 text-blue-700',
    DRAFT: 'bg-gray-100 text-gray-600',
    TERMINATED: 'bg-red-50 text-red-700',
    EXPIRED: 'bg-gray-100 text-gray-500',
  }
  const labels = { ACTIVE: 'Actif', SIGNED: 'Signé', DRAFT: 'Brouillon', TERMINATED: 'Résilié', EXPIRED: 'Expiré' }
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}>{labels[status]}</span>
}

function CommissionStatusBadge({ status }: { status: CommissionStatus }) {
  const map = {
    CALCULATED: 'bg-gray-100 text-gray-600',
    VALIDATED: 'bg-blue-50 text-blue-700',
    PAID: 'bg-emerald-50 text-emerald-700',
    DISPUTED: 'bg-orange-50 text-orange-700',
  }
  const labels = { CALCULATED: 'Calculée', VALIDATED: 'Validée', PAID: 'Payée', DISPUTED: 'Litige' }
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}>{labels[status]}</span>
}

function AssociationStatusBadge({ status }: { status: AssociationStatus }) {
  const map = {
    ACTIVE: 'bg-emerald-50 text-emerald-700',
    PENDING: 'bg-orange-50 text-orange-700',
    PAUSED: 'bg-yellow-50 text-yellow-700',
    TERMINATED: 'bg-gray-100 text-gray-500',
  }
  const labels = { ACTIVE: 'Active', PENDING: 'En attente', PAUSED: 'Pausée', TERMINATED: 'Terminée' }
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}>{labels[status]}</span>
}

type Tab = 'deliverers' | 'contracts' | 'commissions' | 'freelancers'

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<Tab>('deliverers')
  const [delivererFormOpen, setDelivererFormOpen] = useState(false)
  const [contractFormOpen, setContractFormOpen] = useState(false)
  const [freelancerFormOpen, setFreelancerFormOpen] = useState(false)

  const [selectedContract, setSelectedContract] = useState<Contract | null>(null)
  const [contractDetailOpen, setContractDetailOpen] = useState(false)
  const [selectedCommission, setSelectedCommission] = useState<CommissionRecord | null>(null)
  const [commissionDetailOpen, setCommissionDetailOpen] = useState(false)
  const [selectedFreelancer, setSelectedFreelancer] = useState<FreelancerAssociation | null>(null)
  const [freelancerDetailOpen, setFreelancerDetailOpen] = useState(false)

  const tabs: { id: Tab; label: string; count: number; icon: React.ElementType }[] = [
    { id: 'deliverers', label: 'Livreurs', count: mockDeliverers.length, icon: Users },
    { id: 'contracts', label: 'Contrats', count: mockContracts.length, icon: FileText },
    { id: 'commissions', label: 'Commissions', count: mockCommissions.length, icon: DollarSign },
    { id: 'freelancers', label: 'Freelancers Associés', count: mockFreelancers.length, icon: UserPlus },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Personnel</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {mockDeliverers.length} livreurs · {mockContracts.filter(c => c.status === 'ACTIVE').length} contrats actifs
          </p>
        </div>
        {activeTab === 'deliverers' && (
          <button onClick={() => setDelivererFormOpen(true)} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={15} />
            Enregistrer un livreur
          </button>
        )}
        {activeTab === 'contracts' && (
          <button onClick={() => setContractFormOpen(true)} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={15} />
            Nouveau contrat
          </button>
        )}
        {activeTab === 'freelancers' && (
          <button onClick={() => setFreelancerFormOpen(true)} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={15} />
            Associer un freelancer
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
              <span className={`px-1.5 py-0.5 rounded text-xs ${
                activeTab === tab.id ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      {activeTab === 'deliverers' && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-left">
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Livreur</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Antenne</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Note</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Missions</th>
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Véhicule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockDeliverers.map(d => (
                <tr key={d.id} className="table-row-hover cursor-pointer group">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-700 text-xs font-semibold">
                          {d.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{d.fullName}</p>
                        <p className="text-xs text-gray-400">{d.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-600">
                      {d.type === 'PERMANENT' ? 'Permanent' : d.type === 'PART_TIME' ? 'Partiel' : 'Freelancer'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-xs text-gray-600">{d.branchName ?? '—'}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <DelivererStatusDot status={d.status} />
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-orange-400 fill-orange-400" />
                      <span className="text-sm font-medium text-gray-700">{d.rating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-sm text-gray-700">{d.totalMissions}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    {d.vehiclePlate ? (
                      <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">{d.vehiclePlate}</span>
                    ) : (
                      <span className="text-xs text-gray-400 italic">Aucun</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'contracts' && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-left">
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Livreur</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Rémunération</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Taux</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Début</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Fin</th>
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockContracts.map(c => (
                <tr
                  key={c.id}
                  onClick={() => { setSelectedContract(c); setContractDetailOpen(true) }}
                  className="table-row-hover cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-mono text-gray-500">{c.id}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-sm font-medium text-gray-900">{c.delivererName}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-600">
                      {c.type === 'PERMANENT_EMPLOYEE' ? 'Employé Permanent' :
                       c.type === 'PART_TIME_EMPLOYEE' ? 'Temps Partiel' :
                       c.type === 'FREELANCER_AGREEMENT' ? 'Prestation' : 'Stage'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-600">
                      {c.remunerationType === 'MONTHLY_SALARY' ? 'Salaire mensuel' :
                       c.remunerationType === 'FIXED_PER_DELIVERY' ? 'Fixe/livraison' :
                       c.remunerationType === 'PERCENTAGE_PER_DELIVERY' ? '% par livraison' : 'Mixte + prime'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-sm font-semibold text-gray-900">
                      {c.rate.toLocaleString('fr-FR')} {c.currency}
                      <span className="text-xs font-normal text-gray-400 ml-0.5">
                        {c.remunerationType === 'MONTHLY_SALARY' ? '/mois' : '/livr.'}
                      </span>
                    </p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-600">{new Date(c.startDate).toLocaleDateString('fr-FR')}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-500">{c.endDate ? new Date(c.endDate).toLocaleDateString('fr-FR') : <span className="text-gray-300">Indéterminée</span>}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <ContractStatusBadge status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'commissions' && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Registre des commissions</h2>
              <p className="text-xs text-gray-400 mt-0.5">{mockCommissions.length} enregistrements · Cliquer pour détails</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Total versé :</span>
              <span className="text-sm font-semibold text-emerald-600">
                {mockCommissions.filter(c => c.status === 'PAID').reduce((s, c) => s + c.amount, 0).toLocaleString('fr-FR')} XAF
              </span>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-left">
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Livreur</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Mission</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Calculée le</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Payée le</th>
                <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockCommissions.map(c => (
                <tr
                  key={c.id}
                  onClick={() => { setSelectedCommission(c); setCommissionDetailOpen(true) }}
                  className="table-row-hover cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <p className="text-sm font-medium text-gray-900">{c.delivererName}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-xs font-mono text-gray-600">{c.manifestNumber}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-sm font-semibold text-gray-900">{c.amount.toLocaleString('fr-FR')} {c.currency}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-500">
                      {new Date(c.calculatedAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs text-gray-500">
                      {c.paidAt ? new Date(c.paidAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : <span className="text-gray-300">—</span>}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <CommissionStatusBadge status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'freelancers' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Actifs', count: mockFreelancers.filter(f => f.status === 'ACTIVE').length, color: 'text-emerald-600' },
              { label: 'En attente', count: mockFreelancers.filter(f => f.status === 'PENDING').length, color: 'text-orange-600' },
              { label: 'Terminés', count: mockFreelancers.filter(f => f.status === 'TERMINATED').length, color: 'text-gray-400' },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-left">
                  <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Freelancer</th>
                  <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Commission</th>
                  <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Missions assignées</th>
                  <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Associé le</th>
                  <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {mockFreelancers.map(f => (
                  <tr
                    key={f.id}
                    onClick={() => { setSelectedFreelancer(f); setFreelancerDetailOpen(true) }}
                    className="table-row-hover cursor-pointer"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 text-xs font-semibold">
                            {f.freelancerName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{f.freelancerName}</p>
                          <p className="text-xs text-gray-400">{f.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-sm font-semibold text-orange-600">{f.commissionRate}%</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-gray-700">{f.assignedMissionsCount}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-gray-500">{new Date(f.associatedAt).toLocaleDateString('fr-FR')}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <AssociationStatusBadge status={f.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <CreateDelivererForm open={delivererFormOpen} onClose={() => setDelivererFormOpen(false)} />
      <CreateContractForm open={contractFormOpen} onClose={() => setContractFormOpen(false)} />
      <CreateFreelancerForm open={freelancerFormOpen} onClose={() => setFreelancerFormOpen(false)} />
      <ContractDetailDrawer contract={selectedContract} open={contractDetailOpen} onClose={() => setContractDetailOpen(false)} />
      <CommissionDetailDrawer commission={selectedCommission} open={commissionDetailOpen} onClose={() => setCommissionDetailOpen(false)} />
      <FreelancerDetailDrawer freelancer={selectedFreelancer} open={freelancerDetailOpen} onClose={() => setFreelancerDetailOpen(false)} />
    </div>
  )
}
