import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from 'src/schemas/Country.schema';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports:[
    MongooseModule.forFeature([{
      name: Country.name,
      schema: CountrySchema
    }])
  ],

  exports: [MongooseModule]
})
export class CountryModule {}
