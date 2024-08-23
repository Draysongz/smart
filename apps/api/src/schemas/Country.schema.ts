import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Country extends Document {
 @Prop({ required: true })
  name: string;

  @Prop({default :'unlicensed'})
  status: 'licensed' | 'unlicensed'
}

export const CountrySchema = SchemaFactory.createForClass(Country);
