import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnergySource } from 'api-contract';
import { Energy } from 'src/schemas/Energy.schema';


@Injectable()
export class EnergyService {
  constructor(@InjectModel(Energy.name) private energyModel: Model<Energy>) {}

  async create(
    createEnergyDto: EnergySource,
  ): Promise<{ status: 201; body: EnergySource }> {
    const existingEnergySource = await this.energyModel
      .findOne({ type: createEnergyDto.type })
      .exec();

    if (existingEnergySource) {
      return existingEnergySource.toObject();
    } else {
      const newEnergySource = new this.energyModel(createEnergyDto);
      const savedEnergySource = await newEnergySource.save();
      const energyObject = savedEnergySource.toObject();
      return {
        status: 201,
        body: {
          type: energyObject.type,
          productionRate: energyObject.productionRate,
          purchaseCost: energyObject.purchaseCost,
          operational: energyObject.operational,
          country: energyObject.country,
          licenseFee: energyObject.licenseFee,
          dailyOperatingHours: energyObject.dailyOperatingHours
        },
      };
    }
  }

  async getAll(): Promise<{ status: 200; body: EnergySource[] }> {
    const energies = await this.energyModel.find().exec();
    return {
      status: 200,
      body: energies.map((energy) => ({
        type: energy.type,
        productionRate: energy.productionRate,
        purchaseCost: energy.purchaseCost,
        operational: energy.operational,
        country: energy.country,
        licenseFee: energy.licenseFee,
        dailyOperatingHours: energy.dailyOperatingHours
      })),
    };
  }

  async getOne(energyId: number):  Promise<{ status: 200; body: EnergySource } | { status: 404; body: { message: string } }> {
    const energySource = await this.energyModel.findById(energyId).exec();
    if (!energySource) {
      throw new NotFoundException(
        `Energy source with ID ${energyId} not found`,
      );
    }
    return {
        status: 200,
         body: {
        type: energySource.type,
        productionRate: energySource.productionRate,
        purchaseCost: energySource.purchaseCost,
        operational: energySource.operational,
        country: energySource.country,
        licenseFee: energySource.licenseFee,
        dailyOperatingHours: energySource.dailyOperatingHours
      }
    }
  }

   async update(energyId: number, updateUserDto: Partial<Omit<EnergySource, 'energyId'>>): Promise<{ status: 200; body: EnergySource } | { status: 404; body: { message: string } }> {
    const updatedEnergy = await this.energyModel.findOneAndUpdate(
      { energyId },
      updateUserDto,
      { new: true } // Return the updated document
    ).exec();

    if (!updatedEnergy) {
      return {
        status: 404,
        body: { message: `User with ID ${energyId} not found` },
      };
    }
    const energyObject = updatedEnergy.toObject();
    return {
      status: 200,
      body: {
         type: energyObject.type,
          productionRate: energyObject.productionRate,
          purchaseCost: energyObject.purchaseCost,
          operational: energyObject.operational,
          country: energyObject.country,
          licenseFee: energyObject.licenseFee,
          dailyOperatingHours: energyObject.dailyOperatingHours
      },
    };
  }

  async remove(energyId: number): Promise<{ status: 204; body: {} } | { status: 404; body: { message: string } }> {
    const result = await this.energyModel.deleteOne({ energyId }).exec();
    if (result.deletedCount === 0) {
      return {
        status: 404,
        body: { message: `User with ID ${energyId} not found` },
      };
    }
    return {
      status: 204,
      body: {},
    };
  }

async createBatch(energySources: EnergySource[]): Promise<{ status: 201; body: EnergySource[] }> {
  try {
    const createdEnergySources = await this.energyModel.insertMany(energySources);
    return {
      status: 201,
      body: createdEnergySources,
    };
  } catch (error) {
    // Handle errors as needed, e.g., validation errors
    throw new Error('Failed to create energy sources');
  }
}

}
