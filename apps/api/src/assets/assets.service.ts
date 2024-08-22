import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Asset } from 'api-contract';
import { Asset as AssetSchema } from 'src/schemas/Assets.schema';

@Injectable()
export class AssetsService {
    constructor(@InjectModel(AssetSchema.name) private assetModel: Model<AssetSchema>) {}

    async create(createAssetDto: Asset): Promise<{ status: 201; body: Asset }> {
    const existingAsset = await this.assetModel
      .findOne({ name: createAssetDto.name })
      .exec();

    if (existingAsset) {
      return {
        status: 201,
        body: existingAsset.toObject(),
      };
    } else {
      const newAsset = new this.assetModel(createAssetDto);
      const savedAsset = await newAsset.save();
      const assetObject = savedAsset.toObject();
      return {
        status: 201,
        body: {
          type: assetObject.type,
          name: assetObject.name,
          levelRequirement: assetObject.levelRequirement,
          price: assetObject.price,
        },
      };
    }
  }

  async getAll(): Promise<{ status: 200; body: Asset[] }> {
    const assets = await this.assetModel.find().exec();
    return {
      status: 200,
      body: assets.map((asset) => ({
        type: asset.type,
        name: asset.name,
        levelRequirement: asset.levelRequirement,
        price: asset.price,
      })),
    };
  }

  async getOne(assetId: number): Promise<{ status: 200; body: Asset } | { status: 404; body: { message: string } }> {
    const asset = await this.assetModel.findById(assetId).exec();
    if (!asset) {
      throw new NotFoundException(`Asset with ID ${assetId} not found`);
    }
    return {
      status: 200,
      body: {
        type: asset.type,
        name: asset.name,
        levelRequirement: asset.levelRequirement,
        price: asset.price,
      },
    };
  }

  async update(assetId: number, updateAssetDto: Partial<Omit<Asset, 'assetId'>>): Promise<{ status: 200; body: Asset } | { status: 404; body: { message: string } }> {
    const updatedAsset = await this.assetModel.findOneAndUpdate(
      { assetId },
      updateAssetDto,
      { new: true }
    ).exec();

    if (!updatedAsset) {
      return {
        status: 404,
        body: { message: `Asset with ID ${assetId} not found` },
      };
    }
    const assetObject = updatedAsset.toObject();
    return {
      status: 200,
      body: {
        type: assetObject.type,
        name: assetObject.name,
        levelRequirement: assetObject.levelRequirement,
        price: assetObject.price,
      },
    };
  }

  async remove(assetId: number): Promise<{ status: 204; body: {} } | { status: 404; body: { message: string } }> {
    const result = await this.assetModel.deleteOne({ assetId }).exec();
    if (result.deletedCount === 0) {
      return {
        status: 404,
        body: { message: `Asset with ID ${assetId} not found` },
      };
    }
    return {
      status: 204,
      body: {},
    };
  }

  async createBatch(assets: Asset[]): Promise<{ status: 201; body: Asset[] }> {
    try {
      const createdAssets = await this.assetModel.insertMany(assets);
      return {
        status: 201,
        body: createdAssets.map(asset => asset.toObject()),
      };
    } catch (error) {
      // Handle errors as needed, e.g., validation errors
      throw new Error('Failed to create assets');
    }
  }

}
