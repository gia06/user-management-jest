import { Module } from '@nestjs/common';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';


@Module({
  imports: [DiskModule, CpuModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
