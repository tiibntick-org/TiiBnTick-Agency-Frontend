(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/mock-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "missionStatusCounts": (()=>missionStatusCounts),
    "mockAgency": (()=>mockAgency),
    "mockBillingPolicies": (()=>mockBillingPolicies),
    "mockBranches": (()=>mockBranches),
    "mockCommissions": (()=>mockCommissions),
    "mockContracts": (()=>mockContracts),
    "mockDeliverers": (()=>mockDeliverers),
    "mockFreelancers": (()=>mockFreelancers),
    "mockHubParcels": (()=>mockHubParcels),
    "mockHubs": (()=>mockHubs),
    "mockMissions": (()=>mockMissions),
    "mockVehicles": (()=>mockVehicles)
});
const mockAgency = {
    id: 'AGN-001',
    name: 'Rapid Express Douala',
    legalName: 'Rapid Express SARL',
    registrationNumber: 'RC/DLA/2021/B/1234',
    type: 'ENTERPRISE',
    status: 'ACTIVE',
    phone: '+237 233 42 18 90',
    email: 'contact@rapidexpress-dla.cm',
    address: '3 Rue Joss, Akwa',
    city: 'Douala',
    country: 'Cameroun',
    createdAt: '2021-03-15',
    defaultCurrency: 'XAF',
    autoAssignMissions: true,
    maxAssociatedFreelancers: 20,
    hubRetentionDelayHours: 72,
    allowFreelancerAssociation: true
};
const mockBranches = [
    {
        id: 'BRN-001',
        agencyId: 'AGN-001',
        name: 'Antenne Akwa (Siège)',
        address: '3 Rue Joss, Akwa',
        city: 'Douala',
        isHeadquarters: true,
        managerId: 'DLV-001',
        managerName: 'Étienne Nlend',
        status: 'OPEN',
        openingHours: 'Lun–Sam 07h00–20h00',
        deliverersCount: 5,
        createdAt: '2021-03-15'
    },
    {
        id: 'BRN-002',
        agencyId: 'AGN-001',
        name: 'Antenne Bonapriso',
        address: 'Av. Général de Gaulle, Bonapriso',
        city: 'Douala',
        isHeadquarters: false,
        managerId: 'DLV-003',
        managerName: 'Mireille Atangana',
        status: 'OPEN',
        openingHours: 'Lun–Ven 08h00–19h00',
        deliverersCount: 3,
        createdAt: '2021-07-01'
    },
    {
        id: 'BRN-003',
        agencyId: 'AGN-001',
        name: 'Antenne Makepe',
        address: 'Quartier Makepe Missoke, Carrefour Elf',
        city: 'Douala',
        isHeadquarters: false,
        managerId: 'DLV-007',
        managerName: 'Rodrigue Kouam',
        status: 'OPEN',
        openingHours: 'Lun–Sam 07h30–18h30',
        deliverersCount: 2,
        createdAt: '2022-02-10'
    },
    {
        id: 'BRN-004',
        agencyId: 'AGN-001',
        name: 'Antenne Yassa',
        address: 'Zone Industrielle Yassa, Bloc D',
        city: 'Douala',
        isHeadquarters: false,
        status: 'TEMPORARILY_CLOSED',
        openingHours: 'Lun–Ven 08h00–17h00',
        deliverersCount: 0,
        createdAt: '2023-05-20'
    }
];
const mockDeliverers = [
    {
        id: 'DLV-001',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Antenne Akwa (Siège)',
        fullName: 'Jean-Paul Essomba',
        phone: '+237 691 23 45 67',
        email: 'jp.essomba@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'AVAILABLE',
        rating: 4.8,
        totalMissions: 234,
        vehicleId: 'VEH-001',
        vehiclePlate: 'LT-4521-A',
        joinedAt: '2021-03-20'
    },
    {
        id: 'DLV-002',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Antenne Akwa (Siège)',
        fullName: 'Martin Mbarga',
        phone: '+237 677 89 01 23',
        email: 'm.mbarga@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'ON_MISSION',
        rating: 4.6,
        totalMissions: 189,
        activeMissionId: 'MSN-005',
        vehicleId: 'VEH-002',
        vehiclePlate: 'LT-8832-B',
        joinedAt: '2021-05-10'
    },
    {
        id: 'DLV-003',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Antenne Bonapriso',
        fullName: 'Mireille Atangana',
        phone: '+237 655 34 56 78',
        email: 'm.atangana@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'AVAILABLE',
        rating: 4.9,
        totalMissions: 312,
        vehicleId: 'VEH-004',
        vehiclePlate: 'LT-2210-C',
        joinedAt: '2021-07-01'
    },
    {
        id: 'DLV-004',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Antenne Akwa (Siège)',
        fullName: 'Rodrigue Nkomo',
        phone: '+237 699 56 78 90',
        email: 'r.nkomo@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'OFFLINE',
        rating: 4.3,
        totalMissions: 156,
        joinedAt: '2021-09-15'
    },
    {
        id: 'DLV-005',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Antenne Bonapriso',
        fullName: 'Carine Beyene',
        phone: '+237 670 12 34 56',
        email: 'c.beyene@rapidexpress.cm',
        type: 'PART_TIME',
        status: 'AVAILABLE',
        rating: 4.7,
        totalMissions: 98,
        vehicleId: 'VEH-005',
        vehiclePlate: 'LT-6643-D',
        joinedAt: '2022-01-08'
    },
    {
        id: 'DLV-006',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Antenne Akwa (Siège)',
        fullName: 'Patrick Abessolo',
        phone: '+237 694 78 90 12',
        email: 'p.abessolo@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'SUSPENDED',
        rating: 3.8,
        totalMissions: 67,
        joinedAt: '2022-04-20'
    },
    {
        id: 'DLV-007',
        agencyId: 'AGN-001',
        branchId: 'BRN-003',
        branchName: 'Antenne Makepe',
        fullName: 'Alice Manga',
        phone: '+237 681 90 12 34',
        email: 'a.manga@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'ON_MISSION',
        rating: 4.5,
        totalMissions: 145,
        activeMissionId: 'MSN-008',
        vehicleId: 'VEH-007',
        vehiclePlate: 'LT-9901-E',
        joinedAt: '2022-02-10'
    },
    {
        id: 'DLV-008',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Antenne Bonapriso',
        fullName: 'Thierry Ngatcha',
        phone: '+237 675 23 45 67',
        email: 't.ngatcha@rapidexpress.cm',
        type: 'PERMANENT',
        status: 'AVAILABLE',
        rating: 4.4,
        totalMissions: 201,
        vehicleId: 'VEH-008',
        vehiclePlate: 'LT-3317-F',
        joinedAt: '2022-06-01'
    }
];
const mockFreelancers = [
    {
        id: 'ASC-001',
        agencyId: 'AGN-001',
        freelancerId: 'FL-001',
        freelancerName: 'Duplex Fotso',
        phone: '+237 690 11 22 33',
        commissionRate: 12,
        assignedMissionsCount: 12,
        status: 'ACTIVE',
        associatedAt: '2026-02-15'
    },
    {
        id: 'ASC-002',
        agencyId: 'AGN-001',
        freelancerId: 'FL-002',
        freelancerName: 'Ange Kamga',
        phone: '+237 674 44 55 66',
        commissionRate: 10,
        assignedMissionsCount: 8,
        status: 'ACTIVE',
        associatedAt: '2026-03-01'
    },
    {
        id: 'ASC-003',
        agencyId: 'AGN-001',
        freelancerId: 'FL-003',
        freelancerName: 'Serge Eba',
        phone: '+237 698 77 88 99',
        commissionRate: 11,
        assignedMissionsCount: 0,
        status: 'PENDING',
        associatedAt: '2026-04-20'
    },
    {
        id: 'ASC-004',
        agencyId: 'AGN-001',
        freelancerId: 'FL-004',
        freelancerName: 'Brice Moundi',
        phone: '+237 650 00 11 22',
        commissionRate: 10,
        assignedMissionsCount: 23,
        status: 'TERMINATED',
        associatedAt: '2025-10-01',
        endedAt: '2026-01-31'
    }
];
const mockContracts = [
    {
        id: 'CTR-001',
        agencyId: 'AGN-001',
        delivererId: 'DLV-001',
        delivererName: 'Jean-Paul Essomba',
        type: 'PERMANENT_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2021-03-20',
        remunerationType: 'MONTHLY_SALARY',
        rate: 120000,
        currency: 'XAF'
    },
    {
        id: 'CTR-002',
        agencyId: 'AGN-001',
        delivererId: 'DLV-002',
        delivererName: 'Martin Mbarga',
        type: 'PERMANENT_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2021-05-10',
        remunerationType: 'MONTHLY_SALARY',
        rate: 115000,
        currency: 'XAF'
    },
    {
        id: 'CTR-003',
        agencyId: 'AGN-001',
        delivererId: 'DLV-003',
        delivererName: 'Mireille Atangana',
        type: 'PERMANENT_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2021-07-01',
        remunerationType: 'MIXED_SALARY_BONUS',
        rate: 130000,
        currency: 'XAF'
    },
    {
        id: 'CTR-004',
        agencyId: 'AGN-001',
        delivererId: 'DLV-005',
        delivererName: 'Carine Beyene',
        type: 'PART_TIME_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2022-01-08',
        endDate: '2026-12-31',
        remunerationType: 'FIXED_PER_DELIVERY',
        rate: 800,
        currency: 'XAF'
    },
    {
        id: 'CTR-005',
        agencyId: 'AGN-001',
        delivererId: 'DLV-006',
        delivererName: 'Patrick Abessolo',
        type: 'PERMANENT_EMPLOYEE',
        status: 'TERMINATED',
        startDate: '2022-04-20',
        endDate: '2026-03-15',
        remunerationType: 'MONTHLY_SALARY',
        rate: 100000,
        currency: 'XAF'
    },
    {
        id: 'CTR-006',
        agencyId: 'AGN-001',
        delivererId: 'DLV-007',
        delivererName: 'Alice Manga',
        type: 'PERMANENT_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2022-02-10',
        remunerationType: 'MIXED_SALARY_BONUS',
        rate: 118000,
        currency: 'XAF'
    },
    {
        id: 'CTR-007',
        agencyId: 'AGN-001',
        delivererId: 'DLV-008',
        delivererName: 'Thierry Ngatcha',
        type: 'PERMANENT_EMPLOYEE',
        status: 'ACTIVE',
        startDate: '2022-06-01',
        remunerationType: 'MONTHLY_SALARY',
        rate: 112000,
        currency: 'XAF'
    }
];
const mockVehicles = [
    {
        id: 'VEH-001',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-4521-A',
        model: 'Yamaha FZ25',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-001',
        assignedDelivererName: 'Jean-Paul Essomba',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-02-10'
    },
    {
        id: 'VEH-002',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-8832-B',
        model: 'Honda CB125F',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-002',
        assignedDelivererName: 'Martin Mbarga',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-01-22'
    },
    {
        id: 'VEH-003',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-1145-C',
        model: 'Lifan KP150',
        type: 'MOTORCYCLE',
        status: 'AVAILABLE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-03-05'
    },
    {
        id: 'VEH-004',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-2210-C',
        model: 'Suzuki GN125',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-003',
        assignedDelivererName: 'Mireille Atangana',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        lastMaintenanceDate: '2026-02-28'
    },
    {
        id: 'VEH-005',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-6643-D',
        model: 'Bajaj Boxer',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-005',
        assignedDelivererName: 'Carine Beyene',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        lastMaintenanceDate: '2026-03-18'
    },
    {
        id: 'VEH-006',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-3390-E',
        model: 'Yamaha Crypton',
        type: 'MOTORCYCLE',
        status: 'IN_MAINTENANCE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        lastMaintenanceDate: '2026-04-15'
    },
    {
        id: 'VEH-007',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-9901-E',
        model: 'Honda Wave',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-007',
        assignedDelivererName: 'Alice Manga',
        branchId: 'BRN-003',
        branchName: 'Makepe',
        lastMaintenanceDate: '2026-01-30'
    },
    {
        id: 'VEH-008',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-3317-F',
        model: 'Yamaha FZ-S',
        type: 'MOTORCYCLE',
        status: 'IN_USE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        assignedDelivererId: 'DLV-008',
        assignedDelivererName: 'Thierry Ngatcha',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        lastMaintenanceDate: '2026-03-01'
    },
    {
        id: 'VEH-009',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-7712-G',
        model: 'Suzuki Every',
        type: 'CAR',
        status: 'AVAILABLE',
        maxWeightKg: 500,
        maxVolumeM3: 3.5,
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-02-20'
    },
    {
        id: 'VEH-010',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-5540-H',
        model: 'Toyota HiAce',
        type: 'CAR',
        status: 'AVAILABLE',
        maxWeightKg: 800,
        maxVolumeM3: 5.0,
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-04-01'
    },
    {
        id: 'VEH-011',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-4429-I',
        model: 'Mitsubishi L300',
        type: 'CAR',
        status: 'IN_MAINTENANCE',
        maxWeightKg: 700,
        maxVolumeM3: 4.2,
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        lastMaintenanceDate: '2026-04-22'
    },
    {
        id: 'VEH-012',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-8801-J',
        model: 'Isuzu NPR',
        type: 'TRUCK_LIGHT',
        status: 'AVAILABLE',
        maxWeightKg: 3000,
        maxVolumeM3: 20.0,
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2026-01-15'
    },
    {
        id: 'VEH-013',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-2270-K',
        model: 'Isuzu ELF',
        type: 'TRUCK_LIGHT',
        status: 'AVAILABLE',
        maxWeightKg: 2500,
        maxVolumeM3: 18.0,
        branchId: 'BRN-003',
        branchName: 'Makepe',
        lastMaintenanceDate: '2026-03-25'
    },
    {
        id: 'VEH-014',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-0033-L',
        model: 'Yamaha NMAX',
        type: 'MOTORCYCLE',
        status: 'AVAILABLE',
        maxWeightKg: 50,
        maxVolumeM3: 0.3,
        branchId: 'BRN-003',
        branchName: 'Makepe'
    },
    {
        id: 'VEH-015',
        agencyId: 'AGN-001',
        registrationNumber: 'LT-5591-M',
        model: 'TVS Apache',
        type: 'MOTORCYCLE',
        status: 'RETIRED',
        maxWeightKg: 40,
        maxVolumeM3: 0.25,
        branchId: 'BRN-001',
        branchName: 'Akwa',
        lastMaintenanceDate: '2025-11-30'
    }
];
const mockMissions = [
    {
        id: 'MSN-001',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0441',
        delivererId: 'DLV-001',
        delivererName: 'Jean-Paul Essomba',
        vehiclePlate: 'LT-4521-A',
        status: 'DELIVERED',
        priority: 'HIGH',
        senderName: 'CFAO Motors',
        recipientName: 'Bertrand Eloundou',
        recipientPhone: '+237 699 00 11 22',
        pickupAddress: 'Rue Drouot, Akwa',
        deliveryAddress: 'Cité SIC, Bépanda',
        scheduledPickupAt: '2026-04-28T08:00',
        scheduledDeliveryAt: '2026-04-28T10:00',
        actualPickupAt: '2026-04-28T08:12',
        actualDeliveryAt: '2026-04-28T09:47',
        packagesCount: 2,
        totalWeightKg: 4.5,
        sellingPrice: 3500,
        currency: 'XAF',
        createdAt: '2026-04-28T07:30'
    },
    {
        id: 'MSN-002',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        manifestNumber: 'MAN-2026-0440',
        delivererId: 'DLV-003',
        delivererName: 'Mireille Atangana',
        vehiclePlate: 'LT-2210-C',
        status: 'DELIVERED',
        priority: 'NORMAL',
        senderName: 'Orange Cameroun',
        recipientName: 'Nadine Fouda',
        recipientPhone: '+237 670 22 33 44',
        pickupAddress: 'Bd de la Liberté, Bonapriso',
        deliveryAddress: 'Quartier Ange Raphaël',
        scheduledPickupAt: '2026-04-28T09:00',
        scheduledDeliveryAt: '2026-04-28T11:30',
        actualPickupAt: '2026-04-28T09:05',
        actualDeliveryAt: '2026-04-28T11:10',
        packagesCount: 1,
        totalWeightKg: 1.2,
        sellingPrice: 2000,
        currency: 'XAF',
        createdAt: '2026-04-28T08:00'
    },
    {
        id: 'MSN-003',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0439',
        status: 'PENDING',
        priority: 'URGENT',
        senderName: 'Pharmacie Centrale',
        recipientName: 'Dr. Sylvain Kouam',
        recipientPhone: '+237 655 44 55 66',
        pickupAddress: 'Rue Joss, Akwa',
        deliveryAddress: 'Hôpital Général de Douala',
        scheduledPickupAt: '2026-04-28T14:00',
        scheduledDeliveryAt: '2026-04-28T15:00',
        packagesCount: 1,
        totalWeightKg: 0.8,
        sellingPrice: 5000,
        currency: 'XAF',
        createdAt: '2026-04-28T13:00'
    },
    {
        id: 'MSN-004',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0438',
        status: 'ASSIGNED',
        priority: 'NORMAL',
        delivererId: 'DLV-008',
        delivererName: 'Thierry Ngatcha',
        vehiclePlate: 'LT-3317-F',
        senderName: 'SOCAM',
        recipientName: 'Rachel Ngo',
        recipientPhone: '+237 694 66 77 88',
        pickupAddress: 'Port de Douala, Zone industrielle',
        deliveryAddress: 'Rue des Palmiers, Bonanjo',
        scheduledPickupAt: '2026-04-28T15:00',
        scheduledDeliveryAt: '2026-04-28T17:00',
        packagesCount: 3,
        totalWeightKg: 12.5,
        sellingPrice: 7500,
        currency: 'XAF',
        createdAt: '2026-04-28T12:00'
    },
    {
        id: 'MSN-005',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0437',
        delivererId: 'DLV-002',
        delivererName: 'Martin Mbarga',
        vehiclePlate: 'LT-8832-B',
        status: 'IN_TRANSIT',
        priority: 'HIGH',
        senderName: 'Jumbo Score Akwa',
        recipientName: 'Madeleine Biyong',
        recipientPhone: '+237 675 88 99 00',
        pickupAddress: 'Supermarché Jumbo, Akwa',
        deliveryAddress: 'Rue Prince Bell, Deido',
        scheduledPickupAt: '2026-04-28T10:30',
        scheduledDeliveryAt: '2026-04-28T12:00',
        actualPickupAt: '2026-04-28T10:45',
        packagesCount: 4,
        totalWeightKg: 8.0,
        sellingPrice: 4500,
        currency: 'XAF',
        createdAt: '2026-04-28T09:30'
    },
    {
        id: 'MSN-006',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        manifestNumber: 'MAN-2026-0436',
        delivererId: 'DLV-005',
        delivererName: 'Carine Beyene',
        vehiclePlate: 'LT-6643-D',
        status: 'IN_TRANSIT',
        priority: 'NORMAL',
        senderName: 'Librairie des Peuples Noirs',
        recipientName: 'Josiane Kamto',
        recipientPhone: '+237 650 01 12 23',
        pickupAddress: 'Av. Kennedy, Bonapriso',
        deliveryAddress: 'École Publique Makepe',
        scheduledPickupAt: '2026-04-28T11:00',
        scheduledDeliveryAt: '2026-04-28T13:00',
        actualPickupAt: '2026-04-28T11:20',
        packagesCount: 2,
        totalWeightKg: 5.5,
        sellingPrice: 3000,
        currency: 'XAF',
        createdAt: '2026-04-28T10:00'
    },
    {
        id: 'MSN-007',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0435',
        status: 'AT_HUB',
        priority: 'NORMAL',
        targetHubId: 'HUB-001',
        targetHubName: 'Hub Central Akwa',
        senderName: 'Express Shipping CI',
        recipientName: 'Patrice Nzié',
        recipientPhone: '+237 691 23 45 00',
        pickupAddress: 'Gare Voyageurs de Bonabéri',
        deliveryAddress: 'Rue Njo-Njo, Douala',
        scheduledPickupAt: '2026-04-27T14:00',
        actualPickupAt: '2026-04-27T14:30',
        packagesCount: 1,
        totalWeightKg: 2.3,
        sellingPrice: 2500,
        currency: 'XAF',
        createdAt: '2026-04-27T12:00'
    },
    {
        id: 'MSN-008',
        agencyId: 'AGN-001',
        branchId: 'BRN-003',
        branchName: 'Makepe',
        manifestNumber: 'MAN-2026-0434',
        delivererId: 'DLV-007',
        delivererName: 'Alice Manga',
        vehiclePlate: 'LT-9901-E',
        status: 'IN_TRANSIT',
        priority: 'LOW',
        senderName: 'Ets. Ngando & Fils',
        recipientName: 'Claudette Nkengne',
        recipientPhone: '+237 677 34 45 56',
        pickupAddress: 'Carrefour Elf Makepe',
        deliveryAddress: 'Résidence Les Cocotiers, Logbessou',
        scheduledPickupAt: '2026-04-28T09:00',
        scheduledDeliveryAt: '2026-04-28T11:00',
        actualPickupAt: '2026-04-28T09:15',
        packagesCount: 2,
        totalWeightKg: 6.8,
        sellingPrice: 3200,
        currency: 'XAF',
        createdAt: '2026-04-28T08:00'
    },
    {
        id: 'MSN-009',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0433',
        status: 'DELIVERED',
        priority: 'NORMAL',
        delivererId: 'DLV-001',
        delivererName: 'Jean-Paul Essomba',
        senderName: 'Total Energies Akwa',
        recipientName: 'Entreprise Bamileke SARL',
        recipientPhone: '+237 699 56 67 78',
        pickupAddress: 'Station Total, Carrefour des Anciens Combattants',
        deliveryAddress: 'Marché Nkoulouloun',
        scheduledPickupAt: '2026-04-27T08:00',
        actualPickupAt: '2026-04-27T08:05',
        actualDeliveryAt: '2026-04-27T09:30',
        packagesCount: 5,
        totalWeightKg: 22.0,
        sellingPrice: 12000,
        currency: 'XAF',
        createdAt: '2026-04-27T07:00'
    },
    {
        id: 'MSN-010',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        manifestNumber: 'MAN-2026-0432',
        status: 'CANCELLED',
        priority: 'NORMAL',
        senderName: 'Boutique Elegance Mode',
        recipientName: 'Sylvie Etoundi',
        recipientPhone: '+237 655 78 89 90',
        pickupAddress: 'Rue des Écoles, Bonapriso',
        deliveryAddress: 'Immeuble La Grâce, Bali',
        scheduledPickupAt: '2026-04-27T16:00',
        packagesCount: 1,
        totalWeightKg: 1.5,
        sellingPrice: 2000,
        currency: 'XAF',
        createdAt: '2026-04-27T14:00'
    },
    {
        id: 'MSN-011',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0431',
        status: 'DELIVERED',
        priority: 'HIGH',
        delivererId: 'DLV-008',
        delivererName: 'Thierry Ngatcha',
        senderName: 'Imprimerie Nationale du Cameroun',
        recipientName: 'Mairie de Douala III',
        recipientPhone: '+237 233 40 01 50',
        pickupAddress: 'Immeuble INC, Bonanjo',
        deliveryAddress: 'Hôtel de Ville de Douala III',
        scheduledPickupAt: '2026-04-26T09:00',
        actualPickupAt: '2026-04-26T09:10',
        actualDeliveryAt: '2026-04-26T10:45',
        packagesCount: 8,
        totalWeightKg: 35.0,
        sellingPrice: 18000,
        currency: 'XAF',
        createdAt: '2026-04-26T08:00'
    },
    {
        id: 'MSN-012',
        agencyId: 'AGN-001',
        branchId: 'BRN-003',
        branchName: 'Makepe',
        manifestNumber: 'MAN-2026-0430',
        status: 'AT_HUB',
        priority: 'LOW',
        targetHubId: 'HUB-002',
        targetHubName: 'Hub Bonapriso',
        senderName: 'Chaussures Doualaises',
        recipientName: 'Edmond Tchoua',
        recipientPhone: '+237 677 90 01 12',
        pickupAddress: 'Carrefour Elf Makepe',
        deliveryAddress: 'Avenue Ahmadou Ahidjo',
        scheduledPickupAt: '2026-04-27T11:00',
        actualPickupAt: '2026-04-27T11:30',
        packagesCount: 2,
        totalWeightKg: 3.5,
        sellingPrice: 2800,
        currency: 'XAF',
        createdAt: '2026-04-27T09:00'
    },
    {
        id: 'MSN-013',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0429',
        status: 'DELIVERED',
        priority: 'URGENT',
        delivererId: 'DLV-003',
        delivererName: 'Mireille Atangana',
        senderName: 'Clinique de la Caisse',
        recipientName: 'Armand Baloum',
        recipientPhone: '+237 681 12 23 34',
        pickupAddress: 'Clinique de la Caisse, Bonapriso',
        deliveryAddress: 'Quartier New Bell',
        scheduledPickupAt: '2026-04-26T07:00',
        actualPickupAt: '2026-04-26T07:02',
        actualDeliveryAt: '2026-04-26T07:52',
        packagesCount: 1,
        totalWeightKg: 0.5,
        sellingPrice: 6000,
        currency: 'XAF',
        createdAt: '2026-04-26T06:30'
    },
    {
        id: 'MSN-014',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Bonapriso',
        manifestNumber: 'MAN-2026-0428',
        status: 'FAILED',
        priority: 'NORMAL',
        delivererId: 'DLV-005',
        delivererName: 'Carine Beyene',
        senderName: 'Beauty House Douala',
        recipientName: 'Christelle Nguema',
        recipientPhone: '+237 694 34 45 56',
        pickupAddress: 'Rue Leclerc, Bonapriso',
        deliveryAddress: 'Résidence Palmier, Logpom',
        scheduledPickupAt: '2026-04-25T15:00',
        actualPickupAt: '2026-04-25T15:20',
        packagesCount: 1,
        totalWeightKg: 2.0,
        sellingPrice: 3500,
        currency: 'XAF',
        createdAt: '2026-04-25T13:00'
    },
    {
        id: 'MSN-015',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Akwa',
        manifestNumber: 'MAN-2026-0427',
        status: 'DRAFT',
        priority: 'NORMAL',
        senderName: 'Cabinet Juridique Mbendé',
        recipientName: 'Tribunal de Grande Instance',
        recipientPhone: '+237 233 42 34 56',
        pickupAddress: 'Immeuble Mbendé, Bonanjo',
        deliveryAddress: 'TGI du Wouri, Bonanjo',
        scheduledPickupAt: '2026-04-29T09:00',
        packagesCount: 1,
        totalWeightKg: 1.8,
        sellingPrice: 2500,
        currency: 'XAF',
        createdAt: '2026-04-28T16:00'
    }
];
const mockHubs = [
    {
        id: 'HUB-001',
        agencyId: 'AGN-001',
        branchId: 'BRN-001',
        branchName: 'Antenne Akwa (Siège)',
        name: 'Hub Central Akwa',
        address: '12 Rue Bebey Eyidi, Akwa',
        city: 'Douala',
        capacity: 50,
        currentOccupancy: 32,
        maxRetentionDays: 3,
        status: 'OPEN',
        managerName: 'Hyacinthe Nkoudou',
        managerPhone: '+237 699 10 20 30',
        openingHours: 'Lun–Sam 07h00–20h00'
    },
    {
        id: 'HUB-002',
        agencyId: 'AGN-001',
        branchId: 'BRN-002',
        branchName: 'Antenne Bonapriso',
        name: 'Hub Bonapriso',
        address: 'Av. Charles de Gaulle, Bonapriso',
        city: 'Douala',
        capacity: 30,
        currentOccupancy: 9,
        maxRetentionDays: 3,
        status: 'OPEN',
        managerName: 'Félicité Ngom',
        managerPhone: '+237 674 40 50 60',
        openingHours: 'Lun–Ven 08h00–19h00'
    },
    {
        id: 'HUB-003',
        agencyId: 'AGN-001',
        branchId: 'BRN-003',
        branchName: 'Antenne Makepe',
        name: 'Hub Makepe Logistique',
        address: 'Zone Industrielle Makepe, Entrepôt B',
        city: 'Douala',
        capacity: 40,
        currentOccupancy: 39,
        maxRetentionDays: 2,
        status: 'FULL',
        managerName: 'Léopold Simo',
        managerPhone: '+237 650 70 80 90',
        openingHours: 'Lun–Sam 07h30–18h30'
    }
];
const mockHubParcels = [
    {
        id: 'HPR-001',
        hubId: 'HUB-001',
        hubName: 'Hub Central Akwa',
        missionId: 'MSN-007',
        manifestNumber: 'MAN-2026-0435',
        trackingCode: 'TRK-20260427-0035',
        recipientName: 'Patrice Nzié',
        depositedAt: '2026-04-27T16:00',
        expectedWithdrawalDeadline: '2026-04-30T16:00',
        status: 'DEPOSITED'
    },
    {
        id: 'HPR-002',
        hubId: 'HUB-002',
        hubName: 'Hub Bonapriso',
        missionId: 'MSN-012',
        manifestNumber: 'MAN-2026-0430',
        trackingCode: 'TRK-20260427-0030',
        recipientName: 'Edmond Tchoua',
        depositedAt: '2026-04-27T14:00',
        expectedWithdrawalDeadline: '2026-04-30T14:00',
        status: 'DEPOSITED'
    },
    {
        id: 'HPR-003',
        hubId: 'HUB-001',
        hubName: 'Hub Central Akwa',
        missionId: 'MSN-020',
        manifestNumber: 'MAN-2026-0420',
        trackingCode: 'TRK-20260426-0020',
        recipientName: 'Aurélie Bella',
        depositedAt: '2026-04-26T10:00',
        expectedWithdrawalDeadline: '2026-04-29T10:00',
        withdrawnAt: '2026-04-27T09:00',
        withdrawnBy: 'Aurélie Bella (CNI: 123456)',
        status: 'WITHDRAWN'
    },
    {
        id: 'HPR-004',
        hubId: 'HUB-003',
        hubName: 'Hub Makepe Logistique',
        missionId: 'MSN-021',
        manifestNumber: 'MAN-2026-0410',
        trackingCode: 'TRK-20260425-0010',
        recipientName: 'Gérard Nyamsi',
        depositedAt: '2026-04-25T11:00',
        expectedWithdrawalDeadline: '2026-04-27T11:00',
        status: 'EXPIRED'
    },
    {
        id: 'HPR-005',
        hubId: 'HUB-001',
        hubName: 'Hub Central Akwa',
        missionId: 'MSN-022',
        manifestNumber: 'MAN-2026-0405',
        trackingCode: 'TRK-20260428-0042',
        recipientName: 'Florence Zang',
        depositedAt: '2026-04-28T08:30',
        expectedWithdrawalDeadline: '2026-05-01T08:30',
        status: 'DEPOSITED'
    }
];
const mockBillingPolicies = [
    {
        id: 'POL-001',
        agencyId: 'AGN-001',
        name: 'Tarif Standard 2025',
        description: 'Politique tarifaire par défaut applicable à toutes les livraisons standards.',
        isDefault: true,
        status: 'ACTIVE',
        validFrom: '2025-01-01',
        basePrice: 1500,
        perKmRate: 150,
        perKgRate: 200,
        currency: 'XAF',
        rulesCount: 5,
        promotionsCount: 2
    },
    {
        id: 'POL-002',
        agencyId: 'AGN-001',
        name: 'Express Premium',
        description: 'Tarification pour livraisons urgentes et express, avec surcharge horaire nuit.',
        isDefault: false,
        status: 'ACTIVE',
        validFrom: '2025-03-01',
        basePrice: 3000,
        perKmRate: 250,
        perKgRate: 300,
        currency: 'XAF',
        rulesCount: 8,
        promotionsCount: 0
    },
    {
        id: 'POL-003',
        agencyId: 'AGN-001',
        name: 'Tarif Entreprise Q1-2024',
        description: 'Politique tarifaire archivée du premier trimestre 2024.',
        isDefault: false,
        status: 'ARCHIVED',
        validFrom: '2024-01-01',
        validTo: '2024-12-31',
        basePrice: 1200,
        perKmRate: 120,
        perKgRate: 180,
        currency: 'XAF',
        rulesCount: 4,
        promotionsCount: 3
    }
];
const mockCommissions = [
    {
        id: 'COM-001',
        agencyId: 'AGN-001',
        delivererId: 'DLV-001',
        delivererName: 'Jean-Paul Essomba',
        missionId: 'MSN-001',
        manifestNumber: 'MAN-2026-0441',
        amount: 350,
        currency: 'XAF',
        status: 'VALIDATED',
        calculatedAt: '2026-04-28T10:00'
    },
    {
        id: 'COM-002',
        agencyId: 'AGN-001',
        delivererId: 'DLV-003',
        delivererName: 'Mireille Atangana',
        missionId: 'MSN-002',
        manifestNumber: 'MAN-2026-0440',
        amount: 200,
        currency: 'XAF',
        status: 'CALCULATED',
        calculatedAt: '2026-04-28T11:15'
    },
    {
        id: 'COM-003',
        agencyId: 'AGN-001',
        delivererId: 'DLV-001',
        delivererName: 'Jean-Paul Essomba',
        missionId: 'MSN-009',
        manifestNumber: 'MAN-2026-0433',
        amount: 1200,
        currency: 'XAF',
        status: 'PAID',
        calculatedAt: '2026-04-27T09:35',
        paidAt: '2026-04-27T18:00'
    },
    {
        id: 'COM-004',
        agencyId: 'AGN-001',
        delivererId: 'DLV-008',
        delivererName: 'Thierry Ngatcha',
        missionId: 'MSN-011',
        manifestNumber: 'MAN-2026-0431',
        amount: 1800,
        currency: 'XAF',
        status: 'PAID',
        calculatedAt: '2026-04-26T10:50',
        paidAt: '2026-04-26T18:00'
    },
    {
        id: 'COM-005',
        agencyId: 'AGN-001',
        delivererId: 'DLV-005',
        delivererName: 'Carine Beyene',
        missionId: 'MSN-014',
        manifestNumber: 'MAN-2026-0428',
        amount: 350,
        currency: 'XAF',
        status: 'DISPUTED',
        calculatedAt: '2026-04-25T16:00'
    },
    {
        id: 'COM-006',
        agencyId: 'AGN-001',
        delivererId: 'DLV-003',
        delivererName: 'Mireille Atangana',
        missionId: 'MSN-013',
        manifestNumber: 'MAN-2026-0429',
        amount: 600,
        currency: 'XAF',
        status: 'PAID',
        calculatedAt: '2026-04-26T07:55',
        paidAt: '2026-04-26T18:00'
    }
];
const missionStatusCounts = {
    DRAFT: mockMissions.filter((m)=>m.status === 'DRAFT').length,
    PENDING: mockMissions.filter((m)=>m.status === 'PENDING').length,
    ASSIGNED: mockMissions.filter((m)=>m.status === 'ASSIGNED').length,
    IN_TRANSIT: mockMissions.filter((m)=>m.status === 'IN_TRANSIT').length,
    AT_HUB: mockMissions.filter((m)=>m.status === 'AT_HUB').length,
    DELIVERED: mockMissions.filter((m)=>m.status === 'DELIVERED').length,
    FAILED: mockMissions.filter((m)=>m.status === 'FAILED').length,
    CANCELLED: mockMissions.filter((m)=>m.status === 'CANCELLED').length
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/Drawer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Drawer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Drawer({ open, onClose, title, description, children, footer, size = 'md' }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Drawer.useEffect": ()=>{
            setMounted(true);
        }
    }["Drawer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Drawer.useEffect": ()=>{
            const handler = {
                "Drawer.useEffect.handler": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["Drawer.useEffect.handler"];
            document.addEventListener('keydown', handler);
            return ({
                "Drawer.useEffect": ()=>document.removeEventListener('keydown', handler)
            })["Drawer.useEffect"];
        }
    }["Drawer.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Drawer.useEffect": ()=>{
            if (open) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = '';
            return ({
                "Drawer.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Drawer.useEffect"];
        }
    }["Drawer.useEffect"], [
        open
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fixed inset-0 bg-black/30 z-[200] transition-opacity duration-300', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/forms/Drawer.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fixed top-0 right-0 h-full bg-white z-[300] shadow-2xl border-l border-gray-200', 'overflow-y-auto transition-transform duration-300 ease-out', size === 'lg' ? 'w-[640px]' : 'w-[520px]', open ? 'translate-x-0' : 'translate-x-full'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-20 bg-white flex items-start justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/Drawer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-0.5",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/Drawer.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/Drawer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "ml-4 p-1.5 hover:bg-gray-100 rounded-md transition-colors flex-shrink-0 mt-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 17,
                                        className: "text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/Drawer.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/Drawer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky bottom-0 z-20 bg-white px-6 py-4 border-t border-gray-100 flex-shrink-0",
                            children: footer
                        }, void 0, false, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/Drawer.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/forms/Drawer.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true), document.body);
}
_s(Drawer, "1HETueMQFHnQEekrfLFLB/gw0JE=");
_c = Drawer;
var _c;
__turbopack_context__.k.register(_c, "Drawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/CreateBranchForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBranchForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/Drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const cls = {
    input: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white placeholder:text-gray-400 transition',
    select: 'w-full h-10 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 bg-white transition cursor-pointer',
    label: 'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5',
    section: 'pt-5 border-t border-gray-100 space-y-4 first:border-0 first:pt-0',
    sectionTitle: 'text-sm font-semibold text-gray-800 mb-3'
};
const initialState = {
    name: '',
    address: '',
    city: 'Douala',
    openingHours: 'Lun–Sam 07h00–20h00',
    managerId: '',
    isHeadquarters: false,
    status: 'OPEN'
};
function CreateBranchForm({ open, onClose }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const update = (field, value)=>setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
            setSuccess(true);
            setTimeout(()=>{
                setSuccess(false);
                setForm(initialState);
                onClose();
            }, 1200);
        }, 900);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: onClose,
        title: "Créer une antenne",
        description: "Nouvelle antenne rattachée à Rapid Express Douala",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-5 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cls.section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cls.sectionTitle,
                                    children: "Identité de l'antenne"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: [
                                                "Nom de l'antenne ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: form.name,
                                            onChange: (e)=>update('name', e.target.value),
                                            placeholder: "ex: Antenne Bonanjo",
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: [
                                                        "Ville ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "text",
                                                    value: form.city,
                                                    onChange: (e)=>update('city', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: "Statut"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.status,
                                                    onChange: (e)=>update('status', e.target.value),
                                                    className: cls.select,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "OPEN",
                                                            children: "Ouverte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "TEMPORARILY_CLOSED",
                                                            children: "Fermée temp."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: [
                                                "Adresse complète ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: form.address,
                                            onChange: (e)=>update('address', e.target.value),
                                            placeholder: "ex: 12 Rue du Commerce, Bonanjo",
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cls.section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cls.sectionTitle,
                                    children: "Opérationnel"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: "Horaires d'ouverture"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.openingHours,
                                            onChange: (e)=>update('openingHours', e.target.value),
                                            placeholder: "ex: Lun–Sam 07h00–20h00",
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-1",
                                            children: "Format libre — ex: Lun–Ven 08h00–18h00"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: "Responsable de l'antenne"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.managerId,
                                            onChange: (e)=>update('managerId', e.target.value),
                                            className: cls.select,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Sélectionner un responsable (optionnel)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].filter((d)=>d.status !== 'SUSPENDED' && d.status !== 'INACTIVE').map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: d.id,
                                                        children: d.fullName
                                                    }, d.id, false, {
                                                        fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg cursor-pointer",
                                    onClick: ()=>update('isHeadquarters', !form.isHeadquarters),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${form.isHeadquarters ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`,
                                            children: form.isHeadquarters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 13,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                lineNumber: 141,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: "Définir comme siège social"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Cette antenne sera le siège principal de l'agence"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 border-t border-gray-200 px-6 py-4 flex justify-end gap-3 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors",
                            children: "Annuler"
                        }, void 0, false, {
                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submitting || success,
                            className: `px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 min-w-28 justify-center ${success ? 'bg-emerald-500' : 'bg-orange-500 hover:bg-orange-600'} disabled:opacity-70`,
                            children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    " Création..."
                                ]
                            }, void 0, true) : success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/CreateBranchForm.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    " Créée !"
                                ]
                            }, void 0, true) : 'Créer l\'antenne'
                        }, void 0, false, {
                            fileName: "[project]/components/forms/CreateBranchForm.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/CreateBranchForm.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forms/CreateBranchForm.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forms/CreateBranchForm.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(CreateBranchForm, "dMmwpqYpfo4XbOG9Xp+7amJSKTk=");
_c = CreateBranchForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBranchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/BranchDetailDrawer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BranchDetailDrawer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/Drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Stat({ label, value, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-bold text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/BranchDetailDrawer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 mt-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/BranchDetailDrawer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-gray-400",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/BranchDetailDrawer.tsx",
                lineNumber: 19,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BranchDetailDrawer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Stat;
function InfoRow({ label, value, icon: Icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3 py-3 border-b border-gray-100 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7 h-7 rounded-md bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 13,
                    className: "text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BranchDetailDrawer.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-400 uppercase tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-800 mt-0.5",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BranchDetailDrawer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BranchDetailDrawer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = InfoRow;
function BranchDetailDrawer({ branch, open, onClose }) {
    if (!branch) return null;
    const branchDeliverers = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].filter((d)=>d.branchId === branch.id);
    const branchVehicles = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.branchId === branch.id);
    const branchMissions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMissions"].filter((m)=>m.branchId === branch.id);
    const activeMissions = branchMissions.filter((m)=>[
            'IN_TRANSIT',
            'ASSIGNED',
            'PENDING'
        ].includes(m.status)).length;
    const deliveredToday = branchMissions.filter((m)=>m.status === 'DELIVERED').length;
    const statusLabel = {
        OPEN: 'Ouverte',
        TEMPORARILY_CLOSED: 'Fermée temporairement',
        PERMANENTLY_CLOSED: 'Fermée définitivement'
    }[branch.status];
    const statusColor = {
        OPEN: 'bg-emerald-50 text-emerald-700',
        TEMPORARILY_CLOSED: 'bg-orange-50 text-orange-700',
        PERMANENTLY_CLOSED: 'bg-red-50 text-red-700'
    }[branch.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: onClose,
        title: branch.name,
        description: `${branch.city} · ${branch.id}`,
        size: "lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-6 py-3 flex items-center gap-3 border-b border-gray-100 ${branch.status === 'OPEN' ? 'bg-emerald-50' : 'bg-orange-50'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-sm font-medium ${branch.status === 'OPEN' ? 'text-emerald-700' : 'text-orange-700'}`,
                            children: [
                                branch.status === 'OPEN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 70
                                }, this),
                                statusLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        branch.isHeadquarters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded uppercase tracking-wide",
                            children: "Siège"
                        }, void 0, false, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5 grid grid-cols-4 gap-4 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            label: "Livreurs",
                            value: branchDeliverers.length
                        }, void 0, false, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            label: "Véhicules",
                            value: branchVehicles.length
                        }, void 0, false, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            label: "Missions actives",
                            value: activeMissions
                        }, void 0, false, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            label: "Livrées (total)",
                            value: deliveredToday
                        }, void 0, false, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                    children: "Informations"
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-xl px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            label: "Adresse",
                                            value: `${branch.address}, ${branch.city}`,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            label: "Horaires",
                                            value: branch.openingHours,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        branch.managerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            label: "Responsable",
                                            value: branch.managerName,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            label: "Créée le",
                                            value: new Date(branch.createdAt).toLocaleDateString('fr-FR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            }),
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"]
                                        }, void 0, false, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                    children: [
                                        "Livreurs rattachés (",
                                        branchDeliverers.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                branchDeliverers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 italic",
                                    children: "Aucun livreur rattaché à cette antenne."
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden",
                                    children: branchDeliverers.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 px-5 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-orange-700 text-xs font-semibold",
                                                        children: d.fullName.split(' ').map((n)=>n[0]).join('').slice(0, 2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: d.fullName
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: d.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center gap-1.5 text-xs`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-1.5 h-1.5 rounded-full ${d.status === 'AVAILABLE' ? 'bg-emerald-500' : d.status === 'ON_MISSION' ? 'bg-blue-500' : d.status === 'SUSPENDED' ? 'bg-red-500' : 'bg-gray-300'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500",
                                                                        children: d.status === 'AVAILABLE' ? 'Disponible' : d.status === 'ON_MISSION' ? 'En mission' : d.status === 'OFFLINE' ? 'Hors ligne' : d.status === 'SUSPENDED' ? 'Suspendu' : 'Inactif'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    size: 11,
                                                                    className: "text-orange-400 fill-orange-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium text-gray-600",
                                                                    children: d.rating.toFixed(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, d.id, true, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                    children: [
                                        "Flotte de l'antenne (",
                                        branchVehicles.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                branchVehicles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 italic",
                                    children: "Aucun véhicule rattaché à cette antenne."
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden",
                                    children: branchVehicles.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 px-5 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                    size: 15,
                                                    className: "text-gray-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: v.model
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: v.registrationNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs px-2 py-0.5 rounded font-medium ${v.status === 'AVAILABLE' ? 'bg-emerald-50 text-emerald-700' : v.status === 'IN_USE' ? 'bg-blue-50 text-blue-700' : v.status === 'IN_MAINTENANCE' ? 'bg-orange-50 text-orange-700' : 'bg-gray-100 text-gray-400'}`,
                                                        children: v.status === 'AVAILABLE' ? 'Disponible' : v.status === 'IN_USE' ? 'En service' : v.status === 'IN_MAINTENANCE' ? 'Maintenance' : 'Retiré'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, v.id, true, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                    children: "Missions récentes"
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                branchMissions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 italic",
                                    children: "Aucune mission."
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden",
                                    children: branchMissions.slice(0, 5).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 px-5 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    size: 13,
                                                    className: "text-gray-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-900 truncate",
                                                            children: m.manifestNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 truncate",
                                                            children: [
                                                                m.recipientName,
                                                                " · ",
                                                                m.deliveryAddress
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 ${m.status === 'DELIVERED' ? 'bg-emerald-50 text-emerald-700' : m.status === 'IN_TRANSIT' ? 'bg-blue-50 text-blue-700' : m.status === 'CANCELLED' ? 'bg-gray-100 text-gray-500' : m.status === 'FAILED' ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'}`,
                                                    children: m.status === 'DELIVERED' ? 'Livrée' : m.status === 'IN_TRANSIT' ? 'En transit' : m.status === 'PENDING' ? 'En attente' : m.status === 'ASSIGNED' ? 'Assignée' : m.status === 'CANCELLED' ? 'Annulée' : m.status === 'FAILED' ? 'Échouée' : m.status
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchDetailDrawer.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BranchDetailDrawer.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BranchDetailDrawer.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BranchDetailDrawer.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c2 = BranchDetailDrawer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Stat");
__turbopack_context__.k.register(_c1, "InfoRow");
__turbopack_context__.k.register(_c2, "BranchDetailDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/branches/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BranchesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$CreateBranchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/CreateBranchForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BranchDetailDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BranchDetailDrawer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function BranchStatusBadge({ status }) {
    const map = {
        OPEN: 'bg-emerald-50 text-emerald-700',
        TEMPORARILY_CLOSED: 'bg-orange-50 text-orange-700',
        PERMANENTLY_CLOSED: 'bg-red-50 text-red-700'
    };
    const labels = {
        OPEN: 'Ouverte',
        TEMPORARILY_CLOSED: 'Fermée temporairement',
        PERMANENTLY_CLOSED: 'Fermée définitivement'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${map[status]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full ${status === 'OPEN' ? 'bg-emerald-500' : status === 'TEMPORARILY_CLOSED' ? 'bg-orange-500' : 'bg-red-500'}`
            }, void 0, false, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            labels[status]
        ]
    }, void 0, true, {
        fileName: "[project]/app/branches/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = BranchStatusBadge;
function BranchesPage() {
    _s();
    const [formOpen, setFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBranch, setSelectedBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailOpen, setDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openCount = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].filter((b)=>b.status === 'OPEN').length;
    const openDetail = (branch)=>{
        setSelectedBranch(branch);
        setDetailOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Antennes"
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].length,
                                    " antennes · ",
                                    openCount,
                                    " ouvertes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/branches/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFormOpen(true),
                        className: "inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            "Nouvelle antenne"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/branches/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: [
                    {
                        label: 'Antennes ouvertes',
                        value: openCount,
                        sub: `sur ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].length} au total`,
                        color: 'text-emerald-600'
                    },
                    {
                        label: 'Total livreurs',
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].reduce((s, b)=>s + b.deliverersCount, 0),
                        sub: 'rattachés aux antennes',
                        color: 'text-blue-600'
                    },
                    {
                        label: 'Siège social',
                        value: 'Akwa',
                        sub: '3 Rue Joss, Douala',
                        color: 'text-orange-600'
                    }
                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-2xl font-bold ${c.color}`,
                                children: c.value
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-700 mt-0.5",
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: c.sub
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.label, true, {
                        fileName: "[project]/app/branches/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>openDetail(branch),
                        className: "bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${branch.status === 'OPEN' ? 'bg-orange-50' : 'bg-gray-50'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                    size: 18,
                                                    className: branch.status === 'OPEN' ? 'text-orange-500' : 'text-gray-400'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/branches/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold text-gray-900",
                                                                children: branch.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/branches/page.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this),
                                                            branch.isHeadquarters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded uppercase tracking-wide",
                                                                children: "Siège"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/branches/page.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/branches/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-0.5",
                                                        children: branch.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/branches/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BranchStatusBadge, {
                                                status: branch.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    openDetail(branch);
                                                },
                                                className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                    size: 16,
                                                    className: "text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/branches/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 12,
                                                className: "text-gray-400 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    branch.address,
                                                    ", ",
                                                    branch.city
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 12,
                                                className: "text-gray-400 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: branch.openingHours
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    branch.managerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 12,
                                                className: "text-gray-400 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Responsable : ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-gray-700",
                                                        children: branch.managerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/branches/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-gray-100 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 13,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-700",
                                                        children: branch.deliverersCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/branches/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    " livreur",
                                                    branch.deliverersCount > 1 ? 's' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/branches/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Créée le ",
                                            new Date(branch.createdAt).toLocaleDateString('fr-FR')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/branches/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, branch.id, true, {
                        fileName: "[project]/app/branches/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$CreateBranchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: formOpen,
                onClose: ()=>setFormOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BranchDetailDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                branch: selectedBranch,
                open: detailOpen,
                onClose: ()=>setDetailOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/branches/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/branches/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(BranchesPage, "rakkcWyj0gJfzR+kAL+b/b0OZv0=");
_c1 = BranchesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BranchStatusBadge");
__turbopack_context__.k.register(_c1, "BranchesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_96c14d6f._.js.map