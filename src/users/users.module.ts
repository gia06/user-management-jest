import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import "dotenv/config"

@Module({
  imports: [MongooseModule.forRoot(process.env.URI)],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
  // providers: [UsersService]
})
export class UsersModule {}
