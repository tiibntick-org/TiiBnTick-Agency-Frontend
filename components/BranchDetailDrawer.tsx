'use client'

import { MapPin, Clock, Users, Star, Phone, Mail, GitBranch, Truck, Package, CheckCircle2, XCircle } from 'lucide-react'
import Drawer from '@/components/forms/Drawer'
import { mockDeliverers, mockVehicles, mockMissions } from '@/lib/mock-data'
import type { Branch } from '@/lib/types'

interface Props {
  branch: Branch | null
  open: boolean
  onClose: () => void
}

function Stat({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
      {sub && <p className="text-[11px] text-gray-400">{sub}</p>}
    </div>
  )
}

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

export default function BranchDetailDrawer({ branch, open, onClose }: Props) {
  if (!branch) return null

  const branchDeliverers = mockDeliverers.filter(d => d.branchId === branch.id)
  const branchVehicles = mockVehicles.filter(v => v.branchId === branch.id)
  const branchMissions = mockMissions.filter(m => m.branchId === branch.id)

  const activeMissions = branchMissions.filter(m => ['IN_TRANSIT', 'ASSIGNED', 'PENDING'].includes(m.status)).length
  const deliveredToday = branchMissions.filter(m => m.status === 'DELIVERED').length

  const statusLabel = {
    OPEN: 'Ouverte',
    TEMPORARILY_CLOSED: 'Fermée temporairement',
    PERMANENTLY_CLOSED: 'Fermée définitivement',
  }[branch.status]

  const statusColor = {
    OPEN: 'bg-emerald-50 text-emerald-700',
    TEMPORARILY_CLOSED: 'bg-orange-50 text-orange-700',
    PERMANENTLY_CLOSED: 'bg-red-50 text-red-700',
  }[branch.status]

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={branch.name}
      description={`${branch.city} · ${branch.id}`}
      size="lg"
    >
      <div>
        {/* Status banner */}
        <div className={`px-6 py-3 flex items-center gap-3 border-b border-gray-100 ${branch.status === 'OPEN' ? 'bg-emerald-50' : 'bg-orange-50'}`}>
          <div className={`flex items-center gap-2 text-sm font-medium ${branch.status === 'OPEN' ? 'text-emerald-700' : 'text-orange-700'}`}>
            {branch.status === 'OPEN' ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
            {statusLabel}
          </div>
          {branch.isHeadquarters && (
            <span className="ml-auto text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded uppercase tracking-wide">
              Siège
            </span>
          )}
        </div>

        {/* Quick stats */}
        <div className="px-6 py-5 grid grid-cols-4 gap-4 border-b border-gray-100">
          <Stat label="Livreurs" value={branchDeliverers.length} />
          <Stat label="Véhicules" value={branchVehicles.length} />
          <Stat label="Missions actives" value={activeMissions} />
          <Stat label="Livrées (total)" value={deliveredToday} />
        </div>

        <div className="p-6 space-y-6">
          {/* Informations */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Informations</h3>
            <div className="bg-white border border-gray-200 rounded-xl px-5">
              <InfoRow label="Adresse" value={`${branch.address}, ${branch.city}`} icon={MapPin} />
              <InfoRow label="Horaires" value={branch.openingHours} icon={Clock} />
              {branch.managerName && (
                <InfoRow label="Responsable" value={branch.managerName} icon={Star} />
              )}
              <InfoRow label="Créée le" value={new Date(branch.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} icon={GitBranch} />
            </div>
          </div>

          {/* Livreurs */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Livreurs rattachés ({branchDeliverers.length})</h3>
            {branchDeliverers.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Aucun livreur rattaché à cette antenne.</p>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden">
                {branchDeliverers.map(d => (
                  <div key={d.id} className="flex items-center gap-3 px-5 py-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-700 text-xs font-semibold">
                        {d.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{d.fullName}</p>
                      <p className="text-xs text-gray-400">{d.phone}</p>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <div>
                        <div className={`flex items-center gap-1.5 text-xs`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            d.status === 'AVAILABLE' ? 'bg-emerald-500' :
                            d.status === 'ON_MISSION' ? 'bg-blue-500' :
                            d.status === 'SUSPENDED' ? 'bg-red-500' : 'bg-gray-300'
                          }`} />
                          <span className="text-gray-500">
                            {d.status === 'AVAILABLE' ? 'Disponible' :
                             d.status === 'ON_MISSION' ? 'En mission' :
                             d.status === 'OFFLINE' ? 'Hors ligne' :
                             d.status === 'SUSPENDED' ? 'Suspendu' : 'Inactif'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={11} className="text-orange-400 fill-orange-400" />
                        <span className="text-xs font-medium text-gray-600">{d.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Véhicules */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Flotte de l&apos;antenne ({branchVehicles.length})</h3>
            {branchVehicles.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Aucun véhicule rattaché à cette antenne.</p>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden">
                {branchVehicles.map(v => (
                  <div key={v.id} className="flex items-center gap-3 px-5 py-3">
                    <Truck size={15} className="text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{v.model}</p>
                      <p className="text-xs text-gray-400">{v.registrationNumber}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                        v.status === 'AVAILABLE' ? 'bg-emerald-50 text-emerald-700' :
                        v.status === 'IN_USE' ? 'bg-blue-50 text-blue-700' :
                        v.status === 'IN_MAINTENANCE' ? 'bg-orange-50 text-orange-700' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {v.status === 'AVAILABLE' ? 'Disponible' :
                         v.status === 'IN_USE' ? 'En service' :
                         v.status === 'IN_MAINTENANCE' ? 'Maintenance' : 'Retiré'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Missions récentes */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Missions récentes</h3>
            {branchMissions.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Aucune mission.</p>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden">
                {branchMissions.slice(0, 5).map(m => (
                  <div key={m.id} className="flex items-center gap-3 px-5 py-3">
                    <Package size={13} className="text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{m.manifestNumber}</p>
                      <p className="text-xs text-gray-400 truncate">{m.recipientName} · {m.deliveryAddress}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 ${
                      m.status === 'DELIVERED' ? 'bg-emerald-50 text-emerald-700' :
                      m.status === 'IN_TRANSIT' ? 'bg-blue-50 text-blue-700' :
                      m.status === 'CANCELLED' ? 'bg-gray-100 text-gray-500' :
                      m.status === 'FAILED' ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'
                    }`}>
                      {m.status === 'DELIVERED' ? 'Livrée' :
                       m.status === 'IN_TRANSIT' ? 'En transit' :
                       m.status === 'PENDING' ? 'En attente' :
                       m.status === 'ASSIGNED' ? 'Assignée' :
                       m.status === 'CANCELLED' ? 'Annulée' :
                       m.status === 'FAILED' ? 'Échouée' : m.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  )
}
