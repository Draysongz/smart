// src/gateway/gateway.module.ts
import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';

@Module({
  providers: [UserGateway],
  exports: [UserGateway], // Export it to be used in other modules
})
export class GatewayModule {}
