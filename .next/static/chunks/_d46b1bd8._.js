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
"[project]/app/staff/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StaffPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ── Badges ─────────────────────────────────────────────────
function DelivererStatusDot({ status }) {
    const map = {
        AVAILABLE: {
            dot: 'bg-emerald-500',
            label: 'Disponible'
        },
        ON_MISSION: {
            dot: 'bg-blue-500',
            label: 'En mission'
        },
        OFFLINE: {
            dot: 'bg-gray-300',
            label: 'Hors ligne'
        },
        SUSPENDED: {
            dot: 'bg-red-500',
            label: 'Suspendu'
        },
        INACTIVE: {
            dot: 'bg-gray-200',
            label: 'Inactif'
        }
    };
    const cfg = map[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`
            }, void 0, false, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-600",
                children: cfg.label
            }, void 0, false, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/staff/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = DelivererStatusDot;
function ContractStatusBadge({ status }) {
    const map = {
        ACTIVE: 'bg-emerald-50 text-emerald-700',
        SIGNED: 'bg-blue-50 text-blue-700',
        DRAFT: 'bg-gray-100 text-gray-600',
        TERMINATED: 'bg-red-50 text-red-700',
        EXPIRED: 'bg-gray-100 text-gray-500'
    };
    const labels = {
        ACTIVE: 'Actif',
        SIGNED: 'Signé',
        DRAFT: 'Brouillon',
        TERMINATED: 'Résilié',
        EXPIRED: 'Expiré'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 rounded text-xs font-medium ${map[status]}`,
        children: labels[status]
    }, void 0, false, {
        fileName: "[project]/app/staff/page.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_c1 = ContractStatusBadge;
function CommissionStatusBadge({ status }) {
    const map = {
        CALCULATED: 'bg-gray-100 text-gray-600',
        VALIDATED: 'bg-blue-50 text-blue-700',
        PAID: 'bg-emerald-50 text-emerald-700',
        DISPUTED: 'bg-orange-50 text-orange-700'
    };
    const labels = {
        CALCULATED: 'Calculée',
        VALIDATED: 'Validée',
        PAID: 'Payée',
        DISPUTED: 'Litige'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 rounded text-xs font-medium ${map[status]}`,
        children: labels[status]
    }, void 0, false, {
        fileName: "[project]/app/staff/page.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
_c2 = CommissionStatusBadge;
function AssociationStatusBadge({ status }) {
    const map = {
        ACTIVE: 'bg-emerald-50 text-emerald-700',
        PENDING: 'bg-orange-50 text-orange-700',
        PAUSED: 'bg-yellow-50 text-yellow-700',
        TERMINATED: 'bg-gray-100 text-gray-500'
    };
    const labels = {
        ACTIVE: 'Active',
        PENDING: 'En attente',
        PAUSED: 'Pausée',
        TERMINATED: 'Terminée'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-2 py-0.5 rounded text-xs font-medium ${map[status]}`,
        children: labels[status]
    }, void 0, false, {
        fileName: "[project]/app/staff/page.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_c3 = AssociationStatusBadge;
function StaffPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('deliverers');
    const tabs = [
        {
            id: 'deliverers',
            label: 'Livreurs',
            count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            id: 'contracts',
            label: 'Contrats',
            count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: 'commissions',
            label: 'Commissions',
            count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCommissions"].length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
        },
        {
            id: 'freelancers',
            label: 'Freelancers Associés',
            count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockFreelancers"].length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"]
        }
    ];
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
                                children: "Personnel"
                            }, void 0, false, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].length,
                                    " livreurs · ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].filter((c)=>c.status === 'ACTIVE').length,
                                    " contrats actifs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            "Enregistrer un livreur"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "-mb-px flex gap-6",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                tab.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-1.5 py-0.5 rounded text-xs ${activeTab === tab.id ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`,
                                    children: tab.count
                                }, void 0, false, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/staff/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            activeTab === 'deliverers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50 border-b border-gray-100 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Livreur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Antenne"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Statut"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Note"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Missions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Véhicule"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-50",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "table-row-hover cursor-pointer group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-700 text-xs font-semibold",
                                                            children: d.fullName.split(' ').map((n)=>n[0]).join('').slice(0, 2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/staff/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-gray-900",
                                                                children: d.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/staff/page.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400",
                                                                children: d.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/staff/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600",
                                                children: d.type === 'PERMANENT' ? 'Permanent' : d.type === 'PART_TIME' ? 'Partiel' : 'Freelancer'
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: d.branchName ?? '—'
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DelivererStatusDot, {
                                                status: d.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        size: 12,
                                                        className: "text-orange-400 fill-orange-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: d.rating.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-700",
                                                children: d.totalMissions
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3.5",
                                            children: d.vehiclePlate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700",
                                                children: d.vehiclePlate
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 italic",
                                                children: "Aucun"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/staff/page.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            activeTab === 'contracts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50 border-b border-gray-100 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Livreur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Rémunération"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Taux"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Début"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Fin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Statut"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-50",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockContracts"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "table-row-hover cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-gray-500",
                                                children: c.id
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: c.delivererName
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600",
                                                children: c.type === 'PERMANENT_EMPLOYEE' ? 'Employé Permanent' : c.type === 'PART_TIME_EMPLOYEE' ? 'Temps Partiel' : c.type === 'FREELANCER_AGREEMENT' ? 'Prestation' : 'Stage'
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600",
                                                children: c.remunerationType === 'MONTHLY_SALARY' ? 'Salaire mensuel' : c.remunerationType === 'FIXED_PER_DELIVERY' ? 'Fixe/livraison' : c.remunerationType === 'PERCENTAGE_PER_DELIVERY' ? '% par livraison' : 'Mixte + prime'
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-900",
                                                children: [
                                                    c.rate.toLocaleString('fr-FR'),
                                                    " ",
                                                    c.currency,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400 ml-0.5",
                                                        children: c.remunerationType === 'MONTHLY_SALARY' ? '/mois' : '/livr.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600",
                                                children: new Date(c.startDate).toLocaleDateString('fr-FR')
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500",
                                                children: c.endDate ? new Date(c.endDate).toLocaleDateString('fr-FR') : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300",
                                                    children: "Indéterminée"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 124
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-5 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContractStatusBadge, {
                                                status: c.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/staff/page.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            activeTab === 'commissions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Registre des commissions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-0.5",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCommissions"].length,
                                            " enregistrements"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Total versé :"
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-emerald-600",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCommissions"].filter((c)=>c.status === 'PAID').reduce((s, c)=>s + c.amount, 0).toLocaleString('fr-FR'),
                                            " XAF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-gray-50 border-b border-gray-100 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Livreur"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Montant"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Calculée le"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Payée le"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                            children: "Statut"
                                        }, void 0, false, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-50",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCommissions"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "table-row-hover cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-5 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: c.delivererName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-mono text-gray-600",
                                                    children: c.manifestNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-900",
                                                    children: [
                                                        c.amount.toLocaleString('fr-FR'),
                                                        " ",
                                                        c.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: new Date(c.calculatedAt).toLocaleString('fr-FR', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: c.paidAt ? new Date(c.paidAt).toLocaleString('fr-FR', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300",
                                                        children: "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 152
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-5 py-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommissionStatusBadge, {
                                                    status: c.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            activeTab === 'freelancers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                            {
                                label: 'Actifs',
                                count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockFreelancers"].filter((f)=>f.status === 'ACTIVE').length,
                                color: 'text-emerald-600'
                            },
                            {
                                label: 'En attente',
                                count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockFreelancers"].filter((f)=>f.status === 'PENDING').length,
                                color: 'text-orange-600'
                            },
                            {
                                label: 'Terminés',
                                count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockFreelancers"].filter((f)=>f.status === 'TERMINATED').length,
                                color: 'text-gray-400'
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-200 rounded-xl p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-2xl font-bold ${s.color}`,
                                        children: s.count
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-0.5",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/app/staff/page.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-gray-50 border-b border-gray-100 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Freelancer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Commission"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Missions assignées"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Associé le"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Statut"
                                            }, void 0, false, {
                                                fileName: "[project]/app/staff/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/staff/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-50",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockFreelancers"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "table-row-hover cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600 text-xs font-semibold",
                                                                    children: f.freelancerName.split(' ').map((n)=>n[0]).join('').slice(0, 2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/staff/page.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/staff/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: f.freelancerName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/staff/page.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: f.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/staff/page.tsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/staff/page.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-orange-600",
                                                        children: [
                                                            f.commissionRate,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700",
                                                        children: f.assignedMissionsCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: new Date(f.associatedAt).toLocaleDateString('fr-FR')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssociationStatusBadge, {
                                                        status: f.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/staff/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/staff/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, f.id, true, {
                                            fileName: "[project]/app/staff/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/staff/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/staff/page.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/staff/page.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/staff/page.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/staff/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(StaffPage, "aInu7XBM6NhDpIZz8ZpkQjMFWT0=");
_c4 = StaffPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DelivererStatusDot");
__turbopack_context__.k.register(_c1, "ContractStatusBadge");
__turbopack_context__.k.register(_c2, "CommissionStatusBadge");
__turbopack_context__.k.register(_c3, "AssociationStatusBadge");
__turbopack_context__.k.register(_c4, "StaffPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d46b1bd8._.js.map