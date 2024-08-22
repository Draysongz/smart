import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asset, AssetSchema } from 'src/schemas/Assets.schema';


@Module({
  controllers: [AssetsController],
  providers: [AssetsService],
  imports: [
  MongooseModule.forFeature([{
       name: Asset.name,
       schema: AssetSchema
    }])
  ],
   exports:[MongooseModule]
})
export class AssetsModule {}
