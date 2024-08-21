import { Module } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { EnergyController } from './energy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Energy, EnergySchema } from 'src/schemas/Energy.schema';

@Module({
  controllers: [EnergyController],
  providers: [EnergyService],
  imports: [MongooseModule.forFeature([{
    name: Energy.name,
    schema: EnergySchema
  }])]
})
export class EnergyModule {}
