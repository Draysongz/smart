"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = exports.UserSchema = exports.EnergySourceSchema = exports.AssetSchema = void 0;
var core_1 = require("@ts-rest/core");
var zod_1 = require("zod");
var c = (0, core_1.initContract)();
// Define the Asset schema
exports.AssetSchema = zod_1.z.object({
    type: zod_1.z.string(), // e.g., "Car", "CreditCard", "House", "Boat"
    name: zod_1.z.string(), // e.g., "BMW 1 Series", "Gold Credit Card"
    value: zod_1.z.number(), // Cost in the game
    status: zod_1.z.string(), // Status of the asset (e.g., "Owned", "Available")
});
// Define the EnergySource schema
exports.EnergySourceSchema = zod_1.z.object({
    type: zod_1.z.string(), // e.g., "Solar", "Wind", "Gas", "Coal", "Nuclear", "3D Wind"
    productionRate: zod_1.z.number(), // Energy produced per hour
    purchaseCost: zod_1.z.number(), // Cost to purchase this energy source
    operational: zod_1.z.boolean(), // Whether the energy source is currently operational
    country: zod_1.z.string(), // The country where the energy source is located
    licenseFee: zod_1.z.number(), // Cost for licensing in other countries
    dailyOperatingHours: zod_1.z.number()
});
// Define the User schema
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string().min(1),
    name: zod_1.z.string(),
    coinsEarned: zod_1.z.number().default(1000000),
    floatingTapEnergy: zod_1.z.number().default(1000),
    referralLink: zod_1.z.string().optional(),
    referrals: zod_1.z.array(zod_1.z.number()).optional(),
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
    energySources: zod_1.z.array(exports.EnergySourceSchema).optional(), // Array of energy sources owned by the user
    assets: zod_1.z.array(exports.AssetSchema).optional(), // Array of assets owned by the user
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
            body: zod_1.z.any(),
            responses: {
                204: zod_1.z.object({}),
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
            body: zod_1.z.any(),
            responses: {
                204: zod_1.z.object({}),
                404: zod_1.z.object({
                    message: zod_1.z.string(),
                }),
            },
        },
    },
}, { pathPrefix: "/api", strictStatusCodes: true });
