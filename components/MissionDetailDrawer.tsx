'use client'

import { MapPin, User, CheckCircle2, AlertTriangle, XCircle, Loader } from 'lucide-react'
import type { Mission, MissionStatus, MissionPriority } from '@/lib/types'
import Drawer from '@/components/forms/Drawer'
import clsx from 'clsx'

const pipeline: { status: MissionStatus; label: string }[] = [
  { status: 'DRAFT',      label: 'Brouillon' },
  { status: 'PENDING',    label: 'En attente' },
  { status: 'ASSIGNED',   label: 'Assignée' },
  { status: 'IN_TRANSIT', label: 'En transit' },
  { status: 'AT_HUB',     label: 'Au hub' },
  { status: 'DELIVERED',  label: 'Livrée' },
]
const terminalStatuses: MissionStatus[] = ['FAILED', 'CANCELLED']

function StatusTimeline({ status }: { status: MissionStatus }) {
  const isTerminal = terminalStatuses.includes(status)
  const currentIdx = pipeline.findIndex(s => s.status === status)

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-100" />
      <div className="flex justify-between relative">
        {pipeline.map((step, i) => {
          const done   = !isTerminal && i < currentIdx
          const active = !isTerminal && i === currentIdx
          return (
            <div key={step.status} className="flex flex-col items-center gap-1.5 z-10">
              <div className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all',
                done   ? 'bg-emerald-500 border-emerald-500' :
                active ? 'bg-orange-500 border-orange-500' :
                         'bg-white border-gray-200'
              )}>
                {done   ? <CheckCircle2 size={14} className="text-white" /> :
                 active ? <div className="w-2 h-2 bg-white rounded-full" /> :
                          <div className="w-2 h-2 bg-gray-300 rounded-full" />}
              </div>
              <span className={clsx('text-[10px] font-medium text-center leading-tight max-w-14',
                done || active ? 'text-gray-800' : 'text-gray-400'
              )}>
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
      {isTerminal && (
        <div className="mt-3 flex items-center justify-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {status === 'FAILED'    ? <AlertTriangle size={14} className="text-red-500" /> :
           status === 'CANCELLED' ? <XCircle size={14} className="text-gray-500" /> : null}
          <span className="text-sm font-medium text-red-700">
            {status === 'FAILED' ? 'Mission échouée' : 'Mission annulée'}
          </span>
        </div>
      )}
    </div>
  )
}

const priorityMap: Record<MissionPriority, { label: string; cls: string }> = {
  URGENT: { label: 'Urgent',  cls: 'bg-red-50 text-red-700 border border-red-200' },
  HIGH:   { label: 'Haute',   cls: 'bg-orange-50 text-orange-700 border border-orange-200' },
  NORMAL: { label: 'Normale', cls: 'bg-gray-50 text-gray-600 border border-gray-200' },
  LOW:    { label: 'Basse',   cls: 'bg-gray-50 text-gray-400 border border-gray-100' },
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400 w-32 flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-800 flex-1">{value}</span>
    </div>
  )
}

interface Props {
  mission: Mission | null
  open: boolean
  onClose: () => void
}

export default function MissionDetailDrawer({ mission, open, onClose }: Props) {
  if (!mission) return null

  const priority = priorityMap[mission.priority]

  const footer = (
    <>
      {['PENDING', 'DRAFT'].includes(mission.status) && (
        <div className="flex gap-3">
          <button className="flex-1 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
            Assigner un livreur
          </button>
          <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 rounded-lg transition-colors">
            Annuler
          </button>
        </div>
      )}
      {mission.status === 'ASSIGNED' && (
        <div className="flex gap-3">
          <button className="flex-1 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
            Forcer le démarrage
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
            Réassigner
          </button>
        </div>
      )}
      {['DELIVERED', 'FAILED', 'CANCELLED'].includes(mission.status) && (
        <p className="text-xs text-gray-400 text-center py-1">Mission terminée · Aucune action disponible</p>
      )}
      {mission.status === 'IN_TRANSIT' && (
        <p className="text-xs text-blue-600 text-center py-1 flex items-center justify-center gap-1.5">
          <Loader size={12} className="animate-spin" /> Mission en cours de livraison
        </p>
      )}
      {mission.status === 'AT_HUB' && (
        <button className="w-full py-2 text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors">
          Enregistrer le retrait
        </button>
      )}
    </>
  )

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={mission.manifestNumber}
      description={`${mission.branchName} · ${mission.id}`}
      footer={footer}
    >
      {/* Priority badge next to title — injected via description slot substitute */}
      <div className="px-6 pt-0 pb-0">
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mt-0 mb-0 ${priority.cls}`}>
          {priority.label}
        </span>
      </div>

      {/* Timeline */}
      <div className="px-6 py-5 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Progression</p>
        <StatusTimeline status={mission.status} />
      </div>

      {/* Parties */}
      <div className="px-6 py-4 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Expéditeur → Destinataire</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <User size={12} className="text-gray-400" />
              <span className="text-xs text-gray-400">Expéditeur</span>
            </div>
            <p className="text-sm font-medium text-gray-900">{mission.senderName}</p>
            <p className="text-xs text-gray-500 mt-0.5 truncate">{mission.pickupAddress}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <User size={12} className="text-orange-400" />
              <span className="text-xs text-orange-500">Destinataire</span>
            </div>
            <p className="text-sm font-medium text-gray-900">{mission.recipientName}</p>
            <p className="text-xs text-gray-500 mt-0.5">{mission.recipientPhone}</p>
            <p className="text-xs text-gray-400 mt-0.5 truncate">{mission.deliveryAddress}</p>
          </div>
        </div>
      </div>

      {/* Logistique */}
      <div className="px-6 py-4 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Logistique</p>
        <Row label="Livreur" value={
          mission.delivererName
            ? <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-700 text-[10px] font-semibold">
                    {mission.delivererName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                {mission.delivererName}
              </div>
            : <span className="text-gray-400 italic">Non assigné</span>
        } />
        <Row label="Véhicule" value={
          mission.vehiclePlate
            ? <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">{mission.vehiclePlate}</span>
            : <span className="text-gray-400 italic">—</span>
        } />
        {mission.targetHubName && (
          <Row label="Hub cible" value={
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-violet-400" />
              <span className="text-violet-700">{mission.targetHubName}</span>
            </div>
          } />
        )}
      </div>

      {/* Colis & Planning */}
      <div className="px-6 py-4 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Colis & Planification</p>
        <Row label="Colis" value={`${mission.packagesCount} colis · ${mission.totalWeightKg} kg`} />
        <Row label="Collecte prévue" value={new Date(mission.scheduledPickupAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} />
        {mission.scheduledDeliveryAt && (
          <Row label="Livraison prévue" value={new Date(mission.scheduledDeliveryAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} />
        )}
        {mission.actualPickupAt && (
          <Row label="Collecte effective" value={<span className="text-emerald-700">{new Date(mission.actualPickupAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>} />
        )}
        {mission.actualDeliveryAt && (
          <Row label="Livraison effective" value={<span className="text-emerald-700 font-semibold">{new Date(mission.actualDeliveryAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>} />
        )}
      </div>

      {/* Facturation */}
      <div className="px-6 py-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Facturation</p>
        <Row label="Prix de vente" value={
          <span className="font-bold text-gray-900">{mission.sellingPrice.toLocaleString('fr-FR')} {mission.currency}</span>
        } />
        <Row label="Créée le" value={new Date(mission.createdAt).toLocaleString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })} />
      </div>
    </Drawer>
  )
}
