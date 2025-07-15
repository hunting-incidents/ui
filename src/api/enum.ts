export enum IncidentType {
    MENACE = 'MENACE',
    INJURY = 'INJURY',
    DEATH = 'DEATH',
    DESTRUCTION = 'DESTRUCTION',
    OTHER = 'OTHER'
}

export enum IncidentTarget {
    HUNTER = 'HUNTER',
    HUMAN = 'HUMAN',
    PET = 'PET',
    LIVESTOCK = 'LIVESTOCK',
    PROTECTED_WILDLIFE = 'PROTECTED_WILDLIFE',
    BUILDING = 'BUILDING',
    VEHICLE = 'VEHICLE'
}

export enum IncidentCause {
    UNKNOWN = 'UNKNOWN',
    ALCOHOL = 'ALCOHOL',
    DRUGS = 'DRUGS',
    OLD_AGE = 'OLD_AGE',
    INEXPERIENCE = 'INEXPERIENCE',
    SAFETY_RULES_VIOLATION = 'SAFETY_RULES_VIOLATION',
    MISHANDLING = 'MISHANDLING',
    OTHER = 'OTHER'
}

export enum IncidentStatus {
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED',
    NOT_VERIFIABLE = 'NOT_VERIFIABLE',
    REJECTED = 'REJECTED'
}

export function getIncidentTypeMap() {
    return {
        [IncidentType.MENACE]: {
            name: 'Menace',
            description: 'Menace ou intimidation liée à la chasse'
        },
        [IncidentType.INJURY]: {
            name: 'Blessure',
            description: 'Blessure causée lors d\'un incident de chasse'
        },
        [IncidentType.DEATH]: {
            name: 'Décès',
            description: 'Décès survenu lors d\'un incident de chasse'
        },
        [IncidentType.DESTRUCTION]: {
            name: 'Destruction',
            description: 'Destruction de biens matériels'
        },
        [IncidentType.OTHER]: {
            name: 'Autre',
            description: 'Autre type d\'incident'
        }
    };
}

export function getIncidentTargetMap() {
    return {
        [IncidentTarget.HUNTER]: {
            name: 'Chasseur',
            description: 'La cible était un chasseur'
        },
        [IncidentTarget.HUMAN]: {
            name: 'Humain',
            description: 'La cible était une personne'
        },
        [IncidentTarget.PET]: {
            name: 'Animal domestique',
            description: 'La cible était un animal domestique'
        },
        [IncidentTarget.LIVESTOCK]: {
            name: 'Bétail',
            description: 'La cible était un animal d\'élevage'
        },
        [IncidentTarget.PROTECTED_WILDLIFE]: {
            name: 'Espèce protégée',
            description: 'La cible était une espèce protégée'
        },
        [IncidentTarget.BUILDING]: {
            name: 'Bâtiment',
            description: 'La cible était un bâtiment'
        },
        [IncidentTarget.VEHICLE]: {
            name: 'Véhicule',
            description: 'La cible était un véhicule'
        }
    };
}

export function getIncidentCauseMap() {
    return {
        [IncidentCause.UNKNOWN]: {
            name: 'Inconnue',
            description: 'Cause inconnue'
        },
        [IncidentCause.ALCOHOL]: {
            name: 'Alcool',
            description: 'L\'alcool est en cause'
        },
        [IncidentCause.DRUGS]: {
            name: 'Drogues',
            description: 'La prise de drogues est en cause'
        },
        [IncidentCause.OLD_AGE]: {
            name: 'Âge avancé',
            description: 'L\'âge avancé est en cause'
        },
        [IncidentCause.INEXPERIENCE]: {
            name: 'Inexpérience',
            description: 'L\'inexpérience est en cause'
        },
        [IncidentCause.SAFETY_RULES_VIOLATION]: {
            name: 'Violation des règles de sécurité',
            description: 'Non-respect des règles de sécurité'
        },
        [IncidentCause.MISHANDLING]: {
            name: 'Mauvaise manipulation',
            description: 'Mauvaise manipulation d\'une arme ou d\'un équipement'
        },
        [IncidentCause.OTHER]: {
            name: 'Autre',
            description: 'Autre cause'
        }
    };
}

export function getIncidentStatusMap() {
    return {
        [IncidentStatus.PENDING]: {
            name: 'En attente',
            description: 'Incident en attente de vérification'
        },
        [IncidentStatus.VERIFIED]: {
            name: 'Vérifié',
            description: 'Incident vérifié'
        },
        [IncidentStatus.NOT_VERIFIABLE]: {
            name: 'Non vérifiable',
            description: 'Incident non vérifiable'
        },
        [IncidentStatus.REJECTED]: {
            name: 'Rejeté',
            description: 'Incident rejeté'
        }
    };
}