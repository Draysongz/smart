import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { EnergyModule } from 'src/energy/energy.module';
import { AssetsModule } from 'src/assets/assets.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{
       name: User.name,
       schema: UserSchema
    }]),
    EnergyModule ,
    AssetsModule
  ]
})
export class UsersModule {}
