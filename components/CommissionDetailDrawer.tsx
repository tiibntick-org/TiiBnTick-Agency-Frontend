'use client'

import { DollarSign, Package, User, Calendar, CheckCircle2, AlertTriangle, Clock, ArrowRight } from 'lucide-react'
import Drawer from '@/components/forms/Drawer'
import { mockMissions } from '@/lib/mock-data'
import type { CommissionRecord } from '@/lib/types'

interface Props {
  commission: CommissionRecord | null
  open: boolean
  onClose: () => void
}

function Row({ label, value, highlight }: { label: string; value: React.ReactNode; highlight?: boolean }) {
  return (
    <div className="flex items-start justify-between py-3.5 border-b border-gray-100 last:border-0 gap-4">
      <span className="text-sm text-gray-500 flex-shrink-0">{label}</span>
      <span className={`text-sm font-medium text-right ${highlight ? 'text-orange-600 font-bold text-base' : 'text-gray-900'}`}>{value}</span>
    </div>
  )
}

const STATUS_CONFIG = {
  CALCULATED: { label: 'Calculée', color: 'bg-gray-100 text-gray-600', icon: Clock, desc: 'La commission a été calculée et est en attente de validation.' },
  VALIDATED: { label: 'Validée', color: 'bg-blue-50 text-blue-700', icon: CheckCircle2, desc: 'La commission a été validée par le responsable. Paiement en attente.' },
  PAID: { label: 'Payée', color: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2, desc: 'La commission a été versée au livreur.' },
  DISPUTED: { label: 'En litige', color: 'bg-orange-50 text-orange-700', icon: AlertTriangle, desc: 'La commission est contestée. Une vérification est en cours.' },
}

export default function CommissionDetailDrawer({ commission, open, onClose }: Props) {
  if (!commission) return null

  const statusCfg = STATUS_CONFIG[commission.status]
  const StatusIcon = statusCfg.icon

  const relatedMission = mockMissions.find(m => m.id === commission.missionId)

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={`Commission ${commission.id}`}
      description={`${commission.delivererName} · ${commission.manifestNumber}`}
      footer={
        commission.status === 'CALCULATED' ? (
          <div className="flex gap-3">
            <button className="flex-1 h-10 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors">
              Valider la commission
            </button>
            <button className="flex-1 h-10 border border-orange-200 text-orange-600 text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors">
              Signaler un litige
            </button>
          </div>
        ) : commission.status === 'VALIDATED' ? (
          <button className="w-full h-10 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
            Marquer comme payée
          </button>
        ) : undefined
      }
    >
      <div>
        {/* Status banner */}
        <div className={`px-6 py-3 border-b border-gray-100 ${statusCfg.color}`}>
          <div className="flex items-center gap-2">
            <StatusIcon size={15} />
            <span className="text-sm font-medium">{statusCfg.label}</span>
          </div>
          <p className="text-xs mt-1 opacity-80">{statusCfg.desc}</p>
        </div>

        {/* Amount hero */}
        <div className="px-6 py-6 text-center border-b border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Montant de la commission</p>
          <p className="text-4xl font-bold text-gray-900">{commission.amount.toLocaleString('fr-FR')}</p>
          <p className="text-lg text-gray-400 font-medium mt-1">{commission.currency}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Livreur */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Livreur bénéficiaire</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <span className="text-orange-700 text-sm font-semibold">
                  {commission.delivererName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{commission.delivererName}</p>
                <p className="text-xs text-gray-400">{commission.delivererId}</p>
              </div>
            </div>
          </div>

          {/* Commission details */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Détails</h3>
            <div className="bg-white border border-gray-200 rounded-xl px-5">
              <Row label="ID Commission" value={<span className="font-mono text-xs">{commission.id}</span>} />
              <Row label="Bordereau mission" value={<span className="font-mono">{commission.manifestNumber}</span>} />
              <Row label="Montant versé" value={`${commission.amount.toLocaleString('fr-FR')} ${commission.currency}`} highlight />
              <Row
                label="Calculée le"
                value={new Date(commission.calculatedAt).toLocaleString('fr-FR', {
                  day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              />
              <Row
                label="Payée le"
                value={commission.paidAt
                  ? new Date(commission.paidAt).toLocaleString('fr-FR', {
                      day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    })
                  : <span className="text-gray-400 italic">Non encore versée</span>
                }
              />
            </div>
          </div>

          {/* Related mission */}
          {relatedMission && (
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Mission associée</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{relatedMission.manifestNumber}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{relatedMission.id}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {relatedMission.sellingPrice.toLocaleString('fr-FR')} {relatedMission.currency}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User size={11} className="text-gray-400" />
                    <span>Expéditeur : <strong className="text-gray-700">{relatedMission.senderName}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Package size={11} className="text-gray-400" />
                    <span>{relatedMission.packagesCount} colis · {relatedMission.totalWeightKg} kg</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ArrowRight size={11} className="text-gray-400" />
                    <span className="truncate">{relatedMission.pickupAddress} → {relatedMission.deliveryAddress}</span>
                  </div>
                  {relatedMission.actualDeliveryAt && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={11} className="text-gray-400" />
                      <span>Livré le {new Date(relatedMission.actualDeliveryAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                  )}
                </div>
                <div className="pt-2 border-t border-gray-100 text-xs text-orange-600">
                  <span className="font-medium">
                    Commission = {((commission.amount / relatedMission.sellingPrice) * 100).toFixed(1)}% du prix de vente
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </Drawer>
  )
}
