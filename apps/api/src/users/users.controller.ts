import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { contract } from 'api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { UserGateway } from 'src/gateway/user.gateway';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly userGateway: UserGateway
  ) {}

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
        this.userGateway.emitUserUpdated(result.body)
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

      purchaseEnergySource: async ({params : {userId, energyType}}) =>{
        const result = await this.usersService.purchaseEnergySource(userId, energyType);
        if (result.status === 404) {
          
          return {
            status: 404,
            body: result.body,
          };
        }else if(result.status === 400){
           return {
            status: 400,
            body: result.body,
          };
        }
        this.userGateway.emitUserUpdated(result.body)
        return {
          status: 200,
          body: result.body,
        };
      },

       purchaseAsset: async ({params : {userId, name}}) =>{
        const result = await this.usersService.purchaseAsset(userId, name);
        if (result.status === 404) {
          return {
            status: 404,
            body: result.body,
          };
        }else if(result.status === 400){
           return {
            status: 400,
            body: result.body,
          };
        }
        this.userGateway.emitUserUpdated(result.body)
        return {
          status: 200,
          body: result.body,
        };
      },

      purchaseLicense: async({params: {userId, name}})=>{
         const result = await this.usersService.purchaseLicense(userId, name);
        if (result.status === 404) {
          return {
            status: 404,
            body: result.body,
          };
        }else if(result.status === 400){
           return {
            status: 400,
            body: result.body,
          };
        }
        this.userGateway.emitUserUpdated(result.body)
        return {
          status: 200,
          body: result.body,
        };
      }
    });
  }
}
