'use client'

import { useState } from 'react'
import { GitBranch, Plus, MapPin, Clock, Users, Star, MoreHorizontal } from 'lucide-react'
import { mockBranches } from '@/lib/mock-data'
import type { Branch, BranchStatus } from '@/lib/types'
import CreateBranchForm from '@/components/forms/CreateBranchForm'
import BranchDetailDrawer from '@/components/BranchDetailDrawer'

function BranchStatusBadge({ status }: { status: BranchStatus }) {
  const map = {
    OPEN: 'bg-emerald-50 text-emerald-700',
    TEMPORARILY_CLOSED: 'bg-orange-50 text-orange-700',
    PERMANENTLY_CLOSED: 'bg-red-50 text-red-700',
  }
  const labels = {
    OPEN: 'Ouverte',
    TEMPORARILY_CLOSED: 'Fermée temporairement',
    PERMANENTLY_CLOSED: 'Fermée définitivement',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'OPEN' ? 'bg-emerald-500' : status === 'TEMPORARILY_CLOSED' ? 'bg-orange-500' : 'bg-red-500'}`} />
      {labels[status]}
    </span>
  )
}

export default function BranchesPage() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const openCount = mockBranches.filter(b => b.status === 'OPEN').length

  const openDetail = (branch: Branch) => {
    setSelectedBranch(branch)
    setDetailOpen(true)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Antennes</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {mockBranches.length} antennes · {openCount} ouvertes
          </p>
        </div>
        <button
          onClick={() => setFormOpen(true)}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={15} />
          Nouvelle antenne
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Antennes ouvertes', value: openCount, sub: `sur ${mockBranches.length} au total`, color: 'text-emerald-600' },
          { label: 'Total livreurs', value: mockBranches.reduce((s, b) => s + b.deliverersCount, 0), sub: 'rattachés aux antennes', color: 'text-blue-600' },
          { label: 'Siège social', value: 'Akwa', sub: '3 Rue Joss, Douala', color: 'text-orange-600' },
        ].map(c => (
          <div key={c.label} className="bg-white border border-gray-200 rounded-xl p-4">
            <p className={`text-2xl font-bold ${c.color}`}>{c.value}</p>
            <p className="text-sm font-medium text-gray-700 mt-0.5">{c.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Branches grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mockBranches.map(branch => (
          <div
            key={branch.id}
            onClick={() => openDetail(branch)}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  branch.status === 'OPEN' ? 'bg-orange-50' : 'bg-gray-50'
                }`}>
                  <GitBranch size={18} className={branch.status === 'OPEN' ? 'text-orange-500' : 'text-gray-400'} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900">{branch.name}</h3>
                    {branch.isHeadquarters && (
                      <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded uppercase tracking-wide">
                        Siège
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{branch.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BranchStatusBadge status={branch.status} />
                <button
                  onClick={e => { e.stopPropagation(); openDetail(branch) }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all"
                >
                  <MoreHorizontal size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={12} className="text-gray-400 flex-shrink-0" />
                <span>{branch.address}, {branch.city}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} className="text-gray-400 flex-shrink-0" />
                <span>{branch.openingHours}</span>
              </div>
              {branch.managerName && (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Star size={12} className="text-gray-400 flex-shrink-0" />
                  <span>Responsable : <span className="font-medium text-gray-700">{branch.managerName}</span></span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Users size={13} className="text-gray-400" />
                <span className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">{branch.deliverersCount}</span> livreur{branch.deliverersCount > 1 ? 's' : ''}
                </span>
              </div>
              <span className="text-xs text-gray-400">Créée le {new Date(branch.createdAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        ))}
      </div>

      <CreateBranchForm open={formOpen} onClose={() => setFormOpen(false)} />
      <BranchDetailDrawer branch={selectedBranch} open={detailOpen} onClose={() => setDetailOpen(false)} />
    </div>
  )
}
