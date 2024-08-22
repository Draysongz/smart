import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'api-contract';
import { User } from 'src/schemas/User.schema';
import { Energy } from 'src/schemas/Energy.schema';
import { Asset as AssetSchema } from 'src/schemas/Assets.schema';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Energy.name) private energyModel: Model<Energy>,
    @InjectModel(AssetSchema.name) private assetModel: Model<AssetSchema>
  ) {}

  async create(createUserDto: Users): Promise<{ status: 201; body: Users }> {
    const existingUser = await this.userModel.findOne({ userId: createUserDto.userId }).exec();

  if (existingUser) {
    // If user exists, return the existing user
    return {
      status: 201,
      body: existingUser.toObject(), // Return the existing user data
    };
  }else{
const newUser = new this.userModel(createUserDto);
  const savedUser = await newUser.save();
  const userObject = savedUser.toObject();

    return {
      status: 201,
      body: {
        userId: userObject.userId,
        username: userObject.username,
        name: userObject.name,
        status: userObject.status,
        coinsEarned: userObject.coinsEarned,
        floatingTapEnergy: userObject.floatingTapEnergy,
        referralLink: userObject.referralLink,
        referrals: userObject.referrals,
        refillEnergy: userObject.refillEnergy,
        refillTime: userObject.refillTime,
        tapEnergy: userObject.tapEnergy,
        tapPower: userObject.tapPower,
        energyLevel: userObject.energyLevel,
        rechargeLevel: userObject.rechargeLevel,
        coinsPerHour: userObject.coinsPerHour,
         lastUpdatedTime: userObject.lastupdatedTime,
        energySources: userObject.energySources,
        assets: userObject.assets,
      },
    };
  }

  // If user doesn't exist, create a new user
  
  }

  async getAll(query: { userId?: number }): Promise<{ status: 200; body: Users[] }> {
    let users;

    if (query.userId) {
      const user = await this.userModel.findOne({ userId: query.userId }).exec();
      if (!user) {
        throw new NotFoundException({ message: `User with ID ${query.userId} not found` });
      }
      users = [user];
    } else {
      users = await this.userModel.find().exec();
    }

    return {
      status: 200,
      body: users.map(user => ({
        userId: user.userId,
        username: user.username,
        name: user.name,
        status: user.status,
        coinsEarned: user.coinsEarned,
        floatingTapEnergy: user.floatingTapEnergy,
        referralLink: user.referralLink,
        referrals: user.referrals,
        refillEnergy: user.refillEnergy,
        refillTime: user.refillTime,
        tapEnergy: user.tapEnergy,
        tapPower: user.tapPower,
        energyLevel: user.energyLevel,
        rechargeLevel: user.rechargeLevel,
        coinsPerHour: user.coinsPerHour,
         lastUpdatedTime: user.lastupdatedTime,
        energySources: user.energySources,
        assets: user.assets,
      })),
    };
  }

  async getOne(userId: number): Promise<{ status: 200; body: Users } | { status: 404; body: { message: string } }> {
    const user = await this.userModel.findOne({ userId }).exec();
    if (!user) {
      return {
        status: 404,
        body: { message: `User with ID ${userId} not found` },
      };
    }
    const userObject = user.toObject();
    return {
      status: 200,
      body: {
        userId: userObject.userId,
        username: userObject.username,
        name: userObject.name,
        status: userObject.status,
        coinsEarned: userObject.coinsEarned,
        floatingTapEnergy: userObject.floatingTapEnergy,
        referralLink: userObject.referralLink,
        referrals: userObject.referrals,
        refillEnergy: userObject.refillEnergy,
        refillTime: userObject.refillTime,
        tapEnergy: userObject.tapEnergy,
        tapPower: userObject.tapPower,
        energyLevel: userObject.energyLevel,
        rechargeLevel: userObject.rechargeLevel,
        coinsPerHour: userObject.coinsPerHour,
         lastUpdatedTime: userObject.lastupdatedTime,
        energySources: userObject.energySources,
        assets: userObject.assets,
      },
    };
  }

  async update(userId: number, updateUserDto: Partial<Omit<Users, 'userId'>>): Promise<{ status: 200; body: Users } | { status: 404; body: { message: string } }> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { userId },
      updateUserDto,
      { new: true } // Return the updated document
    ).exec();

    if (!updatedUser) {
      return {
        status: 404,
        body: { message: `User with ID ${userId} not found` },
      };
    }
    const userObject = updatedUser.toObject();
    return {
      status: 200,
      body: {
        userId: userObject.userId,
        username: userObject.username,
        name: userObject.name,
        status: userObject.status,
        coinsEarned: userObject.coinsEarned,
        floatingTapEnergy: userObject.floatingTapEnergy,
        referralLink: userObject.referralLink,
        referrals: userObject.referrals,
        refillEnergy: userObject.refillEnergy,
        refillTime: userObject.refillTime,
        tapEnergy: userObject.tapEnergy,
        tapPower: userObject.tapPower,
        energyLevel: userObject.energyLevel,
        rechargeLevel: userObject.rechargeLevel,
        coinsPerHour: userObject.coinsPerHour,
        energySources: userObject.energySources,
        assets: userObject.assets,
        lastUpdatedTime: userObject.lastupdatedTime
      },
    };
  }

  async remove(userId: number): Promise<{ status: 204; body: {} } | { status: 404; body: { message: string } }> {
    const result = await this.userModel.deleteOne({ userId }).exec();
    if (result.deletedCount === 0) {
      return {
        status: 404,
        body: { message: `User with ID ${userId} not found` },
      };
    }
    return {
      status: 204,
      body: {},
    };
  }

  
  async purchaseEnergySource(userId: number, energyType: string): Promise<{ status: 200; body: Users } | { status: 404; body: { message: string } } | { status: 400; body: { message: string } }> {
    // Retrieve the user
    const user = await this.userModel.findOne({ userId }).exec();
    if (!user) {
      return {
        status: 404,
        body: { message: `User with ID ${userId} not found` },
      };
    }

    // Retrieve the energy source
    const energySource = await this.energyModel.findOne({ type: energyType }).exec();
    if (!energySource) {
      return {
        status: 404,
        body: { message: `Energy source with type ${energyType} not found` },
      };
    }

    // Check if user has enough coins
    if (user.coinsEarned < energySource.purchaseCost) {
      return {
        status: 400,
        body: { message: `Not enough coins to purchase energy source` },
      };
    }

    // Deduct the cost from user's coins and add the energy source to user's energy sources
    user.coinsEarned -= energySource.purchaseCost;
    user.energySources = user.energySources || [];
    user.energySources.push({
      type: energySource.type,
      productionRate: energySource.productionRate,
      purchaseCost: energySource.purchaseCost,
      operational: energySource.operational,
      country: energySource.country,
      licenseFee: energySource.licenseFee,
      dailyOperatingHours: energySource.dailyOperatingHours,
    });

    // Use the existing update method
    const updateUserDto = {
      coinsEarned: user.coinsEarned,
      energySources: user.energySources,
    };

    const result = await this.update(userId, updateUserDto);

    // Ensure the result matches the expected type
    if (result.status === 200) {
      return {
        status: 200,
        body: result.body, // Ensure this matches the Users type
      };
    }

    // Return the error if any
    return result;
  }

  async purchaseAsset(userId: number, name: string): Promise<{ status: 200; body: Users } | { status: 404; body: { message: string } } | { status: 400; body: { message: string } }> {
  // Retrieve the user
  const user = await this.userModel.findOne({ userId }).exec();
  if (!user) {
    return {
      status: 404,
      body: { message: `User with ID ${userId} not found` },
    };
  }

  // Retrieve the asset
  const asset = await this.assetModel.findOne({ name: name }).exec();
  if (!asset) {
    return {
      status: 404,
      body: { message: `Asset with type ${name} not found` },
    };
  }

  // Check if user has enough coins
  if (user.coinsEarned < asset.price) {
    return {
      status: 400,
      body: { message: `Not enough coins to purchase asset` },
    };
  }

  // Deduct the cost from user's coins and add the asset to user's assets
  user.coinsEarned -= asset.price;
  user.assets = user.assets || [];
  user.assets.push({
    type: asset.type,
    name: asset.name,
    price: asset.price,
    levelRequirement: asset.levelRequirement,
  });

  // Use the existing update method
  const updateUserDto = {
    coinsEarned: user.coinsEarned,
    assets: user.assets,
  };

  const result = await this.update(userId, updateUserDto);

  // Ensure the result matches the expected type
  if (result.status === 200) {
    return {
      status: 200,
      body: result.body, // Ensure this matches the Users type
    };
  }

  // Return the error if any
  return result;
}

}
