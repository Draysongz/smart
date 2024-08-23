import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnergyModule } from './energy/energy.module';
import { AssetsModule } from './assets/assets.module';
import { CountryModule } from './country/country.module';





@Module({
  imports: [UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@smart.2bodi.mongodb.net/smart?retryWrites=true&w=majority&appName=smart`),
    EnergyModule,
    AssetsModule,
    CountryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 