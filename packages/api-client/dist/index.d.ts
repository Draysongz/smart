import { z } from "zod";
export declare const AssetSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodString;
    value: z.ZodNumber;
    status: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    value: number;
    status: string;
}, {
    type: string;
    name: string;
    value: number;
    status: string;
}>;
export declare const EnergySourceSchema: z.ZodObject<{
    type: z.ZodString;
    productionRate: z.ZodNumber;
    purchaseCost: z.ZodNumber;
    operational: z.ZodBoolean;
    country: z.ZodString;
    licenseFee: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    productionRate: number;
    purchaseCost: number;
    operational: boolean;
    country: string;
    licenseFee: number;
}, {
    type: string;
    productionRate: number;
    purchaseCost: number;
    operational: boolean;
    country: string;
    licenseFee: number;
}>;
export declare const UserSchema: z.ZodObject<{
    username: z.ZodString;
    name: z.ZodString;
    coinsEarned: z.ZodDefault<z.ZodNumber>;
    floatingTapEnergy: z.ZodDefault<z.ZodNumber>;
    referralLink: z.ZodOptional<z.ZodString>;
    referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refillEnergy: z.ZodDefault<z.ZodNumber>;
    refillTime: z.ZodDefault<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    tapEnergy: z.ZodDefault<z.ZodNumber>;
    tapPower: z.ZodDefault<z.ZodNumber>;
    userId: z.ZodNumber;
    energyLevel: z.ZodDefault<z.ZodNumber>;
    rechargeLevel: z.ZodDefault<z.ZodNumber>;
    coinsPerHour: z.ZodDefault<z.ZodNumber>;
    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        productionRate: z.ZodNumber;
        purchaseCost: z.ZodNumber;
        operational: z.ZodBoolean;
        country: z.ZodString;
        licenseFee: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
    }, {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
    }>, "many">>;
    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
        value: z.ZodNumber;
        status: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
        value: number;
        status: string;
    }, {
        type: string;
        name: string;
        value: number;
        status: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    username: string;
    coinsEarned: number;
    floatingTapEnergy: number;
    refillEnergy: number;
    refillTime: number;
    tapEnergy: number;
    tapPower: number;
    userId: number;
    energyLevel: number;
    rechargeLevel: number;
    coinsPerHour: number;
    status?: string | undefined;
    referralLink?: string | undefined;
    referrals?: number[] | undefined;
    energySources?: {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
    }[] | undefined;
    assets?: {
        type: string;
        name: string;
        value: number;
        status: string;
    }[] | undefined;
}, {
    name: string;
    username: string;
    userId: number;
    status?: string | undefined;
    coinsEarned?: number | undefined;
    floatingTapEnergy?: number | undefined;
    referralLink?: string | undefined;
    referrals?: number[] | undefined;
    refillEnergy?: number | undefined;
    refillTime?: number | undefined;
    tapEnergy?: number | undefined;
    tapPower?: number | undefined;
    energyLevel?: number | undefined;
    rechargeLevel?: number | undefined;
    coinsPerHour?: number | undefined;
    energySources?: {
        type: string;
        productionRate: number;
        purchaseCost: number;
        operational: boolean;
        country: string;
        licenseFee: number;
    }[] | undefined;
    assets?: {
        type: string;
        name: string;
        value: number;
        status: string;
    }[] | undefined;
}>;
export type Users = z.infer<typeof UserSchema>;
export type Asset = z.infer<typeof AssetSchema>;
export type EnergySource = z.infer<typeof EnergySourceSchema>;
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
                referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                refillEnergy: z.ZodDefault<z.ZodNumber>;
                refillTime: z.ZodDefault<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                tapEnergy: z.ZodDefault<z.ZodNumber>;
                tapPower: z.ZodDefault<z.ZodNumber>;
                userId: z.ZodNumber;
                energyLevel: z.ZodDefault<z.ZodNumber>;
                rechargeLevel: z.ZodDefault<z.ZodNumber>;
                coinsPerHour: z.ZodDefault<z.ZodNumber>;
                energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }>, "many">>;
                assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    value: z.ZodNumber;
                    status: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }, {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                username: string;
                coinsEarned: number;
                floatingTapEnergy: number;
                refillEnergy: number;
                refillTime: number;
                tapEnergy: number;
                tapPower: number;
                userId: number;
                energyLevel: number;
                rechargeLevel: number;
                coinsPerHour: number;
                status?: string | undefined;
                referralLink?: string | undefined;
                referrals?: number[] | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }[] | undefined;
                assets?: {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }[] | undefined;
            }, {
                name: string;
                username: string;
                userId: number;
                status?: string | undefined;
                coinsEarned?: number | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: number[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }[] | undefined;
                assets?: {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
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
                    referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }>, "many">>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        value: z.ZodNumber;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    username: string;
                    coinsEarned: number;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    userId: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }[] | undefined;
                }, {
                    name: string;
                    username: string;
                    userId: number;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
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
                    referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }>, "many">>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        value: z.ZodNumber;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    username: string;
                    coinsEarned: number;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    userId: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }[] | undefined;
                }, {
                    name: string;
                    username: string;
                    userId: number;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
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
                    referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }>, "many">>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        value: z.ZodNumber;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    username: string;
                    coinsEarned: number;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    userId: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }[] | undefined;
                }, {
                    name: string;
                    username: string;
                    userId: number;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
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
                username: z.ZodOptional<z.ZodString>;
                coinsEarned: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                floatingTapEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                referralLink: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                referrals: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
                refillEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                refillTime: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                tapEnergy: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                tapPower: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                energyLevel: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                rechargeLevel: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                coinsPerHour: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                energySources: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    productionRate: z.ZodNumber;
                    purchaseCost: z.ZodNumber;
                    operational: z.ZodBoolean;
                    country: z.ZodString;
                    licenseFee: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }, {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }>, "many">>>;
                assets: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    name: z.ZodString;
                    value: z.ZodNumber;
                    status: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }, {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }>, "many">>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                status?: string | undefined;
                username?: string | undefined;
                coinsEarned?: number | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: number[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }[] | undefined;
                assets?: {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
                }[] | undefined;
            }, {
                name?: string | undefined;
                status?: string | undefined;
                username?: string | undefined;
                coinsEarned?: number | undefined;
                floatingTapEnergy?: number | undefined;
                referralLink?: string | undefined;
                referrals?: number[] | undefined;
                refillEnergy?: number | undefined;
                refillTime?: number | undefined;
                tapEnergy?: number | undefined;
                tapPower?: number | undefined;
                energyLevel?: number | undefined;
                rechargeLevel?: number | undefined;
                coinsPerHour?: number | undefined;
                energySources?: {
                    type: string;
                    productionRate: number;
                    purchaseCost: number;
                    operational: boolean;
                    country: string;
                    licenseFee: number;
                }[] | undefined;
                assets?: {
                    type: string;
                    name: string;
                    value: number;
                    status: string;
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
                    referrals: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    refillEnergy: z.ZodDefault<z.ZodNumber>;
                    refillTime: z.ZodDefault<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    tapEnergy: z.ZodDefault<z.ZodNumber>;
                    tapPower: z.ZodDefault<z.ZodNumber>;
                    userId: z.ZodNumber;
                    energyLevel: z.ZodDefault<z.ZodNumber>;
                    rechargeLevel: z.ZodDefault<z.ZodNumber>;
                    coinsPerHour: z.ZodDefault<z.ZodNumber>;
                    energySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        productionRate: z.ZodNumber;
                        purchaseCost: z.ZodNumber;
                        operational: z.ZodBoolean;
                        country: z.ZodString;
                        licenseFee: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }, {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }>, "many">>;
                    assets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        type: z.ZodString;
                        name: z.ZodString;
                        value: z.ZodNumber;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }, {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    username: string;
                    coinsEarned: number;
                    floatingTapEnergy: number;
                    refillEnergy: number;
                    refillTime: number;
                    tapEnergy: number;
                    tapPower: number;
                    userId: number;
                    energyLevel: number;
                    rechargeLevel: number;
                    coinsPerHour: number;
                    status?: string | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
                    }[] | undefined;
                }, {
                    name: string;
                    username: string;
                    userId: number;
                    status?: string | undefined;
                    coinsEarned?: number | undefined;
                    floatingTapEnergy?: number | undefined;
                    referralLink?: string | undefined;
                    referrals?: number[] | undefined;
                    refillEnergy?: number | undefined;
                    refillTime?: number | undefined;
                    tapEnergy?: number | undefined;
                    tapPower?: number | undefined;
                    energyLevel?: number | undefined;
                    rechargeLevel?: number | undefined;
                    coinsPerHour?: number | undefined;
                    energySources?: {
                        type: string;
                        productionRate: number;
                        purchaseCost: number;
                        operational: boolean;
                        country: string;
                        licenseFee: number;
                    }[] | undefined;
                    assets?: {
                        type: string;
                        name: string;
                        value: number;
                        status: string;
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
            body: z.ZodAny;
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
    };
};
