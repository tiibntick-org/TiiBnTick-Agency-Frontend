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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Drawer({ open, onClose, title, description, children, footer, size = 'md' }) {
    _s();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fixed inset-0 bg-black/20 z-50 transition-opacity duration-300', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/forms/Drawer.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fixed top-0 right-0 h-full bg-white z-50 shadow-xl border-l border-gray-200', 'overflow-y-auto transition-transform duration-300 ease-out', size === 'lg' ? 'w-[640px]' : 'w-[520px]', open ? 'translate-x-0' : 'translate-x-full'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 bg-white flex items-start justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/Drawer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-0.5",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/Drawer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/Drawer.tsx",
                                    lineNumber: 54,
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
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/Drawer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky bottom-0 z-10 bg-white px-6 py-4 border-t border-gray-100 flex-shrink-0",
                            children: footer
                        }, void 0, false, {
                            fileName: "[project]/components/forms/Drawer.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/Drawer.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/forms/Drawer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Drawer, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = Drawer;
var _c;
__turbopack_context__.k.register(_c, "Drawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/EditAgencyForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditAgencyForm)
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
function EditAgencyForm({ open, onClose }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].name,
        legalName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].legalName,
        registrationNumber: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].registrationNumber,
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].phone,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].email,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].address,
        city: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].city,
        country: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].country,
        defaultCurrency: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].defaultCurrency,
        autoAssignMissions: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].autoAssignMissions,
        allowFreelancerAssociation: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].allowFreelancerAssociation,
        maxAssociatedFreelancers: String(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].maxAssociatedFreelancers),
        hubRetentionDelayHours: String(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].hubRetentionDelayHours)
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const update = (k, v)=>setForm((p)=>({
                ...p,
                [k]: v
            }));
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
            setSuccess(true);
            setTimeout(()=>{
                setSuccess(false);
                onClose();
            }, 1200);
        }, 900);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: onClose,
        title: "Modifier le profil agence",
        description: "Mettre à jour les informations de Rapid Express Douala",
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
                                    children: "Identité & Légal"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: [
                                                "Nom commercial ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: form.name,
                                            onChange: (e)=>update('name', e.target.value),
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: [
                                                "Raison sociale ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: form.legalName,
                                            onChange: (e)=>update('legalName', e.target.value),
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: "N° RCCM"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.registrationNumber,
                                            onChange: (e)=>update('registrationNumber', e.target.value),
                                            placeholder: "RC/DLA/XXXX/B/XXXX",
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cls.section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cls.sectionTitle,
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 75,
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
                                                        "Téléphone ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "tel",
                                                    value: form.phone,
                                                    onChange: (e)=>update('phone', e.target.value),
                                                    placeholder: "+237 2XX XX XX XX",
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: [
                                                        "Email ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "email",
                                                    value: form.email,
                                                    onChange: (e)=>update('email', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cls.section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cls.sectionTitle,
                                    children: "Localisation"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: [
                                                "Adresse du siège ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: form.address,
                                            onChange: (e)=>update('address', e.target.value),
                                            className: cls.input
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 93,
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
                                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "text",
                                                    value: form.city,
                                                    onChange: (e)=>update('city', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: [
                                                        "Pays ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "text",
                                                    value: form.country,
                                                    onChange: (e)=>update('country', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cls.section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cls.sectionTitle,
                                    children: "Paramètres opérationnels"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: cls.label,
                                            children: "Devise par défaut"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.defaultCurrency,
                                            onChange: (e)=>update('defaultCurrency', e.target.value),
                                            className: `${cls.select} w-40`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "XAF",
                                                    children: "XAF — Franc CFA"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "EUR",
                                                    children: "EUR — Euro"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "USD",
                                                    children: "USD — Dollar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "NGN",
                                                    children: "NGN — Naira"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors",
                                    onClick: ()=>update('autoAssignMissions', !form.autoAssignMissions),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${form.autoAssignMissions ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`,
                                            children: form.autoAssignMissions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 13,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                lineNumber: 128,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: "Auto-assignation des missions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Assigner automatiquement les livreurs disponibles"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors",
                                    onClick: ()=>update('allowFreelancerAssociation', !form.allowFreelancerAssociation),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${form.allowFreelancerAssociation ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`,
                                            children: form.allowFreelancerAssociation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 13,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                lineNumber: 139,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800",
                                                    children: "Association de freelancers"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Autoriser l'association avec des freelancers TiiBnTick"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: "Max freelancers associés"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: "100",
                                                    value: form.maxAssociatedFreelancers,
                                                    onChange: (e)=>update('maxAssociatedFreelancers', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: cls.label,
                                                    children: "Rétention hub (heures)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "24",
                                                    step: "24",
                                                    value: form.hubRetentionDelayHours,
                                                    onChange: (e)=>update('hubRetentionDelayHours', e.target.value),
                                                    className: cls.input
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: [
                                                        "= ",
                                                        Math.round(Number(form.hubRetentionDelayHours) / 24),
                                                        " jour",
                                                        Number(form.hubRetentionDelayHours) / 24 > 1 ? 's' : '',
                                                        " avant retour agence"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                    lineNumber: 51,
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
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submitting || success,
                            className: `px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 min-w-36 justify-center ${success ? 'bg-emerald-500' : 'bg-orange-500 hover:bg-orange-600'} disabled:opacity-70`,
                            children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, this),
                                    " Enregistrement..."
                                ]
                            }, void 0, true) : success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/EditAgencyForm.tsx",
                                        lineNumber: 174,
                                        columnNumber: 29
                                    }, this),
                                    " Enregistré !"
                                ]
                            }, void 0, true) : 'Enregistrer'
                        }, void 0, false, {
                            fileName: "[project]/components/forms/EditAgencyForm.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forms/EditAgencyForm.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forms/EditAgencyForm.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forms/EditAgencyForm.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(EditAgencyForm, "PxkHxv3o6mm4kmSOnP4BFYH/C98=");
_c = EditAgencyForm;
var _c;
__turbopack_context__.k.register(_c, "EditAgencyForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/profile/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$EditAgencyForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/EditAgencyForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
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
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-400 uppercase tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-800 mt-0.5",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = InfoRow;
function SettingRow({ label, value, sub }) {
    const isBoolean = typeof value === 'boolean';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-800",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-0.5",
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            isBoolean ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${value ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-500'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-1.5 h-1.5 rounded-full ${value ? 'bg-emerald-500' : 'bg-gray-400'}`
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    value ? 'Activé' : 'Désactivé'
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = SettingRow;
function ProfilePage() {
    _s();
    const [editFormOpen, setEditFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeDeliverers = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].filter((d)=>d.status !== 'INACTIVE' && d.status !== 'SUSPENDED').length;
    const availableVehicles = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.status === 'AVAILABLE').length;
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
                                children: "Profil Agence"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Informations et paramètres de l'agence"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setEditFormOpen(true),
                        className: "inline-flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            "Modifier"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    size: 28,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].name
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-medium",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].type === 'ENTERPRISE' ? 'Entreprise' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].type
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].legalName
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-0.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].id
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid grid-cols-4 gap-4 pt-6 border-t border-gray-100",
                        children: [
                            {
                                label: 'Antennes',
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].filter((b)=>b.status === 'OPEN').length,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"],
                                suffix: `/ ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].length}`
                            },
                            {
                                label: 'Livreurs actifs',
                                value: activeDeliverers,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                suffix: `/ ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDeliverers"].length}`
                            },
                            {
                                label: 'Véhicules dispo.',
                                value: availableVehicles,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                suffix: `/ ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.status !== 'RETIRED').length}`
                            },
                            {
                                label: 'Hubs relais',
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockHubs"].filter((h)=>h.status === 'OPEN' || h.status === 'FULL').length,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                suffix: `/ ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockHubs"].length}`
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mx-auto mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                            size: 16,
                                            className: "text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: [
                                            s.value,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal text-gray-400",
                                                children: s.suffix
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-0.5",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-900 mb-2",
                                children: "Informations légales & Contact"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Raison sociale",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].legalName,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "N° RCCM",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].registrationNumber,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Adresse du siège",
                                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].address}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].city}`,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Pays",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].country,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Téléphone",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].phone,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Email",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].email,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        label: "Date de création",
                                        value: new Date(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].createdAt).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        }),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Paramètres opérationnels"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditFormOpen(true),
                                        className: "text-xs text-orange-500 hover:text-orange-600 font-medium",
                                        children: "Modifier"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                                        label: "Devise par défaut",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].defaultCurrency,
                                        sub: "Utilisée pour toutes les transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                                        label: "Auto-assignation des missions",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].autoAssignMissions,
                                        sub: "Assigner automatiquement les livreurs disponibles"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                                        label: "Association freelancer",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].allowFreelancerAssociation,
                                        sub: "Autoriser l'association avec des freelancers TiiBnTick"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                                        label: "Max freelancers associés",
                                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].maxAssociatedFreelancers} freelancers`,
                                        sub: "Limite simultanée d'associations actives"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                                        label: "Rétention hub (délai)",
                                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].hubRetentionDelayHours}h (${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAgency"].hubRetentionDelayHours / 24} jours)`,
                                        sub: "Durée max avant retour agence"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-900",
                                children: "Antennes de l'agence"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/branches",
                                className: "text-xs text-orange-500 hover:text-orange-600 font-medium",
                                children: "Gérer les antennes"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-50",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBranches"].map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-2 rounded-full ${branch.status === 'OPEN' ? 'bg-emerald-500' : 'bg-orange-400'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-800",
                                                        children: branch.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    branch.isHeadquarters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-medium",
                                                        children: "Siège"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    branch.deliverersCount,
                                                    " livreur",
                                                    branch.deliverersCount > 1 ? 's' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: branch.status === 'OPEN' ? 'Ouverte' : 'Fermée temp.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/profile/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, branch.id, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$EditAgencyForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: editFormOpen,
                onClose: ()=>setEditFormOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "4cMCtGiHbc/Yp+KUEtUYQnYetr4=");
_c2 = ProfilePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InfoRow");
__turbopack_context__.k.register(_c1, "SettingRow");
__turbopack_context__.k.register(_c2, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_f5bfd6a5._.js.map