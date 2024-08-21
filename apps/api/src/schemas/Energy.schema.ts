import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Energy extends Document {
  @Prop({ unique: true })
  type: string; // e.g., "Solar", "Wind", "Gas", etc.

  @Prop()
  productionRate: number; // Energy produced per hour

  @Prop()
  purchaseCost: number; // Cost to purchase this energy source

  @Prop()
  operational: boolean; // Whether the energy source is currently operational

  @Prop()
  country: string; // The country where the energy source is located

  @Prop()
  licenseFee: number; // Cost for licensing in other countries

  @Prop()
  dailyOperatingHours: number
}

export const EnergySchema = SchemaFactory.createForClass(Energy);
