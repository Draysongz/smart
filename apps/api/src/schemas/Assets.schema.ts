import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Asset extends Document {
 @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: 'Credit Card' | 'Car' | 'House' | 'Boat';

  @Prop({ required: true })
  levelRequirement: number;

  @Prop({ required: true })
  price: number;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
