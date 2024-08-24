import { z } from "zod";
export declare const AssetSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodString;
    levelRequirement: z.ZodNumber;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    levelRequirement: number;
    price: number;
}, {
    type: string;
    name: string;
    levelRequirement: number;
    price: number;
}>;
export declare const ReferralUserSchema: z.ZodObject<{
    userId: z.ZodNumber;
    name: z.ZodString;
    coinsEarned: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    userId: number;
    coinsEarned: number;
}, {
    name: string;
    userId: number;
    coinsEarned?: number | undefined;
}>;
export declare const CountrySchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodString;
    distance: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: string;
    distance?: number | undefined;
}, {
    name: string;
    status: string;
    distance?: number | undefined;
}>;
export declare const EnergySourceSchema: z.ZodObject<{
    type: z.ZodString;
    productionRate: z.ZodNumber;
    purchaseCost: z.ZodNumber;
    operational: z.ZodBoolean;
    country: z.ZodString;
    licenseFee: z.ZodNumber;
    dailyOperatingHours: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    productionRate: number;
    purchaseCost: number;
    operational: boolean;
    country: string;
    licenseFee: number;
    dailyOperatingHours: number;
}, {
    type: string;
    productionRate: number;
    purchaseCost: number;
    operational: boolean;
    country: string;
    licenseFee: number;
    dailyOperatingHours: number;
}>;
export declare const UserSchema: z.ZodObject<{
    username: z.ZodString;
    name: z.ZodString;
    coinsEarned: z.ZodDefault<z.ZodNumber>;
    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
    referralLink: z.ZodOptional<z.ZodString>;
    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        userId: z.ZodNumber;
        name: z.ZodString;
        coinsEarned: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        userId: number;
        coinsEarned: number;
    }, {
        name: string;
        userId: number;
        coinsEarned?: number | undefined;
    }>, "many">>;
    refillEnergy: z.ZodDefault<z.ZodNumber>;
    refillTime: z.ZodDefault<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    userLevel: z.ZodOptional<z.ZodNumber>;
    tapEnergy: z.ZodDefault<z.ZodNumber>;
    tapPower: z.ZodDefault<z.ZodNumber>;
    userId: z.ZodNumber;
    energyLevel: z.ZodDefault<z.ZodNumber>;
    rechargeLevel: z.ZodDefault<z.ZodNumber>;
    coinsPerHour: z.ZodDefault<z.ZodNumber>;
    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        productionRate: z.ZodNumber;
        purchaseCost: z.ZodNumber;
        operational: z.ZodBoolean;
        country: z.ZodString;
        licenseFee: z.ZodNumber;
        dailyOperatingHours: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
        dailyOperatingHours: number;
    }, {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
        dailyOperatingHours: number;
    }>, "many">>;
    lastClaimDate: z.ZodOptional<z.ZodString>;
    energyGenerated: z.ZodOptional<z.ZodNumber>;
    energyTimestamp: z.ZodOptional<z.ZodNumber>;
    streakLevel: z.ZodOptional<z.ZodNumber>;
    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
        levelRequirement: z.ZodNumber;
        price: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
        levelRequirement: number;
        price: number;
    }, {
        type: string;
        name: string;
        levelRequirement: number;
        price: number;
    }>, "many">>;
    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        status: z.ZodString;
        distance: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        status: string;
        distance?: number | undefined;
    }, {
        name: string;
        status: string;
        distance?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    userId: number;
    coinsEarned: number;
    username: string;
    floatingTapEnergy: number;
    refillEnergy: number;
    refillTime: number;
    tapEnergy: number;
    tapPower: number;
    energyLevel: number;
    rechargeLevel: number;
    coinsPerHour: number;
    status?: string | undefined;
    country?: {
        name: string;
        status: string;
        distance?: number | undefined;
    }[] | undefined;
    referralLink?: string | undefined;
    referrals?: {
        name: string;
        userId: number;
        coinsEarned: number;
    }[] | undefined;
    userLevel?: number | undefined;
    lastUpdatedTime?: number | undefined;
    energySources?: {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
        dailyOperatingHours: number;
    }[] | undefined;
    lastClaimDate?: string | undefined;
    energyGenerated?: number | undefined;
    energyTimestamp?: number | undefined;
    streakLevel?: number | undefined;
    assets?: {
        type: string;
        name: string;
        levelRequirement: number;
        price: number;
    }[] | undefined;
}, {
    name: string;
    userId: number;
    username: string;
    status?: string | undefined;
    coinsEarned?: number | undefined;
    country?: {
        name: string;
        status: string;
        distance?: number | undefined;
    }[] | undefined;
    floatingTapEnergy?: number | undefined;
    referralLink?: string | undefined;
    referrals?: {
        name: string;
        userId: number;
        coinsEarned?: number | undefined;
    }[] | undefined;
    refillEnergy?: number | undefined;
    refillTime?: number | undefined;
    userLevel?: number | undefined;
    tapEnergy?: number | undefined;
    tapPower?: number | undefined;
    energyLevel?: number | undefined;
    rechargeLevel?: number | undefined;
    coinsPerHour?: number | undefined;
    lastUpdatedTime?: number | undefined;
    energySources?: {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
        dailyOperatingHours: number;
    }[] | undefined;
    lastClaimDate?: string | undefined;
    energyGenerated?: number | undefined;
    energyTimestamp?: number | undefined;
    streakLevel?: number | undefined;
    assets?: {
        type: string;
        name: string;
        levelRequirement: number;
        price: number;
    }[] | undefined;
}>;
export type Users = z.infer<typeof UserSchema>;
export type Asset = z.infer<typeof AssetSchema>;
export type EnergySource = z.infer<typeof EnergySourceSchema>;
export type County = z.infer<typeof CountrySchema>;
export declare const contract: {
    users: {
        create: {
            method: "POST";
            body: z.ZodObject<{
                username: z.ZodString;
                name: z.ZodString;
                coinsEarned: z.ZodDefault<z.ZodNumber>;
                floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                referralLink: z.ZodOptional<z.ZodString>;
                referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    userId: z.ZodNumber;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                }, {
                    name: string;
                    userId: number;
                    coinsEarned?: number | undefined;
                }>, "many">>;
                refillEnergy: z.ZodDefault<z.ZodNumber>;
                refillTime: z.ZodDefault<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                userLevel: z.ZodOptional<z.ZodNumber>;
                tapEnergy: z.ZodDefault<z.ZodNumber>;
                tapPower: z.ZodDefault<z.ZodNumber>;
                userId: z.ZodNumber;
                energyLevel: z.ZodDefault<z.ZodNumber>;
                rechargeLevel: z.ZodDefault<z.ZodNumber>;
                coinsPerHour: z.ZodDefault<z.ZodNumber>;
                lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>, "many">>;
                lastClaimDate: z.ZodOptional<z.ZodString>;
                energyGenerated: z.ZodOptional<z.ZodNumber>;
                energyTimestamp: z.ZodOptional<z.ZodNumber>;
                streakLevel: z.ZodOptional<z.ZodNumber>;
                assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>, "many">>;
                country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                userId: number;
                coinsEarned: number;
                username: string;
                floatingTapEnergy: number;
                refillEnergy: number;
                refillTime: number;
                tapEnergy: number;
                tapPower: number;
                energyLevel: number;
                rechargeLevel: number;
                coinsPerHour: number;
                status?: string | undefined;
                country?: {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }[] | undefined;
                referralLink?: string | undefined;
                referrals?: {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                }[] | undefined;
                userLevel?: number | undefined;
                lastUpdatedTime?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }[] | undefined;
                lastClaimDate?: string | undefined;
                energyGenerated?: number | undefined;
                energyTimestamp?: number | undefined;
                streakLevel?: number | undefined;
                assets?: {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }[] | undefined;
            }, {
                name: string;
                userId: number;
                username: string;
                status?: string | undefined;
                coinsEarned?: number | undefined;
                country?: {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }[] | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: {
                    name: string;
                    userId: number;
                    coinsEarned?: number | undefined;
                }[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                userLevel?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                lastUpdatedTime?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }[] | undefined;
                lastClaimDate?: string | undefined;
                energyGenerated?: number | undefined;
                energyTimestamp?: number | undefined;
                streakLevel?: number | undefined;
                assets?: {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }[] | undefined;
            }>;
            path: "/api/users";
            responses: {
                201: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
            };
            strictStatusCodes: true;
        };
        getAll: {
            query: z.ZodObject<{
                userId: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                userId?: number | undefined;
            }, {
                userId?: number | undefined;
            }>;
            method: "GET";
            path: "/api/users";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getOne: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                userId: number;
            }, {
                userId: number;
            }>;
            method: "GET";
            path: "/api/users/:userId";
            responses: {
                200: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        update: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                userId: number;
            }, {
                userId: number;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                coinsEarned: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                country: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>, "many">>>;
                username: z.ZodOptional<z.ZodString>;
                floatingTapEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                referralLink: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                referrals: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    userId: z.ZodNumber;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                }, {
                    name: string;
                    userId: number;
                    coinsEarned?: number | undefined;
                }>, "many">>>;
                refillEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                refillTime: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                userLevel: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                tapEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                tapPower: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                energyLevel: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                rechargeLevel: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                coinsPerHour: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                lastUpdatedTime: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                energySources: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>, "many">>>;
                lastClaimDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                energyGenerated: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                energyTimestamp: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                streakLevel: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                assets: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>, "many">>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                status?: string | undefined;
                coinsEarned?: number | undefined;
                country?: {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }[] | undefined;
                username?: string | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                }[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                userLevel?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                lastUpdatedTime?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }[] | undefined;
                lastClaimDate?: string | undefined;
                energyGenerated?: number | undefined;
                energyTimestamp?: number | undefined;
                streakLevel?: number | undefined;
                assets?: {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }[] | undefined;
            }, {
                name?: string | undefined;
                status?: string | undefined;
                coinsEarned?: number | undefined;
                country?: {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }[] | undefined;
                username?: string | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: {
                    name: string;
                    userId: number;
                    coinsEarned?: number | undefined;
                }[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                userLevel?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                lastUpdatedTime?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }[] | undefined;
                lastClaimDate?: string | undefined;
                energyGenerated?: number | undefined;
                energyTimestamp?: number | undefined;
                streakLevel?: number | undefined;
                assets?: {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }[] | undefined;
            }>;
            path: "/api/users/:userId";
            responses: {
                200: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        remove: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                userId: number;
            }, {
                userId: number;
            }>;
            method: "DELETE";
            path: "/api/users/:userId";
            responses: {
                204: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        purchaseEnergySource: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
                energyType: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: number;
                energyType: string;
            }, {
                userId: number;
                energyType: string;
            }>;
            method: "POST";
            body: z.ZodAny;
            path: "/api/users/:userId/purchase-energy-source/:energyType";
            responses: {
                200: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        purchaseAsset: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                userId: number;
            }, {
                name: string;
                userId: number;
            }>;
            method: "POST";
            body: z.ZodAny;
            path: "/api/users/:userId/purchase-asset/:name";
            responses: {
                200: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        purchaseLicense: {
            pathParams: z.ZodObject<{
                userId: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                userId: number;
            }, {
                name: string;
                userId: number;
            }>;
            method: "POST";
            body: z.ZodAny;
            path: "/api/users/:userId/purchase-license/:name";
            responses: {
                200: z.ZodObject<{
                    username: z.ZodString;
                    name: z.ZodString;
                    coinsEarned: z.ZodDefault<z.ZodNumber>;
                    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
                    referralLink: z.ZodOptional<z.ZodString>;
                    referrals: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        userId: z.ZodNumber;
                        name: z.ZodString;
                        coinsEarned: z.ZodDefault<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }, {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }>, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    userLevel: z.ZodOptional<z.ZodNumber>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    lastUpdatedTime: z.ZodOptional<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                        dailyOperatingHours: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }>, "many">>;
                    lastClaimDate: z.ZodOptional<z.ZodString>;
                    energyGenerated: z.ZodOptional<z.ZodNumber>;
                    energyTimestamp: z.ZodOptional<z.ZodNumber>;
                    streakLevel: z.ZodOptional<z.ZodNumber>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        levelRequirement: z.ZodNumber;
                        price: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }, {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }>, "many">>;
                    country: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        status: z.ZodString;
                        distance: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }, {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    userId: number;
                    coinsEarned: number;
                    username: string;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned: number;
                    }[] | undefined;
                    userLevel?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }, {
                    name: string;
                    userId: number;
                    username: string;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    country?: {
                        name: string;
                        status: string;
                        distance?: number | undefined;
                    }[] | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: {
                        name: string;
                        userId: number;
                        coinsEarned?: number | undefined;
                    }[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    userLevel?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    lastUpdatedTime?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                        dailyOperatingHours: number;
                    }[] | undefined;
                    lastClaimDate?: string | undefined;
                    energyGenerated?: number | undefined;
                    energyTimestamp?: number | undefined;
                    streakLevel?: number | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        levelRequirement: number;
                        price: number;
                    }[] | undefined;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    energy: {
        create: {
            method: "POST";
            body: z.ZodObject<{
                type: z.ZodString;
                productionRate: z.ZodNumber;
                purchaseCost: z.ZodNumber;
                operational: z.ZodBoolean;
                country: z.ZodString;
                licenseFee: z.ZodNumber;
                dailyOperatingHours: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: string;
                productionRate: number;
                purchaseCost: number;
                operational: boolean;
                country: string;
                licenseFee: number;
                dailyOperatingHours: number;
            }, {
                type: string;
                productionRate: number;
                purchaseCost: number;
                operational: boolean;
                country: string;
                licenseFee: number;
                dailyOperatingHours: number;
            }>;
            path: "/api/energy";
            responses: {
                201: z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>;
            };
            strictStatusCodes: true;
        };
        createBatch: {
            method: "POST";
            body: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                productionRate: z.ZodNumber;
                purchaseCost: z.ZodNumber;
                operational: z.ZodBoolean;
                country: z.ZodString;
                licenseFee: z.ZodNumber;
                dailyOperatingHours: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: string;
                productionRate: number;
                purchaseCost: number;
                operational: boolean;
                country: string;
                licenseFee: number;
                dailyOperatingHours: number;
            }, {
                type: string;
                productionRate: number;
                purchaseCost: number;
                operational: boolean;
                country: string;
                licenseFee: number;
                dailyOperatingHours: number;
            }>, "many">;
            path: "/api/energy/batch";
            responses: {
                201: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getAll: {
            method: "GET";
            path: "/api/energy";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getOne: {
            pathParams: z.ZodObject<{
                energyId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                energyId: number;
            }, {
                energyId: number;
            }>;
            method: "GET";
            path: "/api/energy/:energyId";
            responses: {
                200: z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        update: {
            pathParams: z.ZodObject<{
                energyId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                energyId: number;
            }, {
                energyId: number;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                productionRate: z.ZodOptional<z.ZodNumber>;
                purchaseCost: z.ZodOptional<z.ZodNumber>;
                operational: z.ZodOptional<z.ZodBoolean>;
                country: z.ZodOptional<z.ZodString>;
                licenseFee: z.ZodOptional<z.ZodNumber>;
                dailyOperatingHours: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                productionRate?: number | undefined;
                purchaseCost?: number | undefined;
                operational?: boolean | undefined;
                country?: string | undefined;
                licenseFee?: number | undefined;
                dailyOperatingHours?: number | undefined;
            }, {
                type?: string | undefined;
                productionRate?: number | undefined;
                purchaseCost?: number | undefined;
                operational?: boolean | undefined;
                country?: string | undefined;
                licenseFee?: number | undefined;
                dailyOperatingHours?: number | undefined;
            }>;
            path: "/api/energy/:energyId";
            responses: {
                200: z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                    dailyOperatingHours: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                    dailyOperatingHours: number;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        remove: {
            pathParams: z.ZodObject<{
                energyId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                energyId: number;
            }, {
                energyId: number;
            }>;
            method: "DELETE";
            path: "/api/energy/:energyId";
            responses: {
                204: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    asset: {
        create: {
            method: "POST";
            body: z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
                levelRequirement: z.ZodNumber;
                price: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
                levelRequirement: number;
                price: number;
            }, {
                type: string;
                name: string;
                levelRequirement: number;
                price: number;
            }>;
            path: "/api/assets";
            responses: {
                201: z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>;
            };
            strictStatusCodes: true;
        };
        createBatch: {
            method: "POST";
            body: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
                levelRequirement: z.ZodNumber;
                price: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
                levelRequirement: number;
                price: number;
            }, {
                type: string;
                name: string;
                levelRequirement: number;
                price: number;
            }>, "many">;
            path: "/api/assets/batch";
            responses: {
                201: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getAll: {
            method: "GET";
            path: "/api/assets";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getOne: {
            pathParams: z.ZodObject<{
                assetId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                assetId: number;
            }, {
                assetId: number;
            }>;
            method: "GET";
            path: "/api/assets/:assetId";
            responses: {
                200: z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        update: {
            pathParams: z.ZodObject<{
                assetId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                assetId: number;
            }, {
                assetId: number;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                levelRequirement: z.ZodOptional<z.ZodNumber>;
                price: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                type?: string | undefined;
                name?: string | undefined;
                levelRequirement?: number | undefined;
                price?: number | undefined;
            }, {
                type?: string | undefined;
                name?: string | undefined;
                levelRequirement?: number | undefined;
                price?: number | undefined;
            }>;
            path: "/api/assets/:assetId";
            responses: {
                200: z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    levelRequirement: z.ZodNumber;
                    price: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }, {
                    type: string;
                    name: string;
                    levelRequirement: number;
                    price: number;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        remove: {
            pathParams: z.ZodObject<{
                assetId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                assetId: number;
            }, {
                assetId: number;
            }>;
            method: "DELETE";
            path: "/api/assets/:assetId";
            responses: {
                204: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    country: {
        create: {
            method: "POST";
            body: z.ZodObject<{
                name: z.ZodString;
                status: z.ZodString;
                distance: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                status: string;
                distance?: number | undefined;
            }, {
                name: string;
                status: string;
                distance?: number | undefined;
            }>;
            path: "/api/country";
            responses: {
                201: z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>;
            };
            strictStatusCodes: true;
        };
        createBatch: {
            method: "POST";
            body: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                status: z.ZodString;
                distance: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                status: string;
                distance?: number | undefined;
            }, {
                name: string;
                status: string;
                distance?: number | undefined;
            }>, "many">;
            path: "/api/country/batch";
            responses: {
                201: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getAll: {
            method: "GET";
            path: "/api/country";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>, "many">;
            };
            strictStatusCodes: true;
        };
        getOne: {
            pathParams: z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>;
            method: "GET";
            path: "/api/country/:name";
            responses: {
                200: z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
        update: {
            pathParams: z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodString>;
                distance: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                status?: string | undefined;
                distance?: number | undefined;
            }, {
                name?: string | undefined;
                status?: string | undefined;
                distance?: number | undefined;
            }>;
            path: "/api/country/:name";
            responses: {
                200: z.ZodObject<{
                    name: z.ZodString;
                    status: z.ZodString;
                    distance: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }, {
                    name: string;
                    status: string;
                    distance?: number | undefined;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            strictStatusCodes: true;
        };
    };
};
