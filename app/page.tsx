'use client'

import { useState } from 'react'
import {
  Package, Users, Truck, MapPin, TrendingUp, ArrowUpRight,
  ArrowDownRight, Clock, CheckCircle2, AlertTriangle, XCircle
} from 'lucide-react'
import {
  mockMissions, mockDeliverers, mockVehicles, mockHubs,
  missionStatusCounts
} from '@/lib/mock-data'
import Link from 'next/link'
import CreateMissionForm from '@/components/forms/CreateMissionForm'

// ── Stat card ──────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  trend,
  trendLabel,
  color = 'orange',
}: {
  icon: React.ElementType
  label: string
  value: string | number
  sub?: string
  trend?: 'up' | 'down' | 'neutral'
  trendLabel?: string
  color?: 'orange' | 'default'
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color === 'orange' ? 'bg-orange-50' : 'bg-gray-50'}`}>
          <Icon size={18} className={color === 'orange' ? 'text-orange-500' : 'text-gray-500'} />
        </div>
        {trend && trendLabel && (
          <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'bg-emerald-50 text-emerald-700' :
            trend === 'down' ? 'bg-red-50 text-red-600' :
            'bg-gray-100 text-gray-500'
          }`}>
            {trend === 'up' ? <ArrowUpRight size={12} /> : trend === 'down' ? <ArrowDownRight size={12} /> : null}
            {trendLabel}
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

// ── Mission pipeline bar ───────────────────────────────────
function PipelineBar({ label, count, max, color }: { label: string; count: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 w-24 text-right flex-shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 w-5 text-center flex-shrink-0">{count}</span>
    </div>
  )
}

// ── Status badge ───────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    DELIVERED: 'bg-emerald-50 text-emerald-700',
    IN_TRANSIT: 'bg-blue-50 text-blue-700',
    ASSIGNED: 'bg-indigo-50 text-indigo-700',
    PENDING: 'bg-orange-50 text-orange-700',
    AT_HUB: 'bg-violet-50 text-violet-700',
    DRAFT: 'bg-gray-100 text-gray-600',
    FAILED: 'bg-red-50 text-red-700',
    CANCELLED: 'bg-gray-200 text-gray-500',
  }
  const labels: Record<string, string> = {
    DELIVERED: 'Livré', IN_TRANSIT: 'En transit', ASSIGNED: 'Assignée',
    PENDING: 'En attente', AT_HUB: 'Au hub', DRAFT: 'Brouillon',
    FAILED: 'Échoué', CANCELLED: 'Annulé',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${map[status] ?? 'bg-gray-100 text-gray-600'}`}>
      {labels[status] ?? status}
    </span>
  )
}

// ── Priority badge ─────────────────────────────────────────
function PriorityDot({ priority }: { priority: string }) {
  const map: Record<string, string> = {
    URGENT: 'bg-red-500',
    HIGH: 'bg-orange-500',
    NORMAL: 'bg-gray-300',
    LOW: 'bg-gray-200',
  }
  return <span className={`w-2 h-2 rounded-full inline-block ${map[priority] ?? 'bg-gray-200'}`} />
}

// ── Page ───────────────────────────────────────────────────
export default function DashboardPage() {
  const [missionFormOpen, setMissionFormOpen] = useState(false)
  const activeDeliverers = mockDeliverers.filter(d => d.status !== 'OFFLINE' && d.status !== 'SUSPENDED' && d.status !== 'INACTIVE')
  const availableVehicles = mockVehicles.filter(v => v.status === 'AVAILABLE')
  const recentMissions = [...mockMissions].slice(0, 6)
  const totalRevenue = mockMissions
    .filter(m => m.status === 'DELIVERED')
    .reduce((sum, m) => sum + m.sellingPrice, 0)

  const pipelineTotal = mockMissions.filter(m => !['CANCELLED', 'FAILED'].includes(m.status)).length

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">Vue d&apos;ensemble de votre agence · 28 Avril 2026</p>
        </div>
        <button
          onClick={() => setMissionFormOpen(true)}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Package size={15} />
          Nouvelle mission
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Package}
          label="Missions du jour"
          value={14}
          sub="4 en cours, 8 livrées"
          trend="up"
          trendLabel="+12%"
          color="orange"
        />
        <StatCard
          icon={Users}
          label="Livreurs actifs"
          value={`${activeDeliverers.length}/${mockDeliverers.length}`}
          sub="2 en mission"
          trend="neutral"
          trendLabel="stable"
        />
        <StatCard
          icon={Truck}
          label="Véhicules disponibles"
          value={`${availableVehicles.length}/${mockVehicles.filter(v => v.status !== 'RETIRED').length}`}
          sub="2 en maintenance"
          trend="down"
          trendLabel="-1"
        />
        <StatCard
          icon={TrendingUp}
          label="Revenus du mois"
          value={`${(totalRevenue / 1000).toFixed(0)}k XAF`}
          sub="Livraisons facturées"
          trend="up"
          trendLabel="+8%"
          color="orange"
        />
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-5 gap-6">
        {/* Mission pipeline */}
        <div className="col-span-3 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Pipeline des missions</h2>
              <p className="text-xs text-gray-400 mt-0.5">{mockMissions.length} missions au total</p>
            </div>
            <Link href="/missions" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
              Voir tout
            </Link>
          </div>
          <div className="space-y-3">
            <PipelineBar label="Brouillon" count={missionStatusCounts.DRAFT} max={pipelineTotal} color="#d1d5db" />
            <PipelineBar label="En attente" count={missionStatusCounts.PENDING} max={pipelineTotal} color="#fb923c" />
            <PipelineBar label="Assignée" count={missionStatusCounts.ASSIGNED} max={pipelineTotal} color="#818cf8" />
            <PipelineBar label="En transit" count={missionStatusCounts.IN_TRANSIT} max={pipelineTotal} color="#3b82f6" />
            <PipelineBar label="Au hub" count={missionStatusCounts.AT_HUB} max={pipelineTotal} color="#a855f7" />
            <PipelineBar label="Livrée" count={missionStatusCounts.DELIVERED} max={pipelineTotal} color="#10b981" />
            <PipelineBar label="Échouée" count={missionStatusCounts.FAILED} max={pipelineTotal} color="#ef4444" />
            <PipelineBar label="Annulée" count={missionStatusCounts.CANCELLED} max={pipelineTotal} color="#e5e7eb" />
          </div>
        </div>

        {/* Hubs occupancy */}
        <div className="col-span-2 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Occupation des hubs</h2>
              <p className="text-xs text-gray-400 mt-0.5">3 hubs actifs</p>
            </div>
            <Link href="/hubs" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
              Gérer
            </Link>
          </div>
          <div className="space-y-5">
            {mockHubs.map(hub => {
              const pct = Math.round((hub.currentOccupancy / hub.capacity) * 100)
              const barColor = pct >= 90 ? '#ef4444' : pct >= 70 ? '#f97316' : '#10b981'
              return (
                <div key={hub.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-700 truncate">{hub.name}</span>
                    <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{hub.currentOccupancy}/{hub.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, backgroundColor: barColor }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] text-gray-400">{hub.status === 'FULL' ? 'Plein' : hub.status === 'OPEN' ? 'Ouvert' : 'Fermé'}</span>
                    <span className="text-[10px] font-semibold" style={{ color: barColor }}>{pct}%</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Deliverer quick stats */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-700 mb-3">Livreurs</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Disponibles', count: mockDeliverers.filter(d => d.status === 'AVAILABLE').length, icon: CheckCircle2, color: 'text-emerald-600' },
                { label: 'En mission', count: mockDeliverers.filter(d => d.status === 'ON_MISSION').length, icon: Clock, color: 'text-blue-500' },
                { label: 'Hors ligne', count: mockDeliverers.filter(d => d.status === 'OFFLINE' || d.status === 'SUSPENDED').length, icon: AlertTriangle, color: 'text-gray-400' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <s.icon size={16} className={`mx-auto mb-1 ${s.color}`} />
                  <p className="text-lg font-bold text-gray-900">{s.count}</p>
                  <p className="text-[10px] text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent missions */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Missions récentes</h2>
            <p className="text-xs text-gray-400 mt-0.5">Dernières activités de l&apos;agence</p>
          </div>
          <Link href="/missions" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
            Voir toutes les missions
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Bordereau</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Destinataire</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Livreur</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Priorité</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Montant</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentMissions.map(m => (
              <tr key={m.id} className="table-row-hover cursor-pointer">
                <td className="px-5 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{m.manifestNumber}</p>
                    <p className="text-xs text-gray-400">{m.branchName}</p>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <div>
                    <p className="text-sm text-gray-700">{m.recipientName}</p>
                    <p className="text-xs text-gray-400 truncate max-w-32">{m.deliveryAddress}</p>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <p className="text-sm text-gray-700">{m.delivererName ?? <span className="text-gray-300 italic text-xs">Non assigné</span>}</p>
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <PriorityDot priority={m.priority} />
                    <span className="text-xs text-gray-600">{m.priority === 'URGENT' ? 'Urgent' : m.priority === 'HIGH' ? 'Haute' : m.priority === 'NORMAL' ? 'Normale' : 'Basse'}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <StatusBadge status={m.status} />
                </td>
                <td className="px-5 py-3.5">
                  <p className="text-sm font-medium text-gray-900">{m.sellingPrice.toLocaleString('fr-FR')} {m.currency}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateMissionForm open={missionFormOpen} onClose={() => setMissionFormOpen(false)} />
    </div>
  )
}
