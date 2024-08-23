import { Controller } from '@nestjs/common';
import { CountryService } from './country.service';
import { contract } from 'api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

   @TsRestHandler(contract.country)
  async handler() {
    return tsRestHandler(contract.country, {
      getAll: async () => {
        const result = await this.countryService.getAll(); // Pass the query object directly
        return {
          status: result.status,
          body: result.body,
        };
      },

      getOne: async ({ params: { name } }) => {
        const result = await this.countryService.getOne(name);
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
        const result = await this.countryService.create(body);
        return {
          status: 201,
          body: result.body,
        };
      },

      update: async ({ params: { name }, body }) => {
        const result = await this.countryService.update(name, body);
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

     createBatch: async ({ body }) => {
        const result = await this.countryService.createBatch(body);
        return {
          status: result.status,
          body: result.body,
        };
      },
    });
  }
}
