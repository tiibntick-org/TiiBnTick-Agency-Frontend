'use client'

import { useState } from 'react'
import {
  Truck, Plus, Wrench, CheckCircle2, XCircle,
  AlertTriangle, RotateCcw, UserPlus, Navigation, ChevronDown
} from 'lucide-react'
import { mockVehicles, mockDeliverers } from '@/lib/mock-data'
import type { Vehicle, VehicleStatus, VehicleType } from '@/lib/types'
import CreateVehicleForm from '@/components/forms/CreateVehicleForm'

function VehicleStatusBadge({ status }: { status: VehicleStatus }) {
  const map = {
    AVAILABLE: 'bg-emerald-50 text-emerald-700',
    IN_USE: 'bg-blue-50 text-blue-700',
    IN_MAINTENANCE: 'bg-orange-50 text-orange-700',
    RETIRED: 'bg-gray-100 text-gray-500',
  }
  const labels = { AVAILABLE: 'Disponible', IN_USE: 'En service', IN_MAINTENANCE: 'Maintenance', RETIRED: 'Retiré' }
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}>{labels[status]}</span>
}

const TYPE_LABELS: Record<VehicleType, string> = {
  MOTORCYCLE: 'Moto', CAR: 'Voiture', TRUCK_LIGHT: 'Camion léger',
  TRUCK_HEAVY: 'Camion lourd', TRICYCLE: 'Tricycle', BICYCLE: 'Vélo', ON_FOOT: 'À pied',
}

// ── GPS Modal ──────────────────────────────────────────────
function GpsModal({ vehicle, onClose }: { vehicle: Vehicle; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <Navigation size={18} className="text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Suivi GPS</p>
            <p className="text-xs text-gray-500 font-mono">{vehicle.registrationNumber} · {vehicle.model}</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
          <div className="text-center">
            <Navigation size={28} className="text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Carte GPS temps réel</p>
            <p className="text-xs text-gray-400 mt-1">Disponible après intégration TiiBnTick Core</p>
          </div>
        </div>
        <div className="space-y-0 divide-y divide-gray-100 text-sm">
          {[
            { label: 'Dernière position', value: 'Akwa, Douala' },
            { label: 'Mise à jour', value: 'Il y a 4 min' },
            { label: 'Vitesse actuelle', value: vehicle.status === 'IN_USE' ? '34 km/h' : '0 km/h' },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between py-2.5">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-5 w-full h-10 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors">
          Fermer
        </button>
      </div>
    </div>
  )
}

// ── Assign deliverer Modal ─────────────────────────────────
function AssignModal({ vehicle, onAssign, onClose }: {
  vehicle: Vehicle
  onAssign: (name: string, id: string) => void
  onClose: () => void
}) {
  const available = mockDeliverers.filter(d => d.status === 'AVAILABLE' && !d.vehicleId)
  const [selected, setSelected] = useState('')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 z-10">
        <p className="text-base font-semibold text-gray-900 mb-1">Assigner un livreur</p>
        <p className="text-xs text-gray-500 mb-4 font-mono">{vehicle.registrationNumber} · {vehicle.model}</p>
        {available.length === 0 ? (
          <p className="text-sm text-gray-400 italic py-4 text-center">Aucun livreur disponible sans véhicule assigné.</p>
        ) : (
          <div className="space-y-2 mb-5 max-h-52 overflow-y-auto">
            {available.map(d => (
              <button
                key={d.id}
                onClick={() => setSelected(d.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-colors ${selected === d.id ? 'border-orange-400 bg-orange-50' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-700 text-xs font-semibold">
                    {d.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{d.fullName}</p>
                  <p className="text-xs text-gray-400">{d.branchName ?? '—'}</p>
                </div>
              </button>
            ))}
          </div>
        )}
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 h-9 border border-gray-200 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors">Annuler</button>
          <button
            disabled={!selected}
            onClick={() => {
              const d = available.find(d => d.id === selected)!
              onAssign(d.fullName, d.id)
              onClose()
            }}
            className="flex-1 h-9 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Assigner
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Confirm Modal ──────────────────────────────────────────
function ConfirmModal({ title, message, confirmLabel, confirmClass, onConfirm, onClose }: {
  title: string; message: string; confirmLabel: string; confirmClass: string
  onConfirm: () => void; onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 z-10">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={18} className="text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 h-9 border border-gray-200 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors">Annuler</button>
          <button onClick={() => { onConfirm(); onClose() }} className={`flex-1 h-9 text-white text-sm font-medium rounded-lg transition-colors ${confirmClass}`}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

type Modal =
  | { type: 'gps'; vehicle: Vehicle }
  | { type: 'assign'; vehicle: Vehicle }
  | { type: 'confirm'; vehicle: Vehicle; action: 'maintenance' | 'returnMaintenance' | 'retire' }

export default function FleetPage() {
  const [formOpen, setFormOpen] = useState(false)
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles)
  const [modal, setModal] = useState<Modal | null>(null)
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  const updateStatus = (id: string, status: VehicleStatus, extra?: Partial<Vehicle>) =>
    setVehicles(vs => vs.map(v => v.id === id ? { ...v, status, ...extra } : v))

  const openAction = (v: Vehicle, action: string) => {
    setOpenMenuId(null)
    if (action === 'maintenance') setModal({ type: 'confirm', vehicle: v, action: 'maintenance' })
    else if (action === 'returnMaintenance') setModal({ type: 'confirm', vehicle: v, action: 'returnMaintenance' })
    else if (action === 'retire') setModal({ type: 'confirm', vehicle: v, action: 'retire' })
    else if (action === 'assign') setModal({ type: 'assign', vehicle: v })
    else if (action === 'gps') setModal({ type: 'gps', vehicle: v })
  }

  const stats = {
    available: vehicles.filter(v => v.status === 'AVAILABLE').length,
    inUse: vehicles.filter(v => v.status === 'IN_USE').length,
    inMaintenance: vehicles.filter(v => v.status === 'IN_MAINTENANCE').length,
    retired: vehicles.filter(v => v.status === 'RETIRED').length,
  }

  const activeVehicles = vehicles.filter(v => v.status !== 'RETIRED')
  const retiredVehicles = vehicles.filter(v => v.status === 'RETIRED')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Flotte</h1>
          <p className="text-sm text-gray-500 mt-0.5">{vehicles.length} véhicules au total</p>
        </div>
        <button
          onClick={() => setFormOpen(true)}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={15} />
          Ajouter un véhicule
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Disponibles', count: stats.available, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'En service', count: stats.inUse, icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'En maintenance', count: stats.inMaintenance, icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Retirés', count: stats.retired, icon: XCircle, color: 'text-gray-400', bg: 'bg-gray-50' },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0`}>
              <s.icon size={18} className={s.color} />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{s.count}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vehicle table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Véhicules actifs</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-left">
              <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Immatriculation</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Modèle / Type</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Antenne</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Livreur assigné</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Capacité</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Dernier entretien</th>
              <th className="px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activeVehicles.map(v => (
              <tr key={v.id} className="table-row-hover group">
                <td className="px-5 py-3.5">
                  <p className="text-sm font-semibold text-gray-900 font-mono">{v.registrationNumber}</p>
                </td>
                <td className="px-4 py-3.5">
                  <p className="text-sm text-gray-700">{v.model}</p>
                  <p className="text-xs text-gray-400">{TYPE_LABELS[v.type]}</p>
                </td>
                <td className="px-4 py-3.5">
                  <p className="text-xs text-gray-600">{v.branchName ?? '—'}</p>
                </td>
                <td className="px-4 py-3.5">
                  {v.assignedDelivererName ? (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-700 text-[10px] font-semibold">
                          {v.assignedDelivererName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700">{v.assignedDelivererName}</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => openAction(v, 'assign')}
                      className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
                    >
                      <UserPlus size={11} />
                      Assigner
                    </button>
                  )}
                </td>
                <td className="px-4 py-3.5">
                  <p className="text-xs text-gray-700">{v.maxWeightKg} kg</p>
                  <p className="text-[11px] text-gray-400">{v.maxVolumeM3} m³</p>
                </td>
                <td className="px-4 py-3.5">
                  <p className="text-xs text-gray-500">
                    {v.lastMaintenanceDate
                      ? new Date(v.lastMaintenanceDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: '2-digit' })
                      : <span className="text-gray-300">—</span>
                    }
                  </p>
                </td>
                <td className="px-4 py-3.5">
                  <VehicleStatusBadge status={v.status} />
                </td>

                {/* Actions cell */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1">
                    {v.status === 'IN_USE' && (
                      <button
                        onClick={() => openAction(v, 'gps')}
                        title="Suivi GPS"
                        className="p-1.5 rounded-md text-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Navigation size={14} />
                      </button>
                    )}

                    <div className="relative">
                      <button
                        onClick={() => setOpenMenuId(openMenuId === v.id ? null : v.id)}
                        className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <ChevronDown size={14} />
                      </button>

                      {openMenuId === v.id && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1 w-48 text-sm">
                            {(v.status === 'AVAILABLE' || v.status === 'IN_USE') && (
                              <button onClick={() => openAction(v, 'maintenance')} className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-700">
                                <Wrench size={13} /> Envoyer en maintenance
                              </button>
                            )}
                            {v.status === 'IN_MAINTENANCE' && (
                              <button onClick={() => openAction(v, 'returnMaintenance')} className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">
                                <RotateCcw size={13} /> Retour de maintenance
                              </button>
                            )}
                            {!v.assignedDelivererName && v.status === 'AVAILABLE' && (
                              <button onClick={() => openAction(v, 'assign')} className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-gray-700 hover:bg-gray-50">
                                <UserPlus size={13} /> Assigner un livreur
                              </button>
                            )}
                            {v.status !== 'IN_USE' && (
                              <div className="border-t border-gray-100 mt-1 pt-1">
                                <button onClick={() => openAction(v, 'retire')} className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-red-600 hover:bg-red-50">
                                  <XCircle size={13} /> Retirer de la flotte
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Retired vehicles */}
      {retiredVehicles.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
            <XCircle size={15} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-500">Véhicules retirés ({retiredVehicles.length})</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {retiredVehicles.map(v => (
              <div key={v.id} className="px-5 py-3 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-gray-500">{v.registrationNumber}</span>
                  <span className="text-xs text-gray-400">{v.model} · {TYPE_LABELS[v.type]}</span>
                </div>
                <VehicleStatusBadge status={v.status} />
              </div>
            ))}
          </div>
        </div>
      )}

      <CreateVehicleForm open={formOpen} onClose={() => setFormOpen(false)} />

      {/* Modals — rendered via fixed positioning, outside any transform context */}
      {modal?.type === 'gps' && <GpsModal vehicle={modal.vehicle} onClose={() => setModal(null)} />}
      {modal?.type === 'assign' && (
        <AssignModal
          vehicle={modal.vehicle}
          onAssign={(name, id) => updateStatus(modal.vehicle.id, 'AVAILABLE', { assignedDelivererName: name, assignedDelivererId: id })}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === 'confirm' && modal.action === 'maintenance' && (
        <ConfirmModal
          title="Envoyer en maintenance"
          message={`Le véhicule ${modal.vehicle.registrationNumber} sera retiré du service et marqué en maintenance.`}
          confirmLabel="Confirmer"
          confirmClass="bg-orange-500 hover:bg-orange-600"
          onConfirm={() => updateStatus(modal.vehicle.id, 'IN_MAINTENANCE', { lastMaintenanceDate: new Date().toISOString().split('T')[0] })}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === 'confirm' && modal.action === 'returnMaintenance' && (
        <ConfirmModal
          title="Retour de maintenance"
          message={`Le véhicule ${modal.vehicle.registrationNumber} repassera en statut Disponible.`}
          confirmLabel="Retour en flotte"
          confirmClass="bg-emerald-500 hover:bg-emerald-600"
          onConfirm={() => updateStatus(modal.vehicle.id, 'AVAILABLE')}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === 'confirm' && modal.action === 'retire' && (
        <ConfirmModal
          title="Retirer de la flotte"
          message={`${modal.vehicle.registrationNumber} sera retiré définitivement. Le livreur associé sera désassigné.`}
          confirmLabel="Retirer"
          confirmClass="bg-red-500 hover:bg-red-600"
          onConfirm={() => updateStatus(modal.vehicle.id, 'RETIRED', { assignedDelivererName: undefined, assignedDelivererId: undefined })}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
