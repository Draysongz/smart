import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { EnergyModule } from 'src/energy/energy.module';
import { AssetsModule } from 'src/assets/assets.module';
import { CountryModule } from 'src/country/country.module';
import { GatewayModule } from 'src/gateway/gateway.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{
       name: User.name,
       schema: UserSchema
    }]),
    EnergyModule ,
    AssetsModule,
    CountryModule,
    GatewayModule

  ]
})
export class UsersModule {}
