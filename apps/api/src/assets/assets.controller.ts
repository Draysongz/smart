import { Controller } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { contract } from 'api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @TsRestHandler(contract.asset)
  async handler() {
    return tsRestHandler(contract.asset, {
      getAll: async () => {
        const result = await this.assetsService.getAll(); // Pass the query object directly
        return {
          status: result.status,
          body: result.body,
        };
      },

      getOne: async ({ params: { assetId } }) => {
        const result = await this.assetsService.getOne(assetId);
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
        const result = await this.assetsService.create(body);
        return {
          status: 201,
          body: result.body,
        };
      },

      update: async ({ params: { assetId}, body }) => {
        const result = await this.assetsService.update(assetId, body);
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

      remove: async ({ params: { assetId} }) => {
        const result = await this.assetsService.remove(assetId);
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
        const result = await this.assetsService.createBatch(body);
        return {
          status: result.status,
          body: result.body,
        };
      },
    });
  }
}
