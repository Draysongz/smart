"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = exports.UserSchema = exports.EnergySourceSchema = exports.CountrySchema = exports.ReferralUserSchema = exports.AssetSchema = void 0;
var core_1 = require("@ts-rest/core");
var zod_1 = require("zod");
var c = (0, core_1.initContract)();
// Define the Asset schema
exports.AssetSchema = zod_1.z.object({
    type: zod_1.z.string(), // e.g., "Car", "CreditCard", "House", "Boat"
    name: zod_1.z.string(),
    levelRequirement: zod_1.z.number(),
    price: zod_1.z.number(), // Cost in the game
});
exports.ReferralUserSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    name: zod_1.z.string(),
    coinsEarned: zod_1.z.number().default(0),
    // Add any other fields you want to display
});
exports.CountrySchema = zod_1.z.object({
    name: zod_1.z.string(),
    status: zod_1.z.string(),
    distance: zod_1.z.number().optional()
});
// Define the EnergySource schema
exports.EnergySourceSchema = zod_1.z.object({
    type: zod_1.z.string(), // e.g., "Solar", "Wind", "Gas", "Coal", "Nuclear", "3D Wind"
    productionRate: zod_1.z.number(), // Energy produced per hour
    purchaseCost: zod_1.z.number(), // Cost to purchase this energy source
    operational: zod_1.z.boolean(), // Whether the energy source is currently operational
    country: zod_1.z.string(), // The country where the energy source is located
    licenseFee: zod_1.z.number(), // Cost for licensing in other countries
    dailyOperatingHours: zod_1.z.number(),
});
// Define the User schema
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string().min(1),
    name: zod_1.z.string(),
    coinsEarned: zod_1.z.number().default(1000000),
    floatingTapEnergy: zod_1.z.number().default(1000),
    referralLink: zod_1.z.string().optional(),
    referrals: zod_1.z.array(exports.ReferralUserSchema).optional(),
    refillEnergy: zod_1.z.number().default(5),
    refillTime: zod_1.z.number().default(3),
    status: zod_1.z.string().optional(),
    userLevel: zod_1.z.number().optional(),
    tapEnergy: zod_1.z.number().default(1000),
    tapPower: zod_1.z.number().default(1),
    userId: zod_1.z.number(),
    energyLevel: zod_1.z.number().default(1),
    rechargeLevel: zod_1.z.number().default(1),
    coinsPerHour: zod_1.z.number().default(0),
    lastUpdatedTime: zod_1.z.number().optional(),
    energySources: zod_1.z.array(exports.EnergySourceSchema).optional(),
    lastClaimDate: zod_1.z.string().optional(),
    energyGenerated: zod_1.z.number().optional(),
    energyTimestamp: zod_1.z.number().optional(),
    streakLevel: zod_1.z.number().optional(), // Array of energy sources owned by the user
    assets: zod_1.z.array(exports.AssetSchema).optional(),
    country: zod_1.z.array(exports.CountrySchema).optional() // Array of assets owned by the user
});
exports.contract = c.router({
    users: {
        create: {
            method: "POST",
            path: "/users",
            body: exports.UserSchema,
            responses: {
                201: exports.UserSchema,
            },
        },
        getAll: {
            method: "GET",
            path: "/users",
            query: zod_1.z.object({
                userId: zod_1.z.number().optional(),
            }),
            responses: {
                200: exports.UserSchema.array(),
            },
        },
        getOne: {
            method: "GET",
            path: "/users/:userId",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
            }),
            responses: {
                200: exports.UserSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        update: {
            method: "PUT",
            path: "/users/:userId",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
            }),
            body: exports.UserSchema.omit({ userId: true }).partial(),
            responses: {
                200: exports.UserSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        remove: {
            method: "DELETE",
            path: "/users/:userId",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
            }),
            responses: {
                204: zod_1.z.object({}),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        purchaseEnergySource: {
            method: "POST",
            path: "/users/:userId/purchase-energy-source/:energyType",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
                energyType: zod_1.z.string(),
            }),
            body: zod_1.z.any(),
            responses: {
                200: exports.UserSchema,
                400: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        purchaseAsset: {
            method: "POST",
            path: "/users/:userId/purchase-asset/:name",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
                name: zod_1.z.string(),
            }),
            body: zod_1.z.any(),
            responses: {
                200: exports.UserSchema,
                400: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        purchaseLicense: {
            method: "POST",
            path: "/users/:userId/purchase-license/:name",
            pathParams: zod_1.z.object({
                userId: zod_1.z.coerce.number(),
                name: zod_1.z.string(),
            }),
            body: zod_1.z.any(),
            responses: {
                200: exports.UserSchema,
                400: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
    },
    energy: {
        create: {
            method: "POST",
            path: "/energy",
            body: exports.EnergySourceSchema,
            responses: {
                201: exports.EnergySourceSchema,
            },
        },
        createBatch: {
            method: "POST",
            path: "/energy/batch",
            body: zod_1.z.array(exports.EnergySourceSchema), // Expecting an array of EnergySourceSchema
            responses: {
                201: zod_1.z.array(exports.EnergySourceSchema), // Returning an array of created energy sources
            },
        },
        getAll: {
            method: "GET",
            path: "/energy",
            responses: {
                200: exports.EnergySourceSchema.array(),
            },
        },
        getOne: {
            method: "GET",
            path: "/energy/:energyId",
            pathParams: zod_1.z.object({
                energyId: zod_1.z.coerce.number(),
            }),
            responses: {
                200: exports.EnergySourceSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        update: {
            method: "PUT",
            path: "/energy/:energyId",
            pathParams: zod_1.z.object({
                energyId: zod_1.z.coerce.number(),
            }),
            body: exports.EnergySourceSchema.partial(),
            responses: {
                200: exports.EnergySourceSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        remove: {
            method: "DELETE",
            path: "/energy/:energyId",
            pathParams: zod_1.z.object({
                energyId: zod_1.z.coerce.number(),
            }),
            responses: {
                204: zod_1.z.object({}),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
    },
    asset: {
        create: {
            method: "POST",
            path: "/assets",
            body: exports.AssetSchema,
            responses: {
                201: exports.AssetSchema,
            },
        },
        createBatch: {
            method: "POST",
            path: "/assets/batch",
            body: zod_1.z.array(exports.AssetSchema), // Array of assets to be created
            responses: {
                201: zod_1.z.array(exports.AssetSchema),
            },
        },
        getAll: {
            method: "GET",
            path: "/assets",
            responses: {
                200: exports.AssetSchema.array(),
            },
        },
        getOne: {
            method: "GET",
            path: "/assets/:assetId",
            pathParams: zod_1.z.object({
                assetId: zod_1.z.coerce.number(),
            }),
            responses: {
                200: exports.AssetSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        update: {
            method: "PUT",
            path: "/assets/:assetId",
            pathParams: zod_1.z.object({
                assetId: zod_1.z.coerce.number(),
            }),
            body: exports.AssetSchema.partial(),
            responses: {
                200: exports.AssetSchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        remove: {
            method: "DELETE",
            path: "/assets/:assetId",
            pathParams: zod_1.z.object({
                assetId: zod_1.z.coerce.number(),
            }),
            responses: {
                204: zod_1.z.object({}),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
    },
    country: {
        create: {
            method: "POST",
            path: "/country",
            body: exports.CountrySchema,
            responses: {
                201: exports.CountrySchema,
            },
        },
        createBatch: {
            method: "POST",
            path: "/country/batch",
            body: zod_1.z.array(exports.CountrySchema), // Array of assets to be created
            responses: {
                201: zod_1.z.array(exports.CountrySchema),
            },
        },
        getAll: {
            method: "GET",
            path: "/country",
            responses: {
                200: exports.CountrySchema.array(),
            },
        },
        getOne: {
            method: "GET",
            path: "/country/:name",
            pathParams: zod_1.z.object({
                name: zod_1.z.coerce.string(),
            }),
            responses: {
                200: exports.CountrySchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
        update: {
            method: "PUT",
            path: "/country/:name",
            pathParams: zod_1.z.object({
                name: zod_1.z.coerce.string(),
            }),
            body: exports.CountrySchema.partial(),
            responses: {
                200: exports.CountrySchema,
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
    }
}, { pathPrefix: "/api", strictStatusCodes: true });
