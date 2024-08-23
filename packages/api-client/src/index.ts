import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

// Define the Asset schema
export const AssetSchema = z.object({
  type: z.string(), // e.g., "Car", "CreditCard", "House", "Boat"
  name: z.string(),
  levelRequirement: z.number(),
  price: z.number(), // Cost in the game
});

export const ReferralUserSchema = z.object({
  userId: z.number(),
  name: z.string(),
  coinsEarned: z.number().default(0),
  // Add any other fields you want to display
});

export const CountrySchema =z.object({
   name: z.string(),
   status: z.string()
})

// Define the EnergySource schema
export const EnergySourceSchema = z.object({
  type: z.string(), // e.g., "Solar", "Wind", "Gas", "Coal", "Nuclear", "3D Wind"
  productionRate: z.number(), // Energy produced per hour
  purchaseCost: z.number(), // Cost to purchase this energy source
  operational: z.boolean(), // Whether the energy source is currently operational
  country: z.string(), // The country where the energy source is located
  licenseFee: z.number(), // Cost for licensing in other countries
  dailyOperatingHours: z.number(),
});

// Define the User schema
export const UserSchema = z.object({
  username: z.string().min(1),
  name: z.string(),
  coinsEarned: z.number().default(1000000),
  floatingTapEnergy: z.number().default(1000),
  referralLink: z.string().optional(),
  referrals: z.array(ReferralUserSchema).optional(),
  refillEnergy: z.number().default(5),
  refillTime: z.number().default(3),
  status: z.string().optional(),
  userLevel: z.number().optional(),
  tapEnergy: z.number().default(1000),
  tapPower: z.number().default(1),
  userId: z.number(),
  energyLevel: z.number().default(1),
  rechargeLevel: z.number().default(1),
  coinsPerHour: z.number().default(0),
  lastUpdatedTime: z.number().optional(),
  energySources: z.array(EnergySourceSchema).optional(),
  lastClaimDate: z.string().optional(),
  energyGenerated: z.number().optional(),
  energyTimestamp: z.number().optional(),
  streakLevel: z.number().optional(), // Array of energy sources owned by the user
  assets: z.array(AssetSchema).optional(),
  country: z.array(CountrySchema).optional() // Array of assets owned by the user
});

export type Users = z.infer<typeof UserSchema>;
export type Asset = z.infer<typeof AssetSchema>;
export type EnergySource = z.infer<typeof EnergySourceSchema>;
export type County = z.infer<typeof CountrySchema>

export const contract = c.router(
  {
    users: {
      create: {
        method: "POST",
        path: "/users",
        body: UserSchema,
        responses: {
          201: UserSchema,
        },
      },

      getAll: {
        method: "GET",
        path: "/users",
        query: z.object({
          userId: z.number().optional(),
        }),
        responses: {
          200: UserSchema.array(),
        },
      },

      getOne: {
        method: "GET",
        path: "/users/:userId",
        pathParams: z.object({
          userId: z.coerce.number(),
        }),
        responses: {
          200: UserSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      update: {
        method: "PUT",
        path: "/users/:userId",
        pathParams: z.object({
          userId: z.coerce.number(),
        }),
        body: UserSchema.omit({ userId: true }).partial(),
        responses: {
          200: UserSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      remove: {
        method: "DELETE",
        path: "/users/:userId",
        pathParams: z.object({
          userId: z.coerce.number(),
        }),
        responses: {
          204: z.object({}),
          404: z.object({
            message: z.string(),
          }),
        },
      },

      purchaseEnergySource: {
        method: "POST",
        path: "/users/:userId/purchase-energy-source/:energyType",
        pathParams: z.object({
          userId: z.coerce.number(),
          energyType: z.string(),
        }),
        body: z.any(),
        responses: {
          200: UserSchema,
          400: z.object({
            message: z.string(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },

      purchaseAsset: { 
        method: "POST",
        path: "/users/:userId/purchase-asset/:name",
        pathParams: z.object({
          userId: z.coerce.number(),
          name: z.string(),
        }),
        body: z.any(),
        responses: {
          200: UserSchema,
          400: z.object({
            message: z.string(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },

       purchaseLicense: { 
        method: "POST",
        path: "/users/:userId/purchase-license/:name",
        pathParams: z.object({
          userId: z.coerce.number(),
          name: z.string(),
        }),
        body: z.any(),
        responses: {
          200: UserSchema,
          400: z.object({
            message: z.string(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },

    energy: {
      create: {
        method: "POST",
        path: "/energy",
        body: EnergySourceSchema,
        responses: {
          201: EnergySourceSchema,
        },
      },

      createBatch: {
        method: "POST",
        path: "/energy/batch",
        body: z.array(EnergySourceSchema), // Expecting an array of EnergySourceSchema
        responses: {
          201: z.array(EnergySourceSchema), // Returning an array of created energy sources
        },
      },

      getAll: {
        method: "GET",
        path: "/energy",
        responses: {
          200: EnergySourceSchema.array(),
        },
      },

      getOne: {
        method: "GET",
        path: "/energy/:energyId",
        pathParams: z.object({
          energyId: z.coerce.number(),
        }),
        responses: {
          200: EnergySourceSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      update: {
        method: "PUT",
        path: "/energy/:energyId",
        pathParams: z.object({
          energyId: z.coerce.number(),
        }),
        body: EnergySourceSchema.partial(),
        responses: {
          200: EnergySourceSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      remove: {
        method: "DELETE",
        path: "/energy/:energyId",
        pathParams: z.object({
          energyId: z.coerce.number(),
        }),
        responses: {
          204: z.object({}),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },

    asset: {
      create: {
        method: "POST",
        path: "/assets",
        body: AssetSchema,
        responses: {
          201: AssetSchema,
        },
      },

      createBatch: {
        method: "POST",
        path: "/assets/batch",
        body: z.array(AssetSchema), // Array of assets to be created
        responses: {
          201: z.array(AssetSchema),
        },
      },

      getAll: {
        method: "GET",
        path: "/assets",
        responses: {
          200: AssetSchema.array(),
        },
      },

      getOne: {
        method: "GET",
        path: "/assets/:assetId",
        pathParams: z.object({
          assetId: z.coerce.number(),
        }),
        responses: {
          200: AssetSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      update: {
        method: "PUT",
        path: "/assets/:assetId",
        pathParams: z.object({
          assetId: z.coerce.number(),
        }),
        body: AssetSchema.partial(),
        responses: {
          200: AssetSchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      remove: {
        method: "DELETE",
        path: "/assets/:assetId",
        pathParams: z.object({
          assetId: z.coerce.number(),
        }),
        responses: {
          204: z.object({}),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },

    country: {

      create: {
        method: "POST",
        path: "/country",
        body: CountrySchema,
        responses: {
          201: CountrySchema,
        },
      },

      createBatch: {
        method: "POST",
        path: "/country/batch",
        body: z.array(CountrySchema), // Array of assets to be created
        responses: {
          201: z.array(CountrySchema),
        },
      },
      getAll: {
        method: "GET",
        path: "/country",
        responses: {
          200: CountrySchema.array(),
        },
      },

      getOne: {
        method: "GET",
        path: "/country/:name",
        pathParams: z.object({
          name: z.coerce.string(),
        }),
        responses: {
          200: CountrySchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },

      update: {
        method: "PUT",
        path: "/country/:name",
        pathParams: z.object({
          name: z.coerce.string(),
        }),
        body: CountrySchema.partial(),
        responses: {
          200: CountrySchema,
          404: z.object({
            message: z.string(),
          }),
        },
      },
    }

  },
  { pathPrefix: "/api", strictStatusCodes: true }
);
