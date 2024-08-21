import { Controller } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { contract } from 'api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class EnergyController {
  constructor(private readonly energyService: EnergyService) {}
  @TsRestHandler(contract.energy)
  async handler() {
    return tsRestHandler(contract.energy, {
      getAll: async () => {
        const result = await this.energyService.getAll(); // Pass the query object directly
        return {
          status: result.status,
          body: result.body,
        };
      },

      getOne: async ({ params: { energyId } }) => {
        const result = await this.energyService.getOne(energyId);
        if (result.status === 404) {
          return {
            status: 404,
            body: result.body,
          };
        }
        return {
          status: 200,
          body: result.body,
        };
      },

      create: async ({ body }) => {
        const result = await this.energyService.create(body);
        return {
          status: 201,
          body: result.body,
        };
      },

      update: async ({ params: { energyId }, body }) => {
        const result = await this.energyService.update(energyId, body);
        if (result.status === 404) {
          return {
            status: 404,
            body: result.body,
          };
        }
        return {
          status: 200,
          body: result.body,
        };
      },

      remove: async ({ params: { energyId} }) => {
        const result = await this.energyService.remove(energyId);
        if (result.status === 404) {
          return {
            status: 404,
            body: result.body,
          };
        }
        return {
          status: 204,
          body: result.body,
        };
      },

     createBatch: async ({ body }) => {
        const result = await this.energyService.createBatch(body);
        return {
          status: result.status,
          body: result.body,
        };
      },
    });
  }
}
