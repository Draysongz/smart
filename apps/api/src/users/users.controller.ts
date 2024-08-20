import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { contract } from 'api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TsRestHandler(contract.users)
  async handler() {
    return tsRestHandler(contract.users, {
      getAll: async ({ query }) => {
        const result = await this.usersService.getAll(query); // Pass the query object directly
        return {
          status: result.status,
          body: result.body,
        };
      },

      getOne: async ({ params: { userId } }) => {
        const result = await this.usersService.getOne(userId);
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
        const result = await this.usersService.create(body);
        return {
          status: 201,
          body: result.body,
        };
      },

      update: async ({ params: { userId }, body }) => {
        const result = await this.usersService.update(userId, body);
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

      remove: async ({ params: { userId } }) => {
        const result = await this.usersService.remove(userId);
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
    });
  }
}
