import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { County } from 'api-contract';
import { Country } from 'src/schemas/Country.schema';

@Injectable()
export class CountryService {
     constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

       async create(
    createEnergyDto: County,
  ): Promise<{ status: 201; body: County }> {
    const existingCountry = await this.countryModel
      .findOne({ type: createEnergyDto.name})
      .exec();

    if (existingCountry) {
      return existingCountry.toObject();
    } else {
      const newCountry = new this.countryModel(createEnergyDto);
      const savedCountry = await newCountry.save();
      const energyObject = savedCountry.toObject();
      return {
        status: 201,
        body: {
          name: energyObject.name,
          status: energyObject.status
        },
      };
    }
  }

  async getAll(): Promise<{ status: 200; body: County[] }> {
    const countries = await this.countryModel.find().exec();
    return {
      status: 200,
      body: countries.map((country) => ({
        name: country.name,
        status: country.status
      })),
    };
  }

  async getOne(name: string):  Promise<{ status: 200; body: County } | { status: 404; body: { message: string } }> {
    const country = await this.countryModel.findOne({name}).exec();
    if (!country) {
      throw new NotFoundException(
        `Energy source with ID ${name} not found`,
      );
    }
    return {
        status: 200,
         body: {
            name: country.name,
            status: country.status
      }
    }
  }

   async update(name: string, updateUserDto: Partial<Omit<County, 'name'>>): Promise<{ status: 200; body: County } | { status: 404; body: { message: string } }> {
    const updatedCountry = await this.countryModel.findOneAndUpdate(
      { name },
      updateUserDto,
      { new: true } // Return the updated document
    ).exec();

    if (!updatedCountry) {
      return {
        status: 404,
        body: { message: `User with ID ${name} not found` },
      };
    }
    const countryObject = updatedCountry.toObject();
    return {
      status: 200,
      body: {
        name: countryObject.name,
        status: countryObject.status
      },
    };
  }

  async createBatch(energySources: County[]): Promise<{ status: 201; body: County[] }> {
  try {
    const createdEnergySources = await this.countryModel.insertMany(energySources);
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
