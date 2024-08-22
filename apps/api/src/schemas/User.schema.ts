import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Asset {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: 'Credit Card' | 'Car' | 'House' | 'Boat';

  @Prop({ required: true })
  levelRequirement: number;

  @Prop({ required: true })
  price: number;
}

@Schema({ timestamps: true })
export class EnergySource {
  @Prop()
  type: string; // e.g., "Solar", "Wind", "Gas", "Coal", "Nuclear", "3D Wind"

  @Prop()
  productionRate: number; // Energy produced per hour

  @Prop()
  purchaseCost: number; // Cost to purchase this energy source

  @Prop()
  operational: boolean; // Whether the energy source is currently operational

  @Prop()
  country: string; // The country where the energy source is located

  @Prop()
  licenseFee: number; 
  
  @Prop()
  dailyOperatingHours: number
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({unique: true })
  username: string;

  @Prop({required: true})
  name: string;

  @Prop({default: 1000000})
  coinsEarned?: number;

  @Prop({default: 1000})
  floatingTapEnergy?: number;

  @Prop()
  referralLink?: string;

  @Prop()
  referrals?: number[];

  @Prop({default: 5})
  refillEnergy?: number;

  @Prop({default: 3})
  refillTime?: number;

  @Prop()
  status?: string;

  @Prop({default: 1000})
  tapEnergy?: number;

  @Prop({default: 1})
  tapPower?: number;

  @Prop({required: true})
  userId: number;

  @Prop({default: 1})
  energyLevel?: number;

  @Prop({default: 1})
  rechargeLevel?: number;

  @Prop({default: 0})
  coinsPerHour?: number;

  @Prop({default: 1})
  userLevel?: number;

   @Prop({default: Date.now()})
  lastupdatedTime?: number;

  @Prop({ type: [EnergySource] })
  energySources?: EnergySource[]; // Array of energy sources owned by the user

  @Prop({ type: [Asset] })
  assets?: Asset[]; // Array of assets owned by the user
}

export const UserSchema = SchemaFactory.createForClass(User);
